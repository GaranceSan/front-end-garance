import { type LinksFunction } from "@remix-run/node";
import animatedNavbarStyles from "~/styles/projects/animated-navbar.css";
import { useState } from "react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: animatedNavbarStyles,
  },
];

export default function AnimatedNavbar() {
  const [navActive, setNavActive] = useState(true);

  return (
    <div className="navi">
      <nav className={`${navActive ? "active" : ""}`} id="nav">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">CV</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button
          className="icon"
          id="toggle"
          onClick={(e) => setNavActive(!navActive)}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </nav>
    </div>
  );
}
