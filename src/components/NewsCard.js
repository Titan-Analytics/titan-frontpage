function NewsCard(props) {
  return (
    <div className="rounded-md p-xs border white text-white border-opacity-40 transition duration-500 ease-in-out hover:shadow-md w-1/2">
      <h2 className="mb-xs text-white text-opacity-70">Latest News</h2>
      <div className="flex flex-row">
        <p>{props.text}</p>
      </div>
      <p>{props.subtext}</p>
    </div>
  );
}

export default NewsCard;
