import React from 'react';
import classname from 'classnames';

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
  // fallback?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (param?: any) => void;
  prefixCls?: string;
}

export default (props: ImageProps) => {
  const {
    prefixCls = 'crm-image',
    href,
    alt = '',
    align = 'left',
    style,
    // fallback,
    className,
    onClick,
  } = props;

  const cls = classname(prefixCls, `${prefixCls}-${align}`, className);

  if (!href) {
    return <div className={`${prefixCls}-empty`}>请设置图片地址</div>;
  }

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      className={cls}
      role="button"
      onClick={(e) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onClick && onClick(e);
      }}
      // onClick={() => {}}
    >
      <img style={style} src={href} alt={alt} />
    </div>
  );
};
