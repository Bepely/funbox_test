import { useState } from 'react'

import Card from "./components/card"

function App() {

  const [storage, setStorage] = useState({
    chicken: {taste: " с курой", desc: "Филе из цыплят с трюфелями в бульоне.", amount: 10},
    fish: {taste: "с рыбой", desc: "Головы щучьи с чесноком да свежайшая сёмгушка.", amount: 150},
    foieGras: {taste: "с фуа-гра", desc: "Печень утки разварная с артишоками.", amount: 500},
  })
 

  return (
    <div className="layerGround grid multiVert center">
      <header className='layerBase grid center'>
        <h1>Ты сегодня покормил кота?</h1>
      </header>
      <div className="layerBase center" id='cardHolder'>
        <Card taste="foieGras" size={10} storage={storage.foieGras}/>
        <Card taste="fish" size={40} storage={storage.fish}/>
        <Card taste="chicken" size={400} storage={storage.chicken}/>
      </div>
      
    </div>
  )
}

export default App
