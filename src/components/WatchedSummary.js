import "./WatchedSummary.css";

const WatchedSummary = ({ watchedMovies }) => {
  const numMovies = watchedMovies.length;

  const imdbRatingAvg =
    watchedMovies.reduce((acc, movie) => {
      return (acc += movie.imdbRating);
    }, 0) / numMovies;

  const totalRuntime = watchedMovies.reduce((acc, movie) => {
    return (acc += movie.runtime ? movie.runtime : 0);
  }, 0);

  // console.log(imdbRatingAvg);

  return (
    <div className="watched-summary">
      <h3>MOVIES YOU WATCHED</h3>
      <div className="summary-details">
        <div className="summary-detail-item">
          <p>
            <strong>{numMovies}</strong>
          </p>
          <p>movies</p>
        </div>

        <div className="summary-detail-item">
          <p>
            <strong>{0}</strong>
          </p>
          <p>🌟 your</p>
        </div>

        <div className="summary-detail-item">
          <p>
            <strong>{imdbRatingAvg ? imdbRatingAvg.toFixed(1) : 0}</strong>
          </p>
          <p>⭐ IMDb</p>
        </div>

        <div className="summary-detail-item">
          <p>
            <strong>
              {totalRuntime > 999
                ? (totalRuntime / 60).toFixed(1)
                : totalRuntime}
            </strong>
          </p>
          <p>⌛ {totalRuntime > 999 ? "hour" : "min"}</p>
        </div>
      </div>
    </div>
  );
};

export default WatchedSummary;
