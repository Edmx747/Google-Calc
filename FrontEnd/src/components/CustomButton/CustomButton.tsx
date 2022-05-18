import { ExecOptionsWithStringEncoding } from 'child_process';
import React, { MouseEventHandler } from 'react'
import './CustomButton.css'

interface Props {
    value: string,
    className: string,
    disabled?: boolean,
    onClick: (value: string) => void
}

function CustomButton(props: Props) {
    return (
        <button id='btn' className={props.className} onClick={() => props.onClick(props.value)} disabled={props.disabled}>{props.value}</button>
    )
}

export default CustomButton