import React from 'react';
import { Input, Button } from 'zarm';
import { useModel, useNavigate } from 'wdmjs';

import { loginUser, outLogin } from './services';

export default function LoginPage() {
  const { user } = useModel('useUserModel');
  const data = loginUser().then((res) => {
    console.log('then data===', res);
  });
  const navigate = useNavigate();

  console.log(data);

  return (
    <div>
      <div className="form__item">
        {user.username}
        <Input
          type="text"
          placeholder="请输入手机号"
          onChange={() => {}}
        />
      </div>
      <div className="form__item">
        <Input
          type="passport"
          placeholder="请输入密码"
          onChange={() => {}}
        />
      </div>

      <Button
        block
        theme="primary"
        onClick={() => navigate('/')}
      >
        登录
      </Button>
      <br />
      <Button
        block
        onClick={() => outLogin({
          params: 'id',
          data: {
            passport: 'xxx',
          },
        })}
      >
        退出登录
      </Button>
    </div>
  );
}
