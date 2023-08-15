import { type LinksFunction } from "@remix-run/node";
import blurryEffectStyle from "../styles/projects/blurryEffectStyle.css";
import React, { useState } from "react";
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: blurryEffectStyle,
  },
];

export default function BlurryEffect() {
  const [chrono, setChrono] = useState(0);
  const [blur, setBlur] = useState(50);
  React.useEffect(() => {
    chrono < 100 && setTimeout(() => setChrono((old) => old + 1), 300);
  }, [chrono]);

  React.useEffect(() => {
    blur > 0 && setTimeout(() => setBlur((old) => old - 1), 600);
  }, [blur]);

  return (
    <>
      <section
        className="backImage"
        style={{ filter: `blur(${blur}px)` }}
      ></section>
      <div className="loading-text">{chrono}%</div>
    </>
  );
}
