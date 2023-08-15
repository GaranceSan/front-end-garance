import { type LinksFunction } from "@remix-run/node";
import { ExpandingCards } from "~/components/ExpandingCards";

import exCardsStyles from "~/styles/projects/expanding-cards.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: exCardsStyles,
  },
];

const cardsData = [
  {
    id: 1,
    title: "Urban Japan",
    url: "/imgs/tokyo.jpg",
  },
  {
    id: 2,
    title: "sacred montain",
    url: "/imgs/fujisan.jpg",
  },
  {
    id: 3,
    title: "old town",
    url: "/imgs/oldtown.jpg",
  },
  {
    id: 4,
    title: "Delicious food",
    url: "/imgs/resto.jpg",
  },
  {
    id: 5,
    title: "Red automn",
    url: "/imgs/redleaves.jpg",
  },
];

export default function ProjectsExpandingCardsRoute() {
  return <ExpandingCards cards={cardsData} />;
}
