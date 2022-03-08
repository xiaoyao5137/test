export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
    // layout: false,
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    // name: 'list.table-list',
    // icon: 'table',
    path: '/list',
    component: './TableList',
    headerRender: false,
    menuHeaderRender: false,
    // layout: false,
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
  // {
  //   path: './index2',
  // component: '/docs/index2',
  // },
];
