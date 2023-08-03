import { Link } from "@remix-run/react";

const projects = [
  {
    path: "expanding-cards",
  },
  {
    path: "steps",
  },
];

export default function ProjectsIndexRoute() {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <>
            <li>
              <Link to={project.path}>Expanding cards</Link>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
