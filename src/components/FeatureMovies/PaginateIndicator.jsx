import React from "react";

const PaginateIndicator = ({ movie, movieActive, setMovieActive}) => {
  return (
    <div className="movie-slider absolute right-30 bottom-[8%]">
      <ul className="flex gap-3">
        {movie.map((movie) => {
          return(
            <li key={movie.id} className={`h-3 w-16 cursor-pointer ${movie.id === movieActive ? 'bg-slate-100' : 'bg-slate-600'}` }
              onClick={() => {return setMovieActive(movie.id)}}
            ></li>
          )
        })}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
