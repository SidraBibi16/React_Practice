import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordSeter = () => {
    // --- 1. State Management ---
    const [length, setLength] = useState(8)
    const [numbers, setNumbers] = useState(false)
    const [Characters, setCharacters] = useState(false)
    const [Password, setPassword] = useState('')

    // --- 2. UseRef for UI Interaction ---
    // Iska maqsad input box ko select karna hai taake copy effect nazar aaye
    const passwordRefrence = useRef(null)

    // --- 3. Copy to Clipboard Method ---
    const CopiedPassword = useCallback(() => {
        passwordRefrence.current?.select() // Input text ko highlight karta hai
        passwordRefrence.current?.setSelectionRange(0, 100) // Selection limit set karta hai
        window.navigator.clipboard.writeText(Password) // Browser API se text copy karta hai
    }, [Password])

    // --- 4. Password Generation Logic ---
    const PasswordGenerator = useCallback(() => {
        let pass = '';
        let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        // Agar user ne checkbox tick kiya hai to string mein numbers/chars add karo
        if (numbers) string += '0123456789' 
        if (Characters) string += '!@#$%^&*_-=+[]{}`~'

        // Loop: Jitni length hai utni dafa random character uthao
        for (let i = 1; i <= length; i++) {
            // Index calculation: string.length ke andar rehna zaroori hai
            const charIndex = Math.floor(Math.random() * string.length);
            pass += string.charAt(charIndex) 
        }

        setPassword(pass)
    }, [length, numbers, Characters,setPassword]) // In dependencies ke change honay par function refresh hoga

    // --- 5. Side Effects ---
    // Jab page load ho ya settings change hon, automatic naya password ban jaye
    useEffect(() => {
        PasswordGenerator()
    }, [length, numbers, Characters, PasswordGenerator])

    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-gray-800 my-10 py-3 px-4'>
                <h1 className='text-center text-white mb-3 text-xl font-semibold'>Password Generator</h1>
                
                {/* Password Display & Copy Section */}
                <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray-50'>
                    <input 
                        type="text" 
                        value={Password}
                        className='outline-none w-full py-2 px-3 text-gray-700' 
                        placeholder='Password' 
                        readOnly 
                        ref={passwordRefrence} 
                    />
                    <button 
                        onClick={CopiedPassword} 
                        className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-4 py-0.5 shrink-0 transition-colors'
                    >
                        copy
                    </button>
                </div>

                {/* Controls Section */}
                <div className='flex text-sm gap-x-4 text-amber-500 font-medium'>
                    {/* Range Slider for Length */}
                    <div className='flex items-center gap-x-1'>
                        <input 
                            type="range"
                            min={6}
                            max={100}
                            value={length} 
                            className='cursor-pointer accent-blue-600'
                            onChange={(e) => {setLength(e.target.value)}}
                        />
                        <label className='w-20'>Length: {length}</label>
                    </div>

                    {/* Numbers Checkbox */}
                    <div className='flex items-center gap-x-1'>
                        <input 
                            type="checkbox"
                            id='numbersInput'
                            defaultChecked={numbers} 
                            onChange={() => setNumbers((prev) => !prev)} 
                        /> 
                        <label htmlFor="numbersInput" className='cursor-pointer'>Numbers</label>
                    </div>

                    {/* Characters Checkbox */}
                    <div className='flex items-center gap-x-1'>
                        <input 
                            type="checkbox"
                            id='charInput'
                            defaultChecked={Characters} 
                            onChange={() => setCharacters((prev) => !prev)} 
                        /> 
                        <label htmlFor="charInput" className='cursor-pointer'>Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordSeter