import { useEffect, useState } from "react";
import "./SelectedMovie.css";
import StarRating from "./StarRating";

const SelectedMovie = ({
  children,
  id,
  onAddingToWatchedList,
  rating,
  setRating,
}) => {
  const [movieById, setMovieById] = useState({});

  useEffect(
    function () {
      async function fetchById() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=23a46ea8&i=${id}`
        );
        const data = await res.json();
        setMovieById(data);
      }
      fetchById();
    },
    [id]
  );

  const {
    Title,
    Year,
    Genre,
    Language,
    Poster,
    imdbRating,
    Released,
    Runtime,
    Director,
    Plot,
    Actors,
  } = movieById;

  const addMovieToListHandler = () => {
    const newWatchedMovie = {
      id: id,
      poster: Poster,
      title: Title,
      imdbRating: Number(imdbRating),
      runtime: Number(Runtime.split(" ").at(0)),
      userRating: rating,
    };
    onAddingToWatchedList(newWatchedMovie);
  };

  return (
    // movieById.Response === "False" ? '' :
    <>
      <div className="movie-details">
        <div className="movie-details-img">
          <img src={Poster} />
        </div>

        <div className="movie-details-sub-details">
          <h3>{Title}</h3>
          {/* <p>{Runtime}</p> */}
          <p>
            <span>📅 {Released}</span> <span>⌛{Runtime}</span>
          </p>
          <p>🎞️ {Genre}</p>
          <p>⭐{imdbRating} IMDb Rating</p>
        </div>
      </div>

      <div className="rate">
        <StarRating rating={rating} setRating={setRating} />
        {rating > 0 && (
          <button
            className="add-to-watched-list-btn"
            onClick={addMovieToListHandler}
          >
            + Add to watched list
          </button>
        )}
      </div>

      <div className="movie-description">
        <p className="plot">{Plot}</p>
        <p>Starring {Actors}</p>
        <p>Directed By {Director}</p>
      </div>
    </>
  );
};

export default SelectedMovie;
