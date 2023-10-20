import { type LinksFunction } from "@remix-run/node";
import movieStyles from "~/styles/projects/movie.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: movieStyles,
  },
];

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&api_key=e0f4c27dbefdc34a10f79ca4c8ad0429&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=e0f4c27dbefdc34a10f79ca4c8ad0429&query="';

getMovies(API_URL);

async function getMovies(url) {
  const response = await fetch(url);
  const responseData = await response.json();
}

export default function Movies() {
  return (
    <>
      <body>
        <header>
          <form id="form">
            <input
              type="text"
              id="search"
              className="search"
              placeholder="Search"
            />
          </form>
        </header>
        <main id="main">
          <div className="movie">
            <img src="/imgs/movie.jpg" alt="movieImage" />
            <div className="movie-info">
              <h3>Movie title</h3>
              <span className="green">9.8</span>
            </div>
            <div className="overview">
              <h3>Overview</h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis amet sed illum esse repellendus itaque perferendis iste
              veniam, illo possimus.
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
