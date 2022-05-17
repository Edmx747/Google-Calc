import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton/CustomButton'
import Display from '../components/Display.tsx/Display'
import { CALCULATOR_BUTTONS } from '../helpers/CalculatorButtons';
import { CalculatorButtonType, ICalculatorButton } from '../models/CalculatorButtons';
import HttpService from '../services/http';
import './CalculatorScreen.css'

function CalculatorScreen() {
    let [operation, setOperation] = useState('');
    let [result, setResult] = useState('');
    let [typed, setTyped] = useState<Array<ICalculatorButton>>([]);

    const getResult = async (operation: string) => {
        await HttpService.post('/calculate/', { data: operation })
        .then((res: any) => {
            setResult(res.result);
        })
    }

    const handleOperation = (button: ICalculatorButton): any => {
        const { value, type } = button;
        // if the last button is an operator, replace it with the new operator 
        if (typed.length > 0 && typed[typed.length - 1].type === CalculatorButtonType.OPERATOR && type === CalculatorButtonType.OPERATOR) {
            setTyped([...typed.splice(typed.length - 1, 1)]);
        }

        setTyped([...typed.concat(button)]);
        setOperation(typed.map(button => button.value).join(''));

        switch (value) {
            case '=':
                // if result is not empty, calculate the result
                if (result !== '') {
                    getResult(result + operation)
                    setOperation('');
                    setTyped([]);
                } else {
                    getResult(operation)
                    setOperation('')
                    setTyped([]);
                }
                break;
            case 'AC':
                setOperation('');
                setResult('');
                setTyped([]);
                break;
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