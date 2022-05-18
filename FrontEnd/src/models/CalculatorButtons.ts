export interface ICalculatorButton {
    id: number;
    value: string;
    name?: string;
    className: string;
    type: CalculatorButtonType;
    disabled?: boolean;
}
export enum CalculatorButtonType {
    NUMBER = "number",
    OPERATOR = "operator"
}