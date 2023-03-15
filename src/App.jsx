import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
    <div className='text-3xl' >hello</div>
    <div>Let's learn to style</div>
    <div className='bg-red-300'>with TailwindCss</div>
    <div className='bg-yellow-300'>Here is
      <a className='hover:text-blue-300'href='https://tailwindcss.com/docs/guides/vite'> Link</a> 
    </div>
      </div>
  )
}

export default App
