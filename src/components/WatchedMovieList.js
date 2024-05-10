import WatchedMovie from "./WatchedMovie";
import "./WatchedMovieList.css";

const WatchedMovieList = ({ watchedMovies, setWatchedMovies }) => {
  return (
    <ul className="watched-movie-list">
      {watchedMovies.map((watchedMovie) => (
        <WatchedMovie
          movie={watchedMovie}
          key={watchedMovie.imdbRating}
          setWatchedMovies={setWatchedMovies}
        />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
