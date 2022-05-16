import React from 'react'
import './Display.css'
function Display(props: { operation: string; result: string }) {
    const { operation, result } = props;
    return (
        <div className='display'>
            <div className='operation'><span>{operation}</span></div>
            <div className='result'>{result}</div>
        </div>
    )
}

export default Display