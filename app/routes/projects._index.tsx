import { Link } from "@remix-run/react";

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
    title: "blurry effect",
    path: "blurry-effect",
  },
];

export default function ProjectsIndexRoute() {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => {
          return (
            <>
              <li>
                <Link to={project.path}>{project.title}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
