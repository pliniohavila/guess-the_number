import { useContext, useState } from "react"
import { GameContext } from "../contexts/GameContextProvider"

export function Play() {
  const [inputGuess, setInputGuess] = useState(0)
  const { lower, upper, status, lastGuess, checkGuess } = useContext(GameContext)

  
  function handleGuess(event: any) {
    event.preventDefault()
    checkGuess(inputGuess) 
  } 

  return (
    <>
      <h1>Play</h1>
      <p>Guess the number between {lower} and {upper}</p>
      <p>Last guess: {lastGuess}</p>
      <p>{status}</p>
      
      <form>
        <label htmlFor="guess">Guess: </label>
        <input 
          type="number" 
          name="guess" 
          onChange={(state) => setInputGuess(Number(state.target.value))}
        />
        <button onClick={handleGuess}>Make guess</button>
      </form>
    </>
  )
}