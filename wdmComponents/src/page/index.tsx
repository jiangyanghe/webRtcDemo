import React from 'react';
import classnames from 'classnames';

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

const Page = (props: PageProps) => {
  const { prefixCls = 'crm-page', children, className, style = {} } = props;

  const cls = classnames(prefixCls, className);

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
};

export default Page;
