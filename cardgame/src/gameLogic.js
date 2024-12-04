export const initialState = {
    cards: [],
    flippedCards: [],
    matches: 0,
    mismatches: 0,
    timeRemaining: 180,
    gameStatus: "idle", // 'idle', 'playing', 'finished'
  };
  
  export const gameReducer = (state, action) => {
    switch (action.type) {
      case "INIT_CARDS":
        return { ...state, cards: action.payload, gameStatus: "playing" };
      case "FLIP_CARD":
        return {
          ...state,
          cards: state.cards.map((card) =>
            card.id === action.payload.id
              ? { ...card, isFlipped: true }
              : card
          ),
          flippedCards: [...state.flippedCards, action.payload],
        };
      case "CHECK_MATCH":
        const [first, second] = state.flippedCards;
        if (
          first.value === second.value ||
          first.type === "wildcard" ||
          second.type === "wildcard"
        ) {
          return {
            ...state,
            matches: state.matches + 1,
            cards: state.cards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, isMatched: true }
                : card
            ),
            flippedCards: [],
          };
        } else {
          return {
            ...state,
            mismatches: state.mismatches + 1,
            cards: state.cards.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, isFlipped: false }
                : card
            ),
            flippedCards: [],
          };
        }
      case "UPDATE_TIMER":
        return {
          ...state,
          timeRemaining: state.timeRemaining - 1,
          gameStatus: state.timeRemaining - 1 <= 0 ? "finished" : state.gameStatus,
        };
      default:
        return state;
    }
  };
  
  export const initializeCards = () => {
    const cardValues = ["JS", "React", "Vue", "Angular"]; // Example logos
    const regularCards = [...cardValues, ...cardValues].map((value, index) => ({
      id: index,
      type: "regular",
      value,
      isFlipped: false,
      isMatched: false,
    }));
    const specialCards = [
      { id: regularCards.length, type: "wildcard", value: "Wildcard", isFlipped: false, isMatched: false },
      { id: regularCards.length + 1, type: "trap", value: "Trap", isFlipped: false, isMatched: false },
    ];
    return [...regularCards, ...specialCards].sort(() => Math.random() - 0.5);
  };
  