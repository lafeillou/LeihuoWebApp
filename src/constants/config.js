// 是否是测试环境
const isDevEnv = process.env.NODE_ENV === "development";

const config = {
  // App Details
  appName: "LeihuoWebApp",

  // Build Configuration - eg. Debug or Release?
  isDevEnv,

  // Date Format 是个好想法，约束全局时间格式
  // dateFormat: 'Do MMM YYYY',

  // API
  apiBaseUrl: "/",
  //apiBaseUrl: "http://localhost:3001",
  // apiBaseUrl: isDevEnv
  //   ? "http://192.168.8.200/api"
  //   : "http://192.168.8.200/api",
  allocServerUrl: isDevEnv
    ? "http://192.168.8.200:9999"
    : "http://192.168.8.200:9999",
  // apiBaseUrl: isDevEnv ? 'http://192.168.110.222/api' : 'http://192.168.110.222/api',
  // allocServerUrl: isDevEnv ? 'http://192.168.110.222:9999' : 'http://192.168.110.222:9999',
  //   apiBaseUrl: isDevEnv ? "http://59.92.0.3/api" : "http://59.92.0.3/api",
  //   allocServerUrl: isDevEnv ? "http://59.92.0.3:9999" : "http://59.92.0.3:9999",
  // deep link
  uriPrefix: "thunderFire://",

  // 辖区列表, 将被删除
  areaList: [
    "荆州区",
    "沙市区",
    "江陵县",
    "公安县",
    "松滋市",
    "石首市",
    "监利县",
    "洪湖市",
    "荆州经济开发区",
  ],

  // icon映射
  uriMap: {
    ["01"]: "xitong",
    ["11"]: "yiqing",
    ["12"]: "zhapian",
    ["21"]: "jingqinng",
    ["22"]: "shezha",
    ["31"]: "tongzhi",
    ["41"]: "falv",
  },
};

export default config;
