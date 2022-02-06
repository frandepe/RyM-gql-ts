import { useQuery } from "@apollo/client";
import GET_CHARACTERS from "../../graphql/getCharacters.graphql";
import Loading from "../Loading/Loading";

const CharactersList = () => {
  const { data, error, loading } = useQuery(GET_CHARACTERS);

  interface mapCharacters {
    id: number;
    image: string;
    name: string;
  }

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div className="cardsCharacters__container min-h-screen grid md:grid-cols-4 gap-4 justify-items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 grid-cols-1">
      {data.characters.results.map((pj: mapCharacters) => {
        return (
          <div
            className="relative bg-gray-800 hover:bg-gray-700 duration-200 flex flex-col items-center justify-center space-y-12 p-12 w-96 h-80 mt-48 shadow-2xl rounded-md"
            key={pj.id}
          >
            <img
              className="absolute -top-1/4 left-1/4 w-52 h-52 rounded-full duration-200 hover:translate-y-4"
              src={pj.image}
            />
            <div className="text-center">
              <p className="text-4xl text-slate-50">{pj.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
