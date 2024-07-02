import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    name: "kamlesh",
    age: 23
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card  username="kamleshsaini" btnText="click me" />

      <Card username="renu" btnText="visit me"/>

      <Card />

    </>
  )
}

export default App
