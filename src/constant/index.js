const routes = [
  {
    path: "/",
    redirect: "/web/companyWeb",
    show: false
  },
  {
    path: '/web',
    name: '常用网站',
    show: true,
    meta: {
      title: '常用网站'
    },
    icon: "icon-wangzhan",
    component: () => import('../pagers/null'),
    children: [
      {
        path: 'companyWeb',
        name: "公司网站",
        show: true,
        icon: "icon-gongsi",
        component: () => import('../pagers/companyWeb'),
        meta: {
          title: '公司网站'
        }
      },
      {
        path: 'studyWeb',
        name: "常用学习网站",
        show: true,
        icon: "icon-xuexi",
        component: () => import('../pagers/studyWeb'),
        meta: {
          title: '常用学习网站'
        }
      }
    ]
  },
  {
    path: '/dataSource',
    name: '数据源管理',
    show: true,
    meta: {
      title: '数据源管理'
    },
    icon: "icon-shujuyuanguanli",
    component: () => import('../pagers/dataSource'),
  },
  {
    path: '/backTools',
    name: '后端系统工具',
    show: true,
    icon: "icon-_houduankaifa",
    meta: {
      title: '后端系统工具'
    },
    component: () => import('../pagers/null'),
    children: [
      {
        path: 'genDockerCommand',
        name: "docker命令生成",
        show: true,
        icon: "icon-docker",
        component: () => import('../pagers/dockerRun'),
        meta: {
          title: 'docker命令生成'
        }
      },
      {
        path: 'mdToWord',
        name: "word文档生成(md)",
        show: true,
        icon: "icon-Word",
        component: () => import('../pagers/mdToWord'),
        meta: {
          title: 'word文档生成(md)'
        }
      },
      {
        path: 'dbToWord',
        name: "word文档生成(db)",
        show: true,
        icon: "icon-Word",
        component: () => import('../pagers/dbToWord'),
        meta: {
          title: 'word文档生成(db)'
        }
      },
      {
        path: 'dbToCode',
        name: "代码生成",
        show: true,
        icon: "icon-daima",
        component: () => import('../pagers/dbToCode'),
        meta: {
          title: '代码生成'
        }
      }
    ]
  },
  {
    path: '/frontTools',
    name: '前端系统工具',
    show: true,
    icon: "icon-_qianduankaifa",
    meta: {
      title: '前端系统工具'
    },
    component: () => import('../pagers/null'),
    children: [
      {
        path: 'tableGen',
        name: "表单生成",
        show: true,
        icon: "icon-biaodan",
        component: () => import('../pagers/tableGen'),
        meta: {
          title: '表单生成'
        }
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo演示',
    show: true,
    icon: "icon-show",
    meta: {
      title: 'demo演示'
    },
    component: () => import('../pagers/null'),
    children: [
      {
        path: 'JsonToTree',
        name: "json转换成树",
        show: true,
        icon: "icon-jsongeshihua",
        component: () => import('../pagers/JsonToTree'),
        meta: {
          title: 'json转换成树'
        }
      }
    ]
  }

];

export {routes}
