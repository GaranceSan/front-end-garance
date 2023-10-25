import { type LinksFunction, json } from "@remix-run/node";
import waterjarStyles from "~/styles/projects/movie.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: waterjarStyles,
  },
];
