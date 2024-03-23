import React from "react";

function MovieCard({
  addToWatchList,
  movieObj,
  removeFromWatchList,
  watchList,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) return true;
    }
    return false;
  }

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => removeFromWatchList(movieObj)}
          className="emoji-container"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => addToWatchList(movieObj)}
          className="emoji-container"
        >
          &#128525;
        </div>
      )}
      <div className="movie-card-title">{movieObj.original_title}</div>
    </div>
  );
}

export default MovieCard;
