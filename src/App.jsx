
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VscReactions } from "react-icons/vsc";


function App() {

  return (
    <div className='w-full h-full bg-green-100  '>
      <div className='w-full flex justify-center items-center p-10'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='hover:text-pink-600'>Vite + React</h1>
      <div className="card">
   
        <p className='text-4xl text-center font-bold hover:text-pink-300'>
          우예은
        </p>
       
      </div>
      <p  className="flex w-full text-9xl justify-center items-center text-pink-300 hover:text-pink-600">
      <VscReactions/>
      </p>
    </div>
  )
}

export default App
