import React from 'react';
import { AnalysisEngine } from '@iyunbao/cr-engine';

import { Hr, Text } from '@example/components';
import dataSource from './page.json';
import '../style/index.scss';

export default function Demo() {
  const options = {
    components: {
      hr: Hr,
      text: Text,
    },
  };

  return (
    <AnalysisEngine dataSource={dataSource} options={options} />
  );
}
