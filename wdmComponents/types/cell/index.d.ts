import React from 'react';
export interface CellProps {
    /**
     * 标题
     * @default
     */
    label?: string;
    /**
     * 右侧描述内容
     * @default
     */
    description?: string;
    /**
     * 是否显示箭头
     * @default
     */
    hasArrow?: boolean;
    /**
     * 帮助
     * @default
     */
    help?: string;
    /**
     * 前缀名
     * @default 'crm-cell'
     */
    prefixCls?: string;
    /**
     * 元素的类名称
     * @default
     */
    className?: string;
    /**
     * 元素的样式
     * @default
     */
    style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<(props: CellProps) => JSX.Element>;
export default _default;
