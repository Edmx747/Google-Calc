import React from 'react'
import './Display.css'
function Display(props: { operation: string; result: string }) {
    const { operation, result } = props;
    return (
        <div className='display'>
            <div>{operation}</div>
            <div>{result}</div>
        </div>
    )
}

export default Display