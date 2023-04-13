/// <reference types="react" />
export interface OptionItem {
    label: string;
    value?: string;
    number?: string;
}
export interface TextProps {
    prefixCls?: string;
    isNumber?: boolean;
    className?: string;
    options: Array<OptionItem>;
}
declare const TextList: (props: TextProps) => JSX.Element | null;
export default TextList;
