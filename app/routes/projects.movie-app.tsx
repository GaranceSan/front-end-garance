import { type LinksFunction, json } from "@remix-run/node";
import movieStyles from "~/styles/projects/movie.css";
import { useLoaderData } from "@remix-run/react";

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
  'https://api.themoviedb.org/3/search/movie?api_key=e0f4c27dbefdc34a10f79ca4c8ad0429&query="';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  const query = search.get("q");
  let API_URL =
    "https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&api_key=e0f4c27dbefdc34a10f79ca4c8ad0429&page=1";
  if (query) {
    API_URL = `https://api.themoviedb.org/3/search/movie?api_key=e0f4c27dbefdc34a10f79ca4c8ad0429&query=${query}`;
  }
  const response = await fetch(API_URL);
  const responseData = await response.json();
  const { results } = responseData;
  return json({
    results,
  });
};

export default function Movies() {
  const { results } = useLoaderData<typeof loader>();

  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 4) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <>
      <body>
        <header>
          <form id="form">
            <input
              type="text"
              id="search"
              name="q"
              className="search"
              placeholder="Search"
            />
          </form>
        </header>
        <main id="main">
          {results.map((r) => {
            return (
              <div className="movie" key={r.id}>
                <img src={`${IMG_PATH}${r.poster_path}`} alt="movieImage" />
                <div className="movie-info">
                  <h3>{r.title}</h3>
                  <span className={getClassByRate(r.vote_average)}>
                    {r.vote_average}
                  </span>
                </div>
                <div className="overview">
                  <h3>Overview</h3>
                  <p>{r.overview}</p>
                </div>
              </div>
            );
          })}
        </main>
      </body>
    </>
  );
}
