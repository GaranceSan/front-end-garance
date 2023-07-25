import React from "react";

type TExpandingCard = {
  id: number;
  title: string;
  url: string;
};

type TExapandingCardsProps = {
  cards: TExpandingCard[];
};

function ExpandingCards({ cards }: TExapandingCardsProps) {
  const [clicked, setClicked] = React.useState(1);
  return (
    <div className="exp-cards">
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            className={`ex-cards__panel ${
              clicked == card.id ? "ex-cards__panel--active" : ""
            }`}
            style={{ backgroundImage: `url(${card.url})` }}
            onClick={() => setClicked(card.id)}
          >
            <h1>{card.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export { ExpandingCards };
