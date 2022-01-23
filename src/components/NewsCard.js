function NewsCard() {
  return (
    <div className="rounded-md p-xs border white text-white border-opacity-40 transition duration-500 ease-in-out hover:shadow-md w-1/3">
      <h2 className="mb-xs text-white text-opacity-70">Latest News</h2>
      <div className="flex flex-row">
        <p>
          Titan analytics places in the Solana Ignite hackathon gaming track
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
