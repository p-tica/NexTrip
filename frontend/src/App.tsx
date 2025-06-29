import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount]   = useState(0)
  const [name, setName]     = useState('NexTrip')   // initial value is optional
  const [reply, setReply]   = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchGreeting = async () => {
    if (!name.trim()) return
    setLoading(true)
    setReply(null)
    try {
      const res  = await fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.text()      // swap to res.text() if your API returns plain text
      setReply(data)
    } catch (err: any) {
      setReply(`Error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>NexTrip</h1>

      {/* new input + button */}
      <div className="card">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
          onKeyDown={e => e.key === 'Enter' && fetchGreeting()}
        />
        <button onClick={fetchGreeting} disabled={loading || !name.trim()}>
          {loading ? 'Loading…' : 'Get greeting'}
        </button>
      </div>

      {/* render backend reply */}
      {reply && <p>{reply}</p>}

      {/* existing demo counter */}
      <div className="card">
        <button onClick={() => setCount(c => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
