import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import SEARCH_CHARACTER from "../../graphql/searchCharacter.graphql";
import { useNavigate, Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";
import type { ChangeEvent } from "react";

interface mapCharacters {
  id: number;
  image: any;
  name: string;
  species: string;
  type: string;
  status: "Alive" | "Dead" | "unknown";
  gender: string;
}

const CharacterByName = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [getCharacterByName, { loading, error, data }] = useLazyQuery(
    SEARCH_CHARACTER,
    {
      variables: {
        name,
      },
    }
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  console.log({
    error,
    data,
    loading,
  });

  return (
    <div>
      <Outlet />
      <div className="mb-6 mx-7 flex justify-center items-center">
        <form className="m-4 flex">
          <input
            className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            value={name}
            type="search"
            onChange={handleSearchChange}
            placeholder="Search a character"
          />
          <button
            className="px-8 rounded-r-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-gray-100 font-bold p-4 uppercase border-green-600 border-t border-b border-r"
            onClick={() => getCharacterByName()}
            type="button"
          >
            Search
          </button>
        </form>
      </div>

      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 m-4"
          role="alert"
        >
          <span className="font-medium">Alert!</span> We couldn't find what you
          were looking for - Try searching for a character, for example:
          Rick/Jerry/Meeseek...
        </div>
      )}
      {data && (
        <div className="bg-gray-800 grid md:grid-cols-4 gap-4 justify-items-center grid-cols-1">
          {data?.characters?.results?.map((pj: mapCharacters) => {
            return (
              <div className="antialiased text-gray-900 my-7" key={pj.id}>
                <div>
                  <img
                    src={pj.image}
                    alt=" random img"
                    className="object-cover object-center rounded-full shadow-md"
                  />

                  <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg ">
                      <div className="flex items-baseline ">
                        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                          {pj.species}
                        </span>
                      </div>

                      <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                        {pj.name}
                      </h4>

                      <div className="mt-1">
                        {pj.type}
                        <span className="text-gray-600 text-sm">
                          {" "}
                          -{pj.gender}
                        </span>
                      </div>
                      <button
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={() => {
                          navigate(`/characterbyname/${pj.id}`);
                          document.documentElement.scrollTop = 0;
                        }}
                      >
                        Get Information
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterByName;
