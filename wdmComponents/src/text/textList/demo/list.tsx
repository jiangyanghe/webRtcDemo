import React from 'react';

import { TextList } from '@example/components';
import '../style/index.scss';

const listOptions = [
  {
    number: '1',
    label: '【职业】',
    value: '被保险人是否从事属于<file href="https://cdn.iyb.tm/app/config/img/64cbf8a439f946c8b49183c7c2224b1d.pdf">《众安保险特殊职业类别表》</file>中所列种类的职业?',
  },
  {
    number: '2',
    label: '【就医行为】',
    value: '被保险人是否过去1年内存在括号内医学检查结果异常*被医生建议进一步检查，复查，随诊',
  },
  {
    number: '3',
    label: '【保险情况】',
    value: '被保险人过去2年内投保人身保险或健康保险时，是否被保险公司拒保，延期，加费或者附加相关条件承保？',
  },
  {
    number: '4',
    label: '【被保险人正在患有或曾经被诊断患下列疾病或罹患下列症状体征】',
    value: '（1）良、恶性肿瘤，尚未证实为良性或恶性的肿瘤，原位癌',
  },
];

export default function Demo() {
  return (
    <div>
      <TextList
        options={listOptions}
      />

      <TextList
        options={listOptions}
        isNumber={false}
      />
    </div>
  );
}
