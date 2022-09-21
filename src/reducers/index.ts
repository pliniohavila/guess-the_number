export const gameState = {
  lower: 0,
  upper: 10, 
  numberToGuess: Math.floor(Math.random() * 10),
  status: '',
  lastGuess: 0
} 

interface gameAction {
  type: string,
  payload: any
}

type gameStateType = typeof gameState

export function gameReducer(state: gameStateType, {type, payload}: gameAction) {
  switch (type) {
    case 'reset':
      return {
        ...state, 
        lower: payload.lower,
        upper: payload.upper,
        numberToGuess: Math.floor(Math.random() * (payload.upper - payload.lower + 1) + payload.lower ),
        status: ''
      }
    case 'equal': 
      return {
        ...state,
        status: 'You got it!',
        lastGuess: payload.lastGuess
      }
    case 'largest':
      return {
        ...state,
        status: 'Nope. Lower', 
        lastGuess: payload.lastGuess
      }
    case 'smaller':
      return {
        ...state,
        status: 'Nope. Higher', 
        lastGuess: payload.lastGuess
      }
    default:
      throw new Error('No has action dispatched')
  }
}