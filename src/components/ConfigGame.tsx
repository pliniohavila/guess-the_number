import { useState } from "react"

interface GameConfigProps {
  reset: (lower: number, upper: number) => void
}

export function GameConfig({reset}:  GameConfigProps) {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10) 

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
          aria-label="lower"
          value={min} 
          max={max}
          onChange={(state) => setMin(Number(state.target.value))}
        />
        <br />
        <label htmlFor="upper">Upper  bound:</label> 
        <input 
          type="number" 
          name="upper" 
          aria-label="upper"
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