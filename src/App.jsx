import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import golanglogo from './assets/golang.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countGo, setCountGo] = useState(0)
  function handleCountGo() {
    window.increment().then(e => {
      setCountGo(e.count)
    })
  }
  return (
    <>
      <div>
        <a href="javascript:void(0)" onClick={() => window.new_window('https://vitejs.dev')}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="javascript:void(0)" onClick={() => window.new_window('https://react.dev')}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="javascript:void(0)" onClick={() => window.new_window('https://go.dev/')}>
          <img src={golanglogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Go</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {" "}
        <button onClick={handleCountGo}>
          count go is {countGo}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
