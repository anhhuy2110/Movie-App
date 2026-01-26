import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header h-[14] lg:h-20 ">
      <header className="flex justify-between items-center px-10 h-[10vh] bg-gray-900 text-cyan-50">
        <div className="flex items-center content-center gap-10 lg:gap-15">
          <img
            src="/public/img/Netflix_Logo.png"
            alt="logo-netflix"
            className="w-30"
          />
          <a href="#!" className="lg:text-lg">
            Movies
          </a>
          <a className="inline-block w-full" href="#!">
            TV Shows
          </a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
