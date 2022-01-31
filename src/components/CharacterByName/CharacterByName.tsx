import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import SEARCH_CHARACTER from "../../graphql/searchCharacter.graphql";
import { useNavigate, Outlet } from "react-router-dom";
import Loading from "../Loading/Loading";

interface mapData {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
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

  return (
    <div>
      <Outlet />
      <div className="mb-6 mx-7 flex justify-center items-center">
        <input
          type="text"
          className="m-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Search a character"
        />
        <div>
          <button
            onClick={() => getCharacterByName()}
            className="m-4 flex-shrink-0 bg-green-700 hover:bg-green-600 border-green-700 hover:border-green-600 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Search
          </button>
        </div>
      </div>

      {loading && (
        <div>
          <Loading />
        </div>
      )}
      {error && (
        <div>
          <p style={{ color: "red" }}>
            We couldn't find what you were looking for - Try searching for a
            character, for example: Rick/Jerry/Meeseek...
          </p>
        </div>
      )}
      {data && (
        <div className="bg-gray-800 grid md:grid-cols-4 gap-4 justify-items-center grid-cols-1">
          {data.characters.results.map((pj: mapData) => {
            return (
              <div className="antialiased text-gray-900 my-7" key={pj.id}>
                <div>
                  <img
                    src={pj.image}
                    alt=" random imgee"
                    className="object-cover object-center rounded-lg shadow-md"
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
                        className='"mx-2 my-2 bg-green-700 transition duration-150 ease-in-out hover:bg-green-600 rounded text-white px-6 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-green-600"'
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
