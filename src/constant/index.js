const routes = [
  {
    path: '/',
    name: '数据源管理',
    meta: {
      title: '数据源管理'
    },
    component: () => import('../pagers/dataSource'),
  },
  {
    path: '/backTools',
    name: '后端系统工具',
    meta: {
      title: '后端系统工具'
    },
    component: () => import('../pagers/null'),
    children: [
      {
        path: '/genDockerCommand', name: "docker命令生成", component: () => import('../pagers/dockerRun'),
        meta: {
          title: 'docker命令生成'
        }
      },
      {
        path: '/mdToWord', name: "word文档生成(md)", component: () => import('../pagers/mdToWord'),
        meta: {
          title: 'word文档生成(md)'
        }
      },
      {
        path: '/dbToWord', name: "word文档生成(db)", component: () => import('../pagers/dbToWord'),
        meta: {
          title: 'word文档生成(db)'
        }
      },
      {
        path: '/dbToCode', name: "代码生成", component: () => import('../pagers/dbToCode'),
        meta: {
          title: '代码生成'
        }
      }
    ]
  },
  {
    path: '/frontTools',
    name: '前端系统工具',
    meta: {
      title: '前端系统工具'
    },
    component: () => import('../pagers/tableGen'),
    children: [
      {
        path: '/tableGen', name: "表单生成", component: () => import('../pagers/tableGen'),
        meta: {
          title: '表单生成'
        }
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo演示',
    meta: {
      title: 'demo演示'
    },
    component: () => import('../pagers/JsonToTree'),
    children: [
      {
        path: '/JsonToTree', name: "json转换成树", component: () => import('../pagers/JsonToTree'),
        meta: {
          title: 'json转换成树'
        }
      }
    ]
  }

];

export {routes}
