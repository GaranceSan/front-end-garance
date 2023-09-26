import { type LinksFunction } from "@remix-run/node";
import FAQStyles from "~/styles/projects/FAQ.css";
import { FaChevronDown, FaXmark, FaRegComment } from "react-icons/fa6";
import React, { useState } from "react";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: FAQStyles,
  },
];
const data = [
  {
    id: 1,
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything.",
  },
  {
    id: 2,
    question: " What do you call someone with no body and no nose ?",
    answer: "Nobody knows.",
  },
  {
    id: 3,
    question: "What's the object-oriented way to become wealthy?",
    answer: "Inheritance.",
  },
];

export default function FAQ() {
  return (
    <>
      <div className="faq-container">
        <h1>Frequently asked questions</h1>
        {data.map((faq) => {
          return (
            <QAndA
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          );
        })}
      </div>
    </>
  );
}

type TQAndAProps = {
  id: number;
  question: string;
  answer: string;
};

function QAndA({ id, question, answer }: TQAndAProps) {
  const [active, setActive] = useState(false);
  const activate = () => {
    setActive((lastActive) => !lastActive);
  };
  return (
    <div className={`faq ${active ? "active" : ""}`}>
      <FaRegComment className="comment1" />
      <FaRegComment className="comment2" />
      <h3 className="faq-title">{question}</h3>
      <p className="faq-text">{answer}</p>
      <button className="faq-toggle">
        <FaChevronDown className="chevon" onClick={activate} />
        <FaXmark className="xmark" onClick={activate} />
      </button>
    </div>
  );
}
