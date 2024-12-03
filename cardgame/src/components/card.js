import React from "react";
import "./card.css"

const Card = ({card,onFlip}) =>(

    <div className={`card ${card.isFlipped ? "flipped" : ""}`}

    onClick={() => onFlip(card)}>
        {card.isFlipped ? (
            <div className="card-front">{card.value}</div>
        ):(
            <div className="card-back">Hiddem</div>
        )}


    </div>
);
export default Card;