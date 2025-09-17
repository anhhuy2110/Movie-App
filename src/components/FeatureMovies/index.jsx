import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

const FeatureMovies = () => {
  const [movie, setMovie] = useState([]);
  const [movieActive, setMovieActive] = useState();

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVjODU5NDcwNDAwOTA4NGYxMWNkOGRjMjgwOTBhNyIsIm5iZiI6MTc1NzkyODU3MS44NDcwMDAxLCJzdWIiOiI2OGM3ZGM3YjZjMWZkOGI4M2E4Njg2ZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dRBBsmNc92AuKv4LSWYakjZhuhMO9DiG0OQXzn9k1Cg",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      // console.log(popularMovies);
      setMovie(popularMovies);
      setMovieActive(popularMovies[0].id);
    });
  }, []);

  // console.log(movie);


  return (
    <div className="movie-container relative">
      {
        movie.filter((movie)=> {
          if(movie.id === movieActive)
            return movie;
        }).map(movie => 
          <Movie key={movie.id} data={movie} active={movieActive}/>
        )
      }
		  <PaginateIndicator movie={movie} movieActive={movieActive} setMovieActive={setMovieActive}/>
    </div>
  );
};

export default FeatureMovies;
