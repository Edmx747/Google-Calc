import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton/CustomButton'
import Display from '../components/Display.tsx/Display'
import { CALCULATOR_BUTTONS } from '../helpers/CalculatorButtons';
import { CalculatorButtonType, ICalculatorButton } from '../models/CalculatorButtons';
import './CalculatorScreen.css'
function CalculatorScreen() {
    let [operation, setOperation] = useState('');
    let [result, setResult] = useState('');
    let [typed, setTyped] = useState<Array<ICalculatorButton>>([]);

    const handleOperation = (button: ICalculatorButton): any => {
        const { value, type } = button;
        if (typed.length > 0 && typed[typed.length - 1].type === CalculatorButtonType.OPERATOR && type === CalculatorButtonType.OPERATOR) {
            setTyped([...typed.splice(typed.length - 1, 1)]);
        }
        setTyped([...typed.concat(button)]);
        setOperation(typed.map(button => button.value).join(''));
        if (value === '=') {
            if (result !== '') {
                setResult(eval(result + operation));
                setOperation('');
                setTyped([]);
            } else {
                setResult(eval(operation));
                setOperation('')
                setTyped([]);
            }
        } else if (value === 'AC') {
            setOperation('');
            setResult('');
            setTyped([]);
        } else {
            setOperation(eval(typed.map(button => button.value).join('')));
        }
    }

    useEffect(() => {
        setOperation(typed.map(button => button.value).join(''));
    }, [typed])
    

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
                                                <CustomButton value={button.name ? button.name : button.value} className={button.className} onClick={() => handleOperation(button)}></CustomButton>
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