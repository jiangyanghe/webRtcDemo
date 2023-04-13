import React from 'react';
import { AnalysisEngine } from '@iyunbao/cr-engine';
import '../style/index.scss';

import { TextList } from '@example/components';
import dataSource from './page.json';

export default function Demo() {
  const options = {
    components: {
      'text-list': TextList,
    },
  };

  return (
    <AnalysisEngine dataSource={dataSource} options={options} />
  );
}
