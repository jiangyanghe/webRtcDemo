import React from 'react';
import classnames from 'classnames';

export interface TextProps {
  prefixCls?: string;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

const Text = (props: TextProps) => {
  const {
    prefixCls = 'crm-text',
    label,
    className,
    style,
  } = props;

  if (!label) {
    return null;
  }

  const cls = classnames(prefixCls, className);

  return (
    <div
      className={cls}
      style={style}
    >
      {label}
    </div>
  );
};

export default Text;
