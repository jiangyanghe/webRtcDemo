import React from 'react';

import { Html } from '@example/components';

const style = {
  backgroundColor: 'red',
  fontSize: '20px',
};

export default function Demo() {
  return (
    <div>
      <Html
        label="<a>我是富文本</a>"
      />
      <br />
      <Html
        label="<span>文字添加</span>"
        className="text"
      />
      <br />
      <Html
        label="<span>文字添加</span>"
        style={style}
      />
    </div>
  );
}
