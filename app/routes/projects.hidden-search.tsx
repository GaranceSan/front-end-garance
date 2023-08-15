import { type LinksFunction } from "@remix-run/node";
import hiddenSearchStyles from "~/styles/projects/hiddenSearchStyles.css";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: hiddenSearchStyles,
  },
];

export default function HiddenSearch() {
  const [hidden, setHidden] = useState(true);
  const activate = () => {
    setHidden((lastHidden) => !lastHidden);
  };

  return (
    <>
      <div className={`search ${hidden ? "" : "active"} `}>
        <input type="text" className="input" placeholder="Search ..." />
        <button className="btn" onClick={activate}>
          <BsSearch />
        </button>
      </div>
    </>
  );
}
