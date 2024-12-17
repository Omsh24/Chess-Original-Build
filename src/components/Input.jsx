import React from 'react'

function Input({fxns}) {
    return (
        <input onChange={fxns} placeholder='Type some command' type="text" className='w-full h-[90%] bg-slate-300 text-black text-start'/>
    )
}

export default Input
