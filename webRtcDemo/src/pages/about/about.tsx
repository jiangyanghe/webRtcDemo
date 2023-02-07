import React from 'react';
import { useRequest } from 'wdmjs';

import { aboutUser } from './services';
import styles from './style.scss';

export default function aboutPage() {
  const data = useRequest(aboutUser);

  console.log('data====', data);

  return (
    <div className="container">
      <p className={styles.title}>About</p>
    </div>
  );
}
