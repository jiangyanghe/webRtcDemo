import React from 'react';
import { useModel } from 'wdmjs';
import { Button } from 'zarm';

export default function HomePage() {
  const { initialState } = useModel('@@initialState');
  // const { user, loading } = useModel('useUserModel');

  const user = {};

  console.log('index user===', initialState);

  return (
    <div>
      name: {initialState?.currentUser?.name}
      <br />
      <Button block theme="primary">1111</Button>
    </div>
  );
}
