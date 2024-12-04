import React from "react";
import "./card.css";

const Card = ({ card, onFlip }) => (
  <div
    className={`card ${card.isFlipped || card.isMatched ? "flipped" : ""}`}
    onClick={() => onFlip(card)}
  >
    {card.isFlipped || card.isMatched ? (
      <div className="card-front">{card.value}</div>
    ) : (
      <div className="card-back">Hidden</div>
    )}
  </div>
);

export default Card;
