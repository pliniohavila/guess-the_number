import { useContext, useState } from "react"
import { GameContext } from "../contexts/GameContextProvider"

export function GameConfig() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10) 

  const {reset} = useContext(GameContext)

  function handleReset(event: any) {
    event.preventDefault()
    reset(min, max)
  }


  return (
    <div>
      <h1>Game Config</h1>
      <form onClick={handleReset}>
        <label htmlFor="lower">Lower bound:</label> 
        <input 
          type="number" 
          name="lower" 
          value={min} 
          max={max}
          onChange={(state) => setMin(Number(state.target.value))}
        />
        <br />
        <label htmlFor="upper">Upper  bound:</label> 
        <input 
          type="number" 
          name="upper" 
          value={max}
          min={min}
          onChange={(state) => setMax(Number(state.target.value))}
        />
        <br />
        <button type="submit">Reset</button>
      </form>
    </div>
  )
}