import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import MovieBox from "./components/MovieBox";
import WatchedBox from "./components/WatchedBox";
import Movie from "./components/Movie";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SelectedMovie from "./components/SelectedMovie";
import StarRating from "./components/StarRating";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=23a46ea8&s=${query}`
        );

        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Movie not found!");
        }

        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [query]);

  const handleSelectedMovie = function (id) {
    // handleCloseMovie();
    setSelectedId(selectedId === id ? null : id);
  };

  const handleCloseMovie = function () {
    setSelectedId(null);
  };

  const onAddingToWatchedListHandler = (newWatchedMovie) => {
    setWatchedMovies((watched) => [...watched, newWatchedMovie]);
  };

  // console.log(watchedMovies);

  return (
    <div>
      <Header result={movies.length}>
        <SearchBar query={query} onSetQuery={setQuery} />
      </Header>
      <Main>
        <MovieBox>
          {!isLoading && !error && (
            <ul>
              {movies?.map((movie, i) => (
                <Movie
                  movieList={movies[i]}
                  key={movies[i].imdbID}
                  onClicking={handleSelectedMovie}
                ></Movie>
              ))}
            </ul>
          )}

          {error && <ErrorMessage message={error} />}

          {isLoading && <Loader />}
        </MovieBox>
        <WatchedBox>
          {selectedId ? (
            <>
              <div className="close-movie-btn" onClick={handleCloseMovie}>
                &#11013;
              </div>
              <SelectedMovie
                id={selectedId}
                onAddingToWatchedList={onAddingToWatchedListHandler}
                rating={rating}
                setRating={setRating}
              />
            </>
          ) : (
            <>
              <WatchedSummary watchedMovies={watchedMovies} />
              <WatchedMovieList
                watchedMovies={watchedMovies}
                setWatchedMovies={setWatchedMovies}
              />
            </>
          )}
        </WatchedBox>
      </Main>
    </div>
  );
}

export default App;

// API Key = 23a46ea8   23a46ea8

// tt0816692
// tt5083736
