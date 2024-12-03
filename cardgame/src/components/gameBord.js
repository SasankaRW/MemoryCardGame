import React from "react";
import Card from "./card"
import "./gameBord.css"
 
const GameBord = ({ cards,onFlip}) => (
    <div className="game-bord">
        {cards.map((card) =>(
            <Card key={card.id} card={card} onFlip= {onFlip}/>
        ))}
    </div>
)



export default GameBord;