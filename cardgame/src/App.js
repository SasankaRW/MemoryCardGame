import React, { useEffect, useState } from 'react';
import './App.css';
import GameBord from './components/gameBord';
import { initialState } from './gameLogic';

const App= () =>{

  const [state,dispatch] = useState(initialState)


  return (
    <GameBord/>
  )
}

export default App;
