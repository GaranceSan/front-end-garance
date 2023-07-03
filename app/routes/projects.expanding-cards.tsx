import { type LinksFunction } from "@remix-run/node";
import exCardsStyles from "../styles/expanding-cards.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: exCardsStyles,
  },
];

export default function ProjectsExpandingCardsRoute() {
  return (
    <div>
      <h1>Expanding cards</h1>
    </div>
  );
}
