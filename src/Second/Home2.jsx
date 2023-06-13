import React from 'react'
import { useState } from 'react'

function Home2() {

const [bg,setBg] = useState(true)

function Change(){
    setBg(!bg)
}

  return (
    <div className='flex h-screen justify-center items-center'>
{bg}
        <button onClick={Change} className={`px-4 py-2 text-white rounded focus:outline-none ${
          bg ? 'bg-red-500' : 'bg-blue-500'
        }`}>
            Change Color
        </button>
    </div>
  )
}

export default Home2