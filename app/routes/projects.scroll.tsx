import { type LinksFunction } from "@remix-run/node";
import scrollStyle from "~/styles/projects/scroll.css";
import React from "react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: scrollStyle,
  },
];

export default function ScrollPage() {
  React.useEffect(() => {
    console.log("run");
    function handleResize() {
      const triggerBottom = (window.innerHeight / 5) * 4;
      console.log(triggerBottom);
      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }
    window.addEventListener("scroll", handleResize);
    handleResize();
  }, []);

  return (
    <>
      <div className="frame">
        <h1 className="title">Scroll to see our program</h1>
        <div className="box">
          <h2>Event</h2>
        </div>
        <div className="box">
          <h2>Event</h2>
        </div>
        <div className="box">
          <h2>Event</h2>
        </div>
        <div className="box">
          <h2>Event</h2>
        </div>
        <div className="box">
          <h2>Event</h2>
        </div>
        <div className="box">
          <h2>Event</h2>
        </div>
        <div className="box">
          <h2>Event</h2>
        </div>
        <div className="box">
          <h2>Event</h2>
        </div>
      </div>
    </>
  );
}
