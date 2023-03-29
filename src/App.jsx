import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './db/db.json'
/*import colors from './db/colors.json'*/

const colors= ["bg1", "bg2", "bg3", "bg4",]

function App() {

  const randomElementFromArray = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

const [quoteRandom, setQuoteRandom] = useState(randomElementFromArray(quotes))
const [colorRandom, setcolorRandom] = useState(randomElementFromArray(colors))

const handleClick = () => {
  setQuoteRandom(randomElementFromArray(quotes))
  setcolorRandom(randomElementFromArray(colors))
}

  return (
    <div /*style={{ backgroundColor: colorRandom }}*/ className={`App ${colorRandom}`}>
      <QuoteBox 
        quoteRandom={quoteRandom} 
        handleClick={handleClick}
        colorRandom={colorRandom} 
      />
    </div>
  )
}

export default App
