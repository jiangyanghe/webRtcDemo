// @ts-ignore

export default {
  title: '组件',
  description: '组件文档',
  logo: 'https://static.iyb.tm/web/logo_1.png',
  gitlab: 'https://git.baoyun.ltd/iyunbao/frontend/tools/wdmjs',
  searchHotKey: {
    macos: '⌘+k',
    windows: 'ctrl+k',
  },
  navs: [
    {
      path: '/docs/tutorials/getting-started',
      type: 'nav',
      title: '文档',
      children: [
        'tutorials/getting-started',
        'introduce/code-flow',
      ],
    },
    {
      path: '/page',
      title: '组件',
      type: 'nav',
      children: [
        {
          path: '/page',
          title: '基本',
          children: [
            'page',
            'image',
          ],
        },
        {
          path: '/text',
          title: '文字',
          children: [
            'text/text',
            'text/textList',
            'text/html',
          ],
        },
      ],
    },
  ],
};
