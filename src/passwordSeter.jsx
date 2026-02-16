import React, { useCallback, useState } from 'react'

const PasswordSeter = () => {
    const [length,setLength]=useState(8)
    const [numbers,setNumbers]=useState(false)
    const [Characters,setCharacters]=useState(false)
    const [Password,setPassword]=useState('')
    const PasswordGenerator=useCallback(()=>{
let pass='';
let string='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
if (numbers) string+='0123456789' 
 if (condition) string+='!@#$%^&*_-=+[]{}`~'
    for (let i = 0; i <= array.length; i++) {
        const char = Math.floor(Math.random()*string.length+1);
       pass=string.charAt(char) 
    }
   
setPassword(pass)

    },[length,numbers,Characters,setPassword])

    

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 my-10 py-3 px-4'>
      <h1 className='text-center text-white mb-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray-50'>
        <input type="text" value={Password}
        className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
        <button className='outline-none bg-blue-700 text-white px- py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex text-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length} 
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor="">Length:{length}</label>
        </div>
        <div className='flex text-center gap-x-1'>
            {/* <input type="checkbox"
           
            value={length} 
            className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}/> */}
            {/* <label htmlFor="">Length:{length}</label> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default PasswordSeter
