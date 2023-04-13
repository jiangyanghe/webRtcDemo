import React from 'react';
export interface PageProps {
    /**
     * 设置页面标题
     * @default
     */
    title?: string;
    /**
     * 设置页面右上角分享
     * @default
     */
    share?: {
        title: string;
        desc: string;
        imgUrl: string;
        link?: string;
    };
    /**
     * 元素的类名称
     * @default
     */
    className?: string;
    /**
     * 前缀名
     * @default
     */
    prefixCls?: string;
    /**
     * 元素的样式
     * @default
     */
    style?: React.CSSProperties;
    /**
     * 子级
     * @default
     */
    children?: React.ReactNode;
}
declare const Page: (props: PageProps) => JSX.Element;
export default Page;
