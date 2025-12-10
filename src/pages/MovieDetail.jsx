import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgressBar from "../components/MediaList/CircularProgressBar";

function MovieDetail() {
  return (
    <div className="relative text-white overflow-hidden">
      <img
        className="absolute inset-0 brightness-[.3] w-full"
        src="https://image.tmdb.org/t/p/w500//zpEWFNqoN8Qg1SzMMHmaGyOBTdW.jpg"
        alt=""
      />
      <div className="flex relative max-w-screen-xl mx-auto px-6 py-8 gap-6 lg:gap-8">
        <div className="flex-1">
          <img
            className=""
            src="https://image.tmdb.org/t/p//original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
            alt=""
          />
        </div>
        <div className="flex-2">
          <p className="font-bold mb-2 text-lg lg:text-2xl">Test</p>
          <div className="flex gap-2">
            <span className="text-gray-400 border border-gray-400">G</span>
            <p>2024-07-11</p>
            <p>Lorem ipsum, dolor sit amet.</p>
          </div>
          <div className="flex mt-4 items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar percent={90} size={3.5} strokeWidth={0.3}/>Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="font-bold text-[1.3w] mb-2">Overview</p>
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              sequi tempora harum libero, quae rem ab, expedita omnis
              dignissimos placeat maiores eum debitis? Dolore perspiciatis ut
              nesciunt voluptatem cum eius? Illum vel, laboriosam facere
              quisquam dolorum vero odit voluptates nihil optio vitae ex culpa
              blanditiis adipisci nulla impedit corrupti. Iusto in rerum quaerat
              incidunt. Accusantium totam similique magni ullam sunt.
              Perferendis harum illo inventore at! Itaque laborum vel ullam
              veritatis at a sunt corrupti, hic exercitationem ex sapiente saepe
              voluptatem optio similique sequi neque perferendis aliquam quis
              dolorem facilis inventore!
            </p>
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
  );
}

export default MovieDetail;
