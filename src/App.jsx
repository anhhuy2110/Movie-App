import Header from "./components/Header";
import FeatureMovies from "./components/FeatureMovies";
import MediaList from './components/MediaList'
import { TRENDING_TABS, TOP_RATE_TABS } from "./libs/constant";

function App() {
  return (
    <div>
      <Header />
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS}/>
      <MediaList title="Top Rated" tabs={TOP_RATE_TABS}  />

    </div>
  );
}

export default App;
     