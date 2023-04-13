import React from 'react';

import { Text } from '@example/components';

const styles = {
  backgroundColor: 'red',
  fontSize: '20px',
};

export default function Demo() {
  return (
    <div>
      <Text
        label="普通文字"
      />
      <br />
      <Text
        label="文字添加class"
        className="text"
      />
      <br />
      <Text
        label="意外及疾病住院医疗费用"
        style={styles}
      />
    </div>
  );
}
