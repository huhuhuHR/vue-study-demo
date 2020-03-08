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

const webInfo = [
  {
    id: 1,
    name: "新浪",
    url: "https://weibo.com/",
    icon: "icon-xinlang",
    color: "red"
  },
  {
    id: 2,
    name: "简书",
    url: "http://www.jianshu.com/",
    icon: "icon-jianshu",
    color: "rgb(234, 111, 90)"
  },
  {
    id: 3,
    name: "掘金",
    url: "https://juejin.im/timeline",
    icon: "icon-juejin",
    color: "rgb(54, 107, 210)"
  },
  {
    id: 4,
    name: "CSDN",
    url: "https://www.csdn.net/",
    icon: "icon-csdn",
    color: "rgb(221, 23, 0)"
  },
  {
    id: 5,
    name: "GITHUB",
    url: "https://github.com/",
    icon: "icon-GitHub",
    color: "#666"
  },
  {
    id: 6,
    name: "stackOverflow",
    url: "https://stackoverflow.com/",
    icon: "icon-stackoverflowcolor",
    color: "rgb(255, 129, 15)"
  },
  {
    id: 7,
    name: "npm",
    url: "https://www.npmjs.com",
    icon: "icon-npm",
    color: "rgb(203, 56, 55)"
  },
  {
    id: 8,
    name: "docker",
    url: "https://hub.docker.com/",
    icon: "icon-docker",
    color: "#3385ff"
  },
  {
    id: 9,
    name: "网易课堂",
    url: "https://study.163.com/my",
    icon: "icon-wangyi",
    color: "green"
  },
  {
    id: 10,
    name: "力扣",
    url: "https://leetcode-cn.com/problems/combine-two-tables/",
    icon: "icon-icon_",
    color: "rgb(54, 107, 210)"
  },
  {
    id: 11,
    name: "搜索书籍",
    url: "https://itbook.download/?p=2&tag=&search=",
    icon: "icon-sousuoshuji",
    color: "orange"
  },
  {
    id: 12,
    name: "咕泡学院",
    url: "https://v.gupaoedu.com",
    icon: "icon-xuexi",
    color: "black"
  }
];

const companyWebInfo = [
  {
    id: 1,
    name: "邮箱",
    url: "https://mail.rdunicloud.com:8443/mail/?_task=mail&_caps=pdf%3D1%2Cflash%3D0%2Ctiff%3D0%2Cwebp%3D1&_uid=222&_mbox=INBOX&_action=show",
    icon: "icon-mail",
    color: ""
  },
  {
    id: 2,
    name: "禅道",
    url: "http://10.0.54.69/zentao/user-login-L3plbnRhby9idWctYnJvd3NlLTE3LS1ieU1vZHVsZS0xNTcuaHRtbA==.html",
    icon: "icon-chandao",
    color: ""
  },
  {
    id: 3,
    name: "jenkins",
    url: "http://10.0.53.141:8080/jenkins/",
    icon: "icon-jenkins",
    color: ""
  },
  {
    id: 4,
    name: "gitlabel",
    url: "http://10.0.53.138/users/sign_in",
    icon: "icon-gitlab",
    color: ""
  },
  {
    id: 5,
    name: "OA",
    url: "http://uworker.unicloud.com/web-oa/page/index.html#/dashboard",
    icon: "icon-oa1",
    color: ""
  },
  {
    id: 6,
    name: "YPI",
    url: "http://10.0.53.135/group/247",
    icon: "icon-daohang",
    color: ""
  },
  {
    id: 7,
    name: "网盘",
    url: "https://unidrive.unicloud.com",
    icon: "icon-wangpan",
    color: ""
  },
  {
    id: 8,
    name: "hub",
    url: "https://cce.unicloudsrv.com",
    icon: "icon-docker",
    color: ""
  },
  {
    id: 9,
    name: "数据中台门户",
    url: "http://data.unicloud.com/",
    icon: "icon-shujuzhongtai",
    color: ""
  }
];
export {routes, webInfo, companyWebInfo}
