import React from 'react';
import classname from 'classnames';

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

const TextList = (props: TextProps) => {
  const {
    prefixCls = 'crm-text-list',
    className,
    options,
    isNumber = true,
  } = props;

  if (!(options && Array.isArray(options) && options.length)) {
    return null;
  }

  const cls = classname(prefixCls, className);

  const renderItem = (data: Array<OptionItem>) => {
    return data.map(({ label, number, value: val }, key) => (
      <li key={`cell_${number || key}`}>
        {
          isNumber
            ? (
              <div className={`${prefixCls}-number`}>{number || key + 1}.</div>
            )
            : null
        }
        <div className={`${prefixCls}-content`}>
          {label ? <div className={`${prefixCls}-label`}>{label}</div> : null}
          {val ? <div className={`${prefixCls}-value`}>{val}</div> : null}
        </div>
      </li>
    ));
  };

  return (
    <ol className={cls}>
      {renderItem(options)}
    </ol>
  );
};

export default TextList;
