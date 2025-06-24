import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='text-center'>
        Webinar.gg
      </div>

      <div className='text-center text-3xl font-semibold m-10'>
        Verify Your Age
      </div>

      <div className='text-center text-xs font-light'>
        Please confirm your birth year. This data will not be stored.
      </div>

      <div className='text-center '>
        <input className='rounded-md border-3 border-gray-700 focus:border-pink-600 text-sm font-semibold font-extralight m-2 p-2' type="number" placeholder='Your birth year'></input>
      </div>
    </>
  )
}

export default App
