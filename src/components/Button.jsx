import React from 'react'

function Button({text, fxns}) {
    return (
        <button onClick={fxns} className='w-[80%] h-[25px] rounded-lg bg-blue-500 self-center'>    
            {text}
        </button>
    )
}

export default Button