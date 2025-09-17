import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Movie = (props) => {

  if (!props) return null;

  const {data:{backdrop_path,title,release_date,overview}} = props;

  return (
    <div>
        <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path || ''}`}
        alt="backgroud-img"
        className="h-[85vh] w-full aspect-video brightness-50"
      />
      <div className="movie-content absolute top-20 left-20 w-[40vw] text-gray-50 mt-5">
        <p className="movie-title text-4xl font-bold">{title}</p>
        <div className="movie-info mt-8">
          <p className="inline-block border border-gray-400 p-2 text-gray-400">
            PG13
          </p>
          <p className="mt-3 text-xl">{release_date || ''}</p>
        </div>
        <div className="movie-overview mt-8 hidden sm:block">
          <p className="text-4xl font-bold">Overview</p>
          <p className="desc mt-2 text-xl">{overview || ''}</p>
        </div>
        <div className="cta flex  mt-15">
          <div className="flex justify-center items-center w-40 h-15 text-black rounded bg-white cursor-pointer">
            <FontAwesomeIcon icon={faPlay} />
            <a className="ml-2">Trailer</a>
          </div>
          <a className="flex items-center justify-center w-40 h-15 text-white rounded bg-slate-300/35 ml-4 cursor-pointer">
            View Detail
          </a>
        </div>
      </div>
    </div>
  )
}

export default Movie