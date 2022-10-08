interface Props {
  setCountPage: (value: React.SetStateAction<number>) => void;
  prev: number;
  next: number;
  countPage: number;
  pages: number;
}

export const Pagination = ({
  setCountPage,
  prev,
  next,
  countPage,
  pages,
}: Props) => {
  return (
    <ul className="flex items-center content-center justify-center my-3.5">
      <li>
        <button
          onClick={() => prev !== null && setCountPage(prev)}
          className="h-10 px-5 text-gray-700 transition-colors duration-150 bg-white border border-r-0 border-gray-700 rounded-l-lg focus:shadow-outline hover:bg-gray-100"
        >
          Prev
        </button>
      </li>
      <li>
        <button className="h-10 px-5 text-gray-700 transition-colors duration-150 bg-white border border-r-0 border-gray-700 focus:shadow-outline hover:bg-gray-100">
          {countPage} of {pages}
        </button>
      </li>
      <li>
        <button
          onClick={() => next !== null && setCountPage(next)}
          className="h-10 px-5 text-gray-700 transition-colors duration-150 bg-white border border-gray-700 rounded-r-lg focus:shadow-outline hover:bg-gray-100"
        >
          Next
        </button>
      </li>
    </ul>
  );
};
