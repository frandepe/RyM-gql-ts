import CharacterByName from "../../components/CharacterByName/CharacterByName";

const Character = () => {
  return (
    <div style={{ backgroundColor: "rgba(102, 103, 171, 0.9)" }}>
      <div className="Character__container-h2">
        <h2 className="text-xl text-center p-8 text-white">
          In this section, you can find your favorite character of the series
        </h2>
      </div>
      <CharacterByName />
    </div>
  );
};

export default Character;
