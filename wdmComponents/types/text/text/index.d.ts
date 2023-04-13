import React from 'react';
export interface TextProps {
    prefixCls?: string;
    label: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const Text: (props: TextProps) => JSX.Element | null;
export default Text;
