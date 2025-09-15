import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";


const FeatureMovies = () => {
  return (
    <div className="movie-container relative">
      <Movie/>
      <PaginateIndicator />
    </div>
  );
};

export default FeatureMovies;
