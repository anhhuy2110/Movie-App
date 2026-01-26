import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/MediaList/CircularProgressBar";
// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail() {
  const [movieIfo, setMovieIfo] = useState([]);
  console.log(movieIfo);
  // const {id} = useParams();
  const id = 16;

  const genres = movieIfo.genres?.map((obj) => obj.name).join(",");

  const certification = (
    (movieIfo.release_dates?.results || []).find(
      (obj) => obj.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((obj) => obj.certification)?.certification;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjODU5NDcwNDAwOTA4NGYxMWNkOGRjMjgwOTBhNyIsIm5iZiI6MTc1NzkyODU3MS44NDcwMDAxLCJzdWIiOiI2OGM3ZGM3YjZjMWZkOGI4M2E4Njg2ZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dRBBsmNc92AuKv4LSWYakjZhuhMO9DiG0OQXzn9k1Cg",
      },
    };

    fetch(url, options)
      .then(async (res) => {
        setMovieIfo(await res.json());
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <div className="relative text-white overflow-hidden">
        <img
          className="absolute inset-0 brightness-[.3] w-full"
          src={`https://image.tmdb.org/t/p/w500//${movieIfo.backdrop_path}`}
          alt=""
        />
        <div className="flex relative max-w-screen-xl mx-auto px-6 py-8 gap-6 lg:gap-8">
          <div className="flex-1">
            <img
              className=""
              src={`https://image.tmdb.org/t/p//original/${movieIfo.poster_path}.jpg`}
              alt=""
            />
          </div>
          <div className="flex-2">
            <p className="font-bold mb-2 text-lg lg:text-2xl">
              {movieIfo.original_title}
            </p>
            <div className="flex gap-2">
              <span className="text-gray-400 border border-gray-400">
                {certification}
              </span>
              <p>{movieIfo.release_date}</p>
              <p>{genres}</p>
            </div>
            <div className="flex mt-4 items-center gap-4">
              <div className="flex items-center gap-2">
                <CircularProgressBar
                  percent={90}
                  size={3.5}
                  strokeWidth={0.3}
                />
                Rating
              </div>
              <button>
                <FontAwesomeIcon icon={faPlay} />
                Trailer
              </button>
            </div>
            <div className="mt-4">
              <p className="font-bold text-[1.3w] mb-2">Overview</p>
              <p className="font-bold">{movieIfo.overview}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div>
                <p className="font-bold">Director</p>
                <p>Lorem, ipsum.</p>
              </div>
              <div>
                <p className="font-bold">Writer</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
