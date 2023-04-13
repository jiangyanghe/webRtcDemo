import React from 'react';
import { AnalysisEngine } from '@iyunbao/cr-engine';

import { Text } from '@example/components';
import dataSource from './page.json';

export default function Demo() {
  const options = {
    components: {
      text: Text,
    },
  };

  return (
    <AnalysisEngine dataSource={dataSource} options={options} />
  );
}
