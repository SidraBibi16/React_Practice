import React, { useState } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState('lightpink')
    return (
        <div className='w-full h-screen duration-200'
            style={{ background: color }}>
            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl'>
                    <button onClick={()=> setColor('red')}
                    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{background:'red'}}>Red
                    </button>
                    <button onClick={()=> setColor('grey')}
                    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{background:'grey'}}>Grey
                    </button>
                    <button onClick={()=> setColor('purple')}
                    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{background:'purple'}}>Purple
                    </button>
                    <button onClick={()=> setColor('yellow')}
                    className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                    style={{background:'yellow'}}>yellow
                    </button>
                    <button onClick={()=> setColor('teal')} 
                    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{background:'teal'}}>Teal
                    </button>
                    <button onClick={()=> setColor('#0101')} 
                    className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                    style={{background:'#0101'}}>orange
                    </button>
                    <button onClick={()=> setColor('#000')}
                    className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                    style={{background:'#000'}}>Black
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BgChanger
