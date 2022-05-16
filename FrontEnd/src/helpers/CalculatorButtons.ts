import { ICalculatorButton } from "../models/CalculatorButtons";

export const CALCULATOR_BUTTONS: Array<Array<ICalculatorButton>> = [
    [
        {
            id: 0,
            value: "(",
            className: "btn-primary",
        },
        {
            id: 1,
            value: ")",
            className: "btn-primary",
        },
        {
            id: 2,
            value: "%",
            className: "btn-primary",
        },
        {
            id: 3,
            value: "AC",
            className: "btn-primary",
        }
    ],
    [
        {
            id: 4,
            value: "7",
            className: "btn-secondary",
        },
        {
            id: 5,
            value: "8",
            name: "8",
            className: "btn-secondary",
        },
        {
            id: 6,
            value: "9",
            className: "btn-secondary",
        },
        {
            id: 7,
            value: "/",
            className: "btn-primary",
        }
    ],
    [
        {
            id: 8,
            value: "4",
            className: "btn-secondary",
        },
        {
            id: 9,
            value: "5",
            className: "btn-secondary",
        },
        {
            id: 10,
            value: "6",
            className: "btn-secondary",
        },
        {
            id: 11,
            value: "*",
            name: "x",
            className: "btn-primary",
        }
    ],
    [
        {
            id: 12,
            value: "1",
            className: "btn-secondary",
        },
        {
            id: 13,
            value: "2",
            className: "btn-secondary",
        },
        {
            id: 14,
            value: "3",
            className: "btn-secondary",
        },
        {
            id: 15,
            value: "-",
            className: "btn-primary",
        }
    ],
    [
        {
            id: 16,
            value: "0",
            className: "btn-secondary",
        },
        {
            id: 17,
            value: ".",
            className: "btn-secondary",
        },
        {
            id: 18,
            value: "=",
            className: "btn-tertiary",
        },
        {
            id: 19,
            value: "+",
            className: "btn-primary",
        }
    ]
]