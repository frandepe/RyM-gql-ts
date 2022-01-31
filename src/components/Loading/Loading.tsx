const Loading = () => {
  return (
    <div className="cursor-progress">
      <span className="flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      </span>
    </div>
  );
};

export default Loading;
