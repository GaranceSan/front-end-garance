// import { Link } from "@remix-run/react";
import React from "react";
import { type LinksFunction } from "@remix-run/node";
import stepsStyles from "~/styles/projects/steps.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: stepsStyles,
  },
];

const circleData = [
  {
    id: 1,
    number: "1",
  },
  {
    id: 2,
    number: "2",
  },
  {
    id: 3,
    number: "3",
  },
  {
    id: 4,
    number: "4",
  },
];

export default function ProjectsSteps() {
  const [active, setActive] = React.useState(1);
  function handleNext() {
    if (active >= circleData.length) {
      return;
    }
    setActive((prevActive) => (prevActive += 1));
  }
  function handlePrev() {
    if (active <= 1) {
      return;
    }
    setActive((prevActive) => (prevActive -= 1));
  }

  return (
    <div className="full-page-container">
      <div className="progressive-steps">
        <div
          className="progress"
          id="progress"
          style={{ width: `${(active - 1) * 33}%` }}
        ></div>
        {circleData.map((circle) => {
          return (
            <div
              key={circle.id}
              className={`circle ${active >= circle.id ? "active" : ""}`}
            >
              {circle.number}
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button
          className="button"
          id="prev"
          disabled={active === 1}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="button"
          id="next"
          onClick={handleNext}
          disabled={active === circleData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
