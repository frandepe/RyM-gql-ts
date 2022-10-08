interface Props {
  increaseBy: (value: number) => void;
  setCounter: (value: React.SetStateAction<number>) => void;
  counter: number;
}

export const PaginationEpisodes = ({
  increaseBy,
  setCounter,
  counter,
}: Props) => {
  return (
    <ul className="flex items-center content-center justify-center my-3.5">
      <li>
        <button
          onClick={() => increaseBy(-1)}
          className="h-10 px-5 text-gray-700 transition-colors duration-150 bg-white border border-r-0 border-gray-700 rounded-l-lg focus:shadow-outline hover:bg-gray-100"
        >
          Prev
        </button>
      </li>
      <li>
        <button
          onClick={() => setCounter(1)}
          className="h-10 px-5 text-gray-700 transition-colors duration-150 bg-white border border-r-0 border-gray-700 focus:shadow-outline hover:bg-gray-100"
        >
          1
        </button>
      </li>
      <li>
        <button
          onClick={() => setCounter(2)}
          className="h-10 px-5 text-gray-700 transition-colors duration-150 bg-white border border-r-0 border-gray-700 focus:shadow-outline hover:bg-gray-100"
        >
          2
        </button>
      </li>
      <li>
        <button
          onClick={() => setCounter(3)}
          className="h-10 px-5 text-gray-700 transition-colors duration-150 bg-white border border-r-0 border-gray-700 focus:shadow-outline hover:bg-gray-100"
        >
          3
        </button>
      </li>
      <li>
        <button
          onClick={() => counter < 3 && increaseBy(1)}
          className="h-10 px-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-700 rounded-r-lg focus:shadow-outline hover:bg-gray-100"
        >
          Next
        </button>
      </li>
    </ul>
  );
};
