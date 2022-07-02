import charactersImg from "./charactersImg.jpg";
import episodesImg from "./episodesImg.png";
import characteridImg from "./characteridImg.jpg";
import CardsHome from "../../components/CardsHome/CardsHome";
import "./home.css";

const Home = () => {
  return (
    <div className="Home__container bg-green-400">
      <section
        className="relative overflow-hidden bg-no-repeat bg-cover mb-20 h-4/5"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-s5-2-1625139647.jpg')",
          height: "640px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(102, 103, 171, 0.9)" }}
        >
          <div className="container text-white h-full py-28 px-3 mx-auto">
            <div className="grid grid-cols-1 gap-4 text-white px-6 h-full flex items-center">
              <div className="lg:w-2/3">
                <h2 className="text-6xl font-black mb-6">Rick and Morty</h2>
                <p className="text-xl opacity-90">
                  This animation teaches to respect older people, even if it is
                  a dangerous alcoholic, delusional, who lives a parallel
                  reality and who... is your own grandfather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="Home__cards absolute flex justify-center items-center w-full h-full top-52">
        <CardsHome
          imgs={charactersImg}
          page="Characters"
          desc="Discover a list of characters that appear on the popular Adult Swim show, Rick and Morty."
        />
        <CardsHome
          imgs={episodesImg}
          page="Episodes"
          desc="Relive the amazing trips and the best adventures of this great series"
        />
        <CardsHome
          imgs={characteridImg}
          page="Search"
          desc="Look for your favorite character with all his information"
        />
      </div>
      <div className="Home__container-h1 h-96 pt-48 text-center">
        <div className="text-4xl font-medium text-black">
          Welcome to the world of <span>Rick and Morty</span>
        </div>

        <h2 className="text-xl">
          On this website, you can learn more about the series
        </h2>
      </div>
    </div>
  );
};

export default Home;
