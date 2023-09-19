import { type LinksFunction } from "@remix-run/node";
import apiFetchStyles from "~/styles/projects/apiFetch.css";

import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: apiFetchStyles,
  },
];

type TJoke = {
  id: string;
  joke: string;
  status: number;
};

export default function Jokes() {
  const [data, setData] = useState<null | TJoke>(null);
  const [another, setAnother] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const newData = await response.json();
      setData(newData);
    }
    fetchData();
  }, [another]);

  return (
    <div className="general">
      <div className="container-jokes">
        <h3>Try not to laugh</h3>
        <div className="joke">{data && data.joke}</div>
        <button className="btn" onClick={() => setAnother(!another)}>
          Get another
        </button>
      </div>
    </div>
  );
}
