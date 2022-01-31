import { useQuery } from "@apollo/client";
import Loading from "../Loading/Loading";
import GET_EPISODES from "../../graphql/getEpisodes.graphql";

const EpisodesList = () => {
  const { data, error, loading } = useQuery(GET_EPISODES);

  interface mapEpisodes {
    id: number;
    name: string;
    air_date: string;
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
              Air date
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.episodes.results.map((ep: mapEpisodes) => (
            <tr key={ep.id}>
              <td>{ep.id}</td>
              <td>{ep.name}</td>
              <td>{ep.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodesList;
