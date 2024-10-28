

import './App.css'
import LineChart from './LineChart'

import Navbar from './Navbar'
import Phones from './Phones'
import PriceOptions from './PriceOptions'

function App() {


  return (
    <>
      <Navbar></Navbar>

      <h1 className='text-7xl bg-gray-400 mb-5'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
