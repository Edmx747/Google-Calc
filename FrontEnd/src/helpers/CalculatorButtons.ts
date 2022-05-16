import { CalculatorButtonType, ICalculatorButton } from "../models/CalculatorButtons";

export const CALCULATOR_BUTTONS: Array<Array<ICalculatorButton>> = [
    [
        {
            id: 0,
            value: "(",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-primary",
        },
        {
            id: 1,
            value: ")",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-primary",
        },
        {
            id: 2,
            value: "%",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-primary",
        },
        {
            id: 3,
            value: "AC",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-primary",
        }
    ],
    [
        {
            id: 4,
            value: "7",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 5,
            value: "8",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 6,
            value: "9",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 7,
            value: "/",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-primary",
        }
    ],
    [
        {
            id: 8,
            value: "4",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 9,
            value: "5",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 10,
            value: "6",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 11,
            value: "*",
            name: "x",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-primary",
        }
    ],
    [
        {
            id: 12,
            value: "1",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 13,
            value: "2",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 14,
            value: "3",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 15,
            value: "-",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-primary",
        }
    ],
    [
        {
            id: 16,
            value: "0",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 17,
            value: ".",
            type: CalculatorButtonType.NUMBER,
            className: "btn-secondary",
        },
        {
            id: 18,
            value: "=",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-tertiary",
        },
        {
            id: 19,
            value: "+",
            type: CalculatorButtonType.OPERATOR,
            className: "btn-primary",
        }
    ]
]