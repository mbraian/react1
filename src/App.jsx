import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { // Ahora este componente contiene el estado y el controlador de evento 'handleClick'. Ambos pasan como 'props' a c/u de los botones
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>.idolo.</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Goles de Messi {count}
        </button><button onClick={() => setCount((count) => count - 1)}>
          Goles de Penalldo {count}
        </button>
        <p>
          Goles del crack = {count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App // Con 'default' se exporta todo
