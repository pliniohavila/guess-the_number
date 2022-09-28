import { createContext, ReactNode, useReducer } from "react";
import { gameReducer, gameState } from "../reducers";


interface GameContextProps {
  lower: number,
  upper: number, 
  numberToGuess: number,
  status: string,
  lastGuess: number,

  reset: (lower: number, upper: number) => void,
  checkGuess: (lastGuess: number) => void
}

export const GameContext = createContext({} as GameContextProps)

interface GameContextChildren {
  children: ReactNode
}

export function GameContextProvider({children}: GameContextChildren) {
  const [{lower, upper, status, numberToGuess, lastGuess}, dispatch] = useReducer(gameReducer, gameState)

  function reset(lower: number, upper: number) {
    dispatch({
      type: 'reset', 
      payload: {
        lower, 
        upper
      }
    })
  }

  function checkGuess(inputGuess: number) {
    if (inputGuess === numberToGuess) {
      dispatch({
        type: 'equal',
        payload: {
          lastGuess: inputGuess
        }
      })
      return undefined
    } else if (inputGuess > numberToGuess) {
      dispatch({
        type: 'largest',
        payload: {
          lastGuess: inputGuess
        }
      })
      return undefined
    }
    else {
      dispatch({
        type: 'smaller',
        payload: {
          lastGuess: inputGuess
        }
      })
      return undefined
    }
  }
  
  const valueProvider = {
    lower,
    upper,
    numberToGuess,
    status,
    lastGuess,
    reset: reset,
    checkGuess: checkGuess, 
  }

  return (
    <GameContext.Provider value={valueProvider}>
      {children}
    </GameContext.Provider>
  )
}