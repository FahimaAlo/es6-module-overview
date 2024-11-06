import { useEffect, useState } from 'react'

import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
    const [watches, setWatches] = useState([]);

    useEffect(() =>{
      fetch('Watches.json')
      .then(res=> res.json())
      .then(data => setWatches(data));
    }, [])

    // const watches = [
    //   {id: 1, name: 'Apple watch', price: 200},
    //   {id: 2, name: 'Samsung watch', price: 200},
    //   {id: 3, name: 'MI watch', price: 200},
    // ]

  return (
    <>
      
      <h1>Vite + React</h1>
     {
      watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
     }
    </>
  )
}

export default App
