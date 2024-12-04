import React from "react";
import Card from "./card";
import "./gameBord.css";

const GameBoard = ({ cards, onFlip }) => (
  <div className="game-board">
    {cards.map((card) => (
      <Card key={card.id} card={card} onFlip={onFlip} />
    ))}
  </div>
);

export default GameBoard;
