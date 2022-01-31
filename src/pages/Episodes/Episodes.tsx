import EpisodesList from "../../components/EpisodesList/EpisodesList";

const Episodes = () => {
  return (
    <div>
      <div className="p-7">
        <h2 className="text-xl text-center">List of first 20 episodes</h2>
      </div>
      <EpisodesList />
    </div>
  );
};

export default Episodes;
