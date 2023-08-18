import { type LinksFunction } from "@remix-run/node";
import splitStyle from "~/styles/projects/split.css";
import React, { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: splitStyle,
  },
];

export default function Split() {
  React.useEffect(() => {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
    const container = document.querySelector(".split-container");
    console.log(left);
    console.log(right);
    console.log(container);

    left.addEventListener("mouseenter", () =>
      container.classList.add("hover-left"),
    );
    console.log(container.classList);
    left.addEventListener("mouseleave", () =>
      container.classList.remove("hover-left"),
    );
    right.addEventListener("mouseenter", () =>
      container.classList.add("hover-right"),
    );

    right.addEventListener("mouseleave", () =>
      container.classList.remove("hover-right"),
    );
  }, []);
  return (
    <>
      <div className="split-container">
        <div className="split left">
          <h1>Belle de Gourdan</h1>
          <a href="#" className="btn">
            Buy now !
          </a>
        </div>
        <div className="split right">
          <h1>Purple Lady</h1>
          <a href="#" className="btn">
            Buy now !
          </a>
        </div>
      </div>
    </>
  );
}
