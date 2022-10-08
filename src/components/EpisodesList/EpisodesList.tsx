import Loading from "../Loading/Loading";
import { useEpisodes } from "../../graphql/getEpisodes.graphql";
import { useCounter } from "./useCounter";
import { PaginationEpisodes } from "./PaginationEpisodes";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const EpisodesList = () => {
  const { counter, setCounter, increaseBy } = useCounter();
  const { data, error, loading } = useEpisodes(counter);

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  interface EpisodeCharacters {
    name: string;
    image: string;
  }

  interface mapEpisodes {
    id: number;
    name: string;
    air_date: string;
    characters: EpisodeCharacters[];
  }

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div className="p-7">
      <table className="border-collapse border-slate-500 min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              #
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Episode
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Characters
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Air date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.episodes.results.map((ep: mapEpisodes) => (
            <tr key={ep.id}>
              <td>{ep.id}</td>
              <td>{ep.name}</td>
              <td className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button>
                      <span className="sr-only">Open user menu</span>
                      <p>Characters &#8681;</p>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {ep?.characters?.map(
                        (character: EpisodeCharacters, i) => (
                          <Menu.Item key={i}>
                            {({ active }) => (
                              <p
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 grid gap-4 grid-cols-2 shadow-inner"
                                )}
                              >
                                {character?.name}
                                <img
                                  src={character?.image}
                                  alt="algo"
                                  className="w-8 h-8"
                                />
                              </p>
                            )}
                          </Menu.Item>
                        )
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </td>
              <td>{ep?.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationEpisodes
        increaseBy={increaseBy}
        setCounter={setCounter}
        counter={counter}
      />
    </div>
  );
};

export default EpisodesList;
