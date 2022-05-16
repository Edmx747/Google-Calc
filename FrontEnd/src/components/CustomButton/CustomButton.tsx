import { ExecOptionsWithStringEncoding } from 'child_process';
import React, { MouseEventHandler } from 'react'
import './CustomButton.css'

function CustomButton(props: { value: string, className: string, onClick: (value: string) => void }) {
    return (
        <button id='btn' className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
    )
}

export default CustomButton