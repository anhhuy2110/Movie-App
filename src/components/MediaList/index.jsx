import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TAB = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "movie",
    name: "Movie",
  },
  {
    id: "tv",
    name: "TV",
  },
];

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState("all");

  const url = `https://api.themoviedb.org/3/trending/${activeTabId}/day?language=en-US`;

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
      const trendingMediaList = data.results;
      console.log(trendingMediaList);
      setMediaList(trendingMediaList);
    });
  }, [activeTabId, url]);

  return (
    <div className="px-20 py-40 bg-black text-white font-bold">
      <div className="slider-bar flex items-center content-center h-35">
        <p className="text-3xl">Trending</p>
        <ul className="flex  ml-15 rounded border-2 border-white">
          {TAB.map((tab) => (
            <li 
              key={tab.id} 
              className={`flex items-center content-center p-3 text-lg ${tab.id === activeTabId ? "bg-white text-black" : ""}`} 
              onClick={() => {
                setActiveTabId(tab.id);
              }}>
              <a href="#!">{tab.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            backdropPath={media.backdrop_path}
            point={media.vote_average}
            type={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
