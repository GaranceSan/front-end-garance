import { type LinksFunction } from "@remix-run/node";
import rotatingStyles from "../styles/rotating-nav.css";

import React, { useState } from "react";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: rotatingStyles,
  },
];

export default function Rotating() {
  const [menu, setMenu] = useState(true);
  const open = () => {
    setMenu(true);
  };
  const close = () => {
    setMenu(false);
  };

  return (
    <div className={`rotating-top-container ${menu ? "" : "show-nav"}`}>
      <div className="circle-container">
        <div className="circle">
          <button id="close" onClick={open}>
            <AiOutlineClose />
          </button>
          <button id="open" onClick={close}>
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      <div className="rotating-content">
        <h1>My article</h1>
        <small>Jean Dupont</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          aliquam placeat sint quibusdam autem ex sunt asperiores, fugiat
          possimus vitae voluptatem eum officia tempore, mollitia recusandae,
          rem soluta quod earum. Ipsam odio dignissimos eveniet eos! Quas
          aperiam delectus, nobis soluta minus, quam vitae explicabo culpa optio
          molestias earum iusto excepturi assumenda mollitia nostrum. At illo
          maxime laborum debitis porro ipsum veritatis aspernatur unde ab
          quibusdam velit quasi incidunt soluta repellat illum, magni aliquam
          eum reprehenderit quod voluptates expedita a labore reiciendis facere?
          Veniam non, quasi cupiditate tenetur cum totam sint distinctio
          asperiores iste necessitatibus deleniti amet dignissimos aspernatur
          aperiam sapiente.
        </p>
        <h3>My Japan</h3>
        <img src="/imgs/fujisan.jpg" alt="article's illustration" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit fugit
          iusto fugiat? Quis odit blanditiis, assumenda expedita iure, id
          tenetur voluptates laudantium excepturi veritatis incidunt, minima
          suscipit. Quisquam cumque, ab voluptatibus praesentium itaque
          reprehenderit facilis nesciunt eaque alias quos labore necessitatibus
          unde beatae in veritatis consectetur nobis laborum placeat iste
          officia, culpa omnis esse blanditiis neque. Culpa tempora fugiat,
          voluptates et hic unde, distinctio assumenda aut quidem fuga
          perspiciatis mollitia nesciunt placeat animi error totam.
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <AiOutlineHome />
            Home
          </li>
          <li>
            <AiOutlineQuestionCircle />
            About
          </li>
          <li>
            <AiOutlineMail />
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}
