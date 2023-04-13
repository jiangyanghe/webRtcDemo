import React from 'react';
/**
 * 容错处理
 * fallback
 * width={200}
 * height={200}
 * ionError
 * ionImgDidLoad
 * ionImgWillLoad
 */
export interface ImageProps {
    alt?: string;
    href?: string;
    align?: 'left' | 'center' | 'right';
    className?: string;
    style?: React.CSSProperties;
    onClick?: (param?: any) => void;
    prefixCls?: string;
}
declare const _default: (props: ImageProps) => JSX.Element;
export default _default;
