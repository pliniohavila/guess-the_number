
import './App.css'
import { GameConfig } from './components/ConfigGame'
import { Play } from './components/Play'
import { GameContextProvider } from './contexts/GameContextProvider'

function App() { 

  return (
    <GameContextProvider >
      <div className="App">
        <Play />
        <GameConfig />
      </div>
    </GameContextProvider>
  )
}

export default App
