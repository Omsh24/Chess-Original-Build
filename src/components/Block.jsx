import React from 'react'

function Block({text, bgc}) {
    return (
        <div className='blocky w-[50px] h-[50px] text-center text-white [text-shadow:1px_1px_0px_black,-1px_-1px_0px_black,1px_-1px_0px_black,-1px_1px_0px_black] font-bold  border-white border-[2px]' style={{
            backgroundColor: bgc
        }}>
            { text }
        </div>
    )
}

export default Block
