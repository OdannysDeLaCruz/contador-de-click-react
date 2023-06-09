import './App.css';
import Button from './components/Button'
import Counter from './components/Counter'
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import { useState } from 'react'

function App() {
  
  const [numClicks, setNumClicks] = useState(0) 
  const handleClick = () => {
    setNumClicks(numClicks + 1)
  }
  const handleClickReset = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"  
          />
      </div>
      <div className='contenedor-principal'>
        <Counter numClicks={ numClicks } />
        <Button
          text="Click"
          isButtonClick={true}
          handleClick={handleClick} />
        <Button
          text="Reset" 
          isButtonClick={false}
          handleClick={handleClickReset} />
      </div>
    </div>
  );
}

export default App;
