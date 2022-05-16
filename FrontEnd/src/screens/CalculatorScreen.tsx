import React, { ReactElement, ReactNode } from 'react'
import CustomButton from '../components/CustomButton/CustomButton'
import Display from '../components/Display.tsx/Display'
import { CALCULATOR_BUTTONS } from '../helpers/CalculatorButtons';
import { ICalculatorButton } from '../models/CalculatorButtons';
import './CalculatorScreen.css'
function CalculatorScreen() {
    let [operation, setOperation] = React.useState('');
    let [result, setResult] = React.useState('');
    let [row, SetRows] = React.useState(1);
    const handleOperation = (value: string): any => {
        if (value === '=') {
            setResult(eval(operation));
            console.log('operation:', operation)
            setOperation('');
        } else if (value === 'AC') {
            setOperation('');
            setResult('');
        } else {
            setOperation(operation + value);
        }
    }

    return (
        <div className='calculator'>
            <table className='buttons-table'>
                <tbody>
                    <thead>
                        <tr>
                            <td colSpan={4}>
                                <Display operation={operation} result={result}></Display>
                            </td>
                        </tr>
                    </thead>
                    {
                    CALCULATOR_BUTTONS.map((buttons: ICalculatorButton[], index: number) => {
                        return (
                            <tr key={index}>
                                {buttons.map((button: ICalculatorButton, index: number) => {
                                    return (
                                        <td key={index}>
                                            <CustomButton value={button.value} className={button.className} onClick={() => handleOperation(button.value)}></CustomButton>
                                        </td>
                                    )
                                })}
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default CalculatorScreen