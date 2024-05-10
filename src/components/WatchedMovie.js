import "./WatchedMovie.css";

const WatchedMovie = ({ movie, setWatchedMovies }) => {
  //   console.log(movie);
  const removeFromWatchedListHandler = (id) => {
    setWatchedMovies((movies) => movies.filter((m) => (m.id === id ? "" : m)));
  };

  return (
    <>
      <li className="watched-movie">
        <button
          className="remove-from-watchedlist"
          onClick={() => removeFromWatchedListHandler(movie.id)}
        >
          &times;
        </button>
        <div className="watched-movie-img">
          <img src={movie.poster} />
        </div>
        <div className="watched-movie-desc">
          <h3>{movie.title}</h3>
          <div className="watched-movie-desc-item">
            <p>⭐{movie.imdbRating}</p>
            <p>🌟{movie.userRating}</p>
            <p>⌛{movie.runtime ? movie.runtime : "_"} min</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default WatchedMovie;
