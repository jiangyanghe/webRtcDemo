export default [
  {
    path: '/',
    // component: '@/components/index',
    routes: [
      {
        path: '/',
        component: './index',
        title: '首页',
      },
      {
        path: '/login',
        component: './login/login',
        title: '登录',
      },
      {
        path: '/about',
        component: './about/about',
        title: '关于我们',
      },
      { // 获取媒体权限
        path: '/getUserMedia',
        component: './demo/getUserMedia',
        title: 'getUserMedia',
      },
      { // 拍照
        path: '/photo',
        component: './demo/photo',
        title: 'photo',
      },
      { // 客户端录屏
        path: '/video',
        component: './demo/video',
        title: 'video',
      },
      { // 客户端录屏
        path: '/peerconnection',
        component: './demo/peerconnection',
        title: 'peerconnection',
      },
      { // 录制桌面
        path: '/getDisplayMedia',
        component: './demo/getDisplayMedia',
        title: 'getDisplayMedia',
      },
    ],
  },
  {
    path: '*',
    component: './404',
  },
];
