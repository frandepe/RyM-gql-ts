import { useParams } from "react-router-dom";
import { useCharacter } from "../../graphql/getCharacter.graphql";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const OutletCharacter = () => {
  const { id }: any = useParams();
  const { data, error, loading } = useCharacter(id);
  const navigate = useNavigate();

  interface mapCharacter {
    id: number;
    episode: string;
    air_date: string;
    name: string;
  }

  const handleClick = () => {
    navigate(`/characterbyname`);
  };

  console.log({
    error,
    data,
    loading,
  });

  if (loading) return <Loading />;
  if (error) return <p>Something went wrong</p>;

  return (
    <div key={data.character.id}>
      <section className="mb-20">
        <div className="max-w-4xl mx-auto text-gray-800">
          <div className="text-center">
            <h3 className="mb-6 text-gray-800 text-2xl font-semibold">
              Character information
            </h3>
            <p className="mb-12 mx-auto max-w-xl">
              The series has featured a number of bizarre characters that have
              either helped Rick and Morty or made their path more difficult
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-12 flex justify-center">
            <div className="mb-12 md:mb-0">
              <div
                className="block rounded-lg shadow-lg text-white relative overflow-hidden bg-no-repeat bg-cover"
                style={{ backgroundPosition: "50%" }}
              >
                <img src={data.character.image} className="" />
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style={{ backgroundColor: "rgba(72, 23, 144, 0.7)" }}
                >
                  <div className="flex justify-center items-center h-full">
                    <div className="opacity-100 p-6 text-center">
                      <h2 className="text-3xl font-semibold mb-4">
                        {data.character.name}
                      </h2>
                      <p className="p-1.5">
                        <i className="fas fa-male"></i>{" "}
                        <span className="mb-6">{data.character.species}</span>
                      </p>
                      {data.character.type && (
                        <p>
                          <i className="fas fa-question"></i>{" "}
                          <span className="mb-6">{data.character.type}</span>
                        </p>
                      )}
                      {data.character.gender && (
                        <p>
                          <i className="fas fa-venus-mars"></i>{" "}
                          <span className="mb-6">{data.character.gender}</span>
                        </p>
                      )}
                      {data.character.status && (
                        <p className="p-1.5">
                          <i className="fas fa-heartbeat"></i>{" "}
                          <span className="mb-6">{data.character.status}</span>
                        </p>
                      )}
                      <button
                        type="button"
                        className="mt-3 inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={handleClick}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="shrink-0">
                  <i className="fas fa-video"></i>
                </div>
                <div className="grow ml-6">
                  <h5 className="mb-2 font-medium">
                    List of episodes and seasons:
                  </h5>
                  {data.character.episode.map((episode: mapCharacter) => {
                    return (
                      <div key={episode.id}>
                        ‣ {episode.name} - <b>{episode.episode}</b> -{" "}
                        {episode.air_date}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutletCharacter;
