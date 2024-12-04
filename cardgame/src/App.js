import React, { useReducer, useEffect } from "react";
import GameBord from "./components/gameBord";
import ScoreTimerDisplay from "./components/ScoreTimerDisplay";
import { gameReducer, initialState, initializeCards } from "./gameLogic";

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    const cards = initializeCards();
    dispatch({ type: "INIT_CARDS", payload: cards });
  }, []);

  useEffect(() => {
    if (state.gameStatus === "playing" && state.timeRemaining > 0) {
      const timer = setInterval(() => {
        dispatch({ type: "UPDATE_TIMER" });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [state.gameStatus, state.timeRemaining]);

  const handleFlip = (card) => {
    if (!card.isFlipped && state.flippedCards.length < 2) {
      dispatch({ type: "FLIP_CARD", payload: card });
      if (state.flippedCards.length === 1) {
        setTimeout(() => dispatch({ type: "CHECK_MATCH" }), 1000);
      }
    }
  };

  return (
    <div className="app">
      <ScoreTimerDisplay
        matches={state.matches}
        mismatches={state.mismatches}
        timeRemaining={state.timeRemaining}
      />
      <GameBord cards={state.cards} onFlip={handleFlip} />
    </div>
  );
};

export default App;
