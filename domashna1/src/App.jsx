import { useState } from 'react'
import './App.css'
import Name from './components/Name.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
        <Name />
      </div>
    </>
  )
}

export default App
