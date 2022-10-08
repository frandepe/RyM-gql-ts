export const CharacterNotFound = () => {
  return (
    <section
      style={{ backgroundColor: "rgba(102, 103, 171, 0.1)" }}
      className="flex items-center h-full p-16 dark:text-gray-100"
    >
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h4 className="mb-8 font-extrabold text-4xl dark:text-gray-600">
            <span className="sr-only">Error</span>Try again...
          </h4>
          <p className="text-2xl font-semibold md:text-3xl">
            We couldn't find your character
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But don't worry, you can find another character
          </p>
        </div>
      </div>
    </section>
  );
};
