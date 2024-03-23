import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ addToWatchList, removeFromWatchList , watchList}) {
  let [movies, setMovies] = useState([]);

  let [pageNumber, setPageNumber] = useState(1);

  let handlePre = () => {
    if (pageNumber <= 1) setPageNumber(1);
    else setPageNumber(pageNumber - 1);
  };

  let handleNext = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=<API_KEY>&language=en-US&page=${pageNumber}`
      )
      .then(function (response) {
        setMovies(response.data.results);
      });
  }, [pageNumber]);

  return (
    <div>
      <div className="movies-container">Trending Movies</div>
      <div className="movies-grid">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              addToWatchList={addToWatchList}
              movieObj={movieObj}
              removeFromWatchList={removeFromWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>
      <Pagination
        handlePre={handlePre}
        handleNext={handleNext}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default Movies;
