import React from "react";
import CircularProgressBar from "./CircularProgressBar";
import { useNavigate } from "react-router-dom";


const MovieCard = ({id,title,releaseDate,backdropPath,point,type}) => {

  // const navigate = useNavigate();

  const showDetails = () => {
    console.log(`${id}`);
    // navigate(`/movie/${id}`);

  }

  return (
    <div className="border border-slate-800 rounded-lg"
      onClick={showDetails}
    >
      {
        type === "tv" && (
          <p className="absolute bg-black text-white p-1 text-sm rounded shadow-md">TV Show</p>
        )
      }
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500/${backdropPath}`}
        alt="Image Movie"
      />
      <div className="px-4 py-2 relative -top-[1.5vw]">
        <CircularProgressBar 
          percent={Math.round(parseInt(point)*10)} 
          stockeColor={point >= 7 ? 'green' : point >= 5 ? 'orange' : 'red'}/>
        <h3 className="title-movie font-bold mt-2">{title}</h3>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
