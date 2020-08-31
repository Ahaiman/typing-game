import React from 'react'
import { useSelector } from "react-redux";

import useWordGame from "../hooks/useWordGame"
import Button from '@material-ui/core/Button';


export default function GamePage() {
  const time = useSelector(state => state.time);
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isTimeRunning, 
    remainingTime, 
    startGame, 
    wordCount
    } = useWordGame(time)

  return (
      <div className="game-page">
          <h1>How fast can you type? </h1>
          <textarea 
              ref = { textBoxRef }
              onChange = { handleChange }
              value = { text } 
              disabled = { !isTimeRunning } />
          <h4> Time remaining: { remainingTime } </h4>
          <h4> Words count :  {wordCount } </h4>
          <Button
              id = "submit"
              disabled = { isTimeRunning }
              variant="contained"
              color="secondary"
              onClick={ startGame }>
                Start
          </Button>
          <br/>
          <br/>
      </div>
  )
}
