import React from 'react';

import Icon from '../index.ts';
import "../styles/index.scss";

export default function IconDemo(params: type) {
  return (
    <>
      <div>icon demo</div>
      <Icon type="baozhangjihua" /><br />
      <Icon type="saomiao" />
      <Icon type="suanbaofei" />
      <Icon type="hebao" />
    </>
  );
}
