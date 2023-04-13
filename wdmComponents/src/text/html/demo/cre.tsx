import React from 'react';
import { AnalysisEngine } from '@iyunbao/cr-engine';

import { Html } from '@example/components';
import dataSource from './page.json';

export default function Demo() {
  const options = {
    components: {
      html: Html,
    },
  };

  return (
    <AnalysisEngine dataSource={dataSource} options={options} />
  );
}
