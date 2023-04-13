import React from 'react';
import classnames from 'classnames';

export interface TextProps {
  prefixCls?: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

const Html = (props: TextProps) => {
  const {
    prefixCls = 'crm-html',
    label = '',
    style,
    className,
  } = props;

  const cls = classnames(prefixCls, className);

  return (
    // eslint-disable-next-line react/no-danger, react/react-in-jsx-scope
    <div
      className={cls}
      style={style}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
};

export default Html;
