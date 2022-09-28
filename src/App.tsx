import { useContext } from 'react'
import './App.css'
import { GameConfig } from './components/ConfigGame'
import { Play } from './components/Play'
import { GameContext } from './contexts/GameContextProvider'

function App() { 

  const { reset } = useContext(GameContext)

  return (
    <div className="App">
      <Play />
      <GameConfig reset={reset}/>
    </div>
  )
}

export default App
