import { Link } from "@remix-run/react";
import projectsStyles from "~/styles/projects/projects.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: projectsStyles,
  },
];
const projects = [
  {
    title: "Expanding cards",
    path: "expanding-cards",
  },
  {
    title: "Progressive steps",
    path: "steps",
  },
  {
    title: "Rotating navigation",
    path: "rotating-nav",
  },
  {
    title: "Hidden search",
    path: "hidden-search",
  },
  {
    title: "Blurry effect",
    path: "blurry-effect",
  },

  {
    title: "Scroll",
    path: "scroll",
  },
  {
    title: "Split",
    path: "split",
  },
  {
    title: "Animated Navbar",
    path: "animated-navbar",
  },
  {
    title: "Animated Form",
    path: "animated-form",
  },
  {
    title: "FAQ",
    path: "FAQ",
  },
  {
    title: "Drop boxes",
    path: "drop-boxes",
  },
  {
    title: "Movie App",
    path: "movie-app",
  },
  {
    title: " Water jar & cups",
    path: "water-jar-and-cups",
    description: "Simple maths app",
  },
];

export default function ProjectsIndexRoute() {
  return (
    <>
      <h1>Projects</h1>
      <p>
        Petits projets réalisés avec Remix, un framework React et "50 projects
        in 50 days" sur Udemy
      </p>
      <ul>
        {projects.map((project) => {
          return (
            <>
              <ul>
                <li>
                  <Link to={project.path}>{project.title}</Link>
                  <p>{project.description}</p>
                </li>
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
}
