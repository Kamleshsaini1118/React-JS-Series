import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () =>{
    if (counter > 0 ) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Renu aur Kamlesh </h1>
      <h3>number of babies = {counter}</h3>
      <button onClick={addValue}>Add babies count {counter}</button>
      <br />
      <button onClick={removeValue}>Remove babies count {counter}</button>
    </>
  )
}

export default App
