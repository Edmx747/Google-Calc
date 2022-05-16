export interface ICalculatorButton {
    id: number;
    value: string;
    name?: string;
    className: string;
    type: CalculatorButtonType
}
export enum CalculatorButtonType {
    NUMBER = "number",
    OPERATOR = "operator"
}