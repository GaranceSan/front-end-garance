import { type LinksFunction } from "@remix-run/node";
import { useState } from "react";
import dropboxesStyles from "~/styles/projects/drop-boxes.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: dropboxesStyles,
  },
];

export default function DropBoxes() {
  const [boxes, setBoxes] = useState([
    { id: 0, hasFill: true },
    { id: 1, hasFill: false },
    { id: 2, hasFill: false },
    { id: 3, hasFill: false },
  ]);
  const fill = (
    <div
      className="fill"
      draggable="true"
      onDragStart={(e) => dragStart(e)}
      onDragEnd={(e) => dragEnd(e)}
    ></div>
  );
  function dragStart(e: React.DragEvent<HTMLDivElement>) {
    const target = e.currentTarget;
    target.classList.add("hold");
  }

  function dragEnd(e: React.DragEvent<HTMLDivElement>) {
    const target = e.currentTarget;
    target.classList.remove("hold");
  }

  function dragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function drop(e: React.DragEvent<HTMLDivElement>, i: number) {
    console.log(e.currentTarget);
    console.log(i);
    // copy array
    const copyBoxes = JSON.parse(JSON.stringify(boxes)); // deep copy of 'boxes'
    // create new array
    const newBoxes = copyBoxes.map((box, k) => {
      if (i === k) {
        return {
          id: box.id,
          hasFill: true,
        };
      }
      return {
        id: box.id,
        hasFill: false,
      };
    });

    //update state with new array
    setBoxes(newBoxes);
  }

  return (
    <div className="boxes">
      {boxes.map((box, i) => {
        if (box.hasFill) {
          return (
            <div
              key={box.id}
              className="empty"
              onDragOver={(e) => dragOver(e)}
              onDragEnter={(e) => dragEnter(e)}
              onDrop={(e) => drop(e, i)}
            >
              {fill}
            </div>
          );
        }
        return (
          <div
            key={box.id}
            className="empty"
            onDragOver={(e) => dragOver(e)}
            onDragEnter={(e) => dragEnter(e)}
            onDrop={(e) => drop(e, i)}
          ></div>
        );
      })}
    </div>
  );
}
