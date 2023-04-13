import React, { useState } from 'react';
import { useRequest } from 'wdmjs';

import { aboutUser } from './services';
import styles from './style.scss';

export default function aboutPage() {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    console.log(num);
    setTimeout(() => {
      alert(num);
    }, 3000);
  };

  return (
    <div>
      <div>当前点击了{num}次</div>
      <button onClick={() => { setNum(num + 1); }}>点我</button>
      <button onClick={handleClick}>展示现在的值</button>
    </div>
  );
}
