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
  //apiBaseUrl: "http://localhost:3001",
  apiBaseUrl: isDevEnv ? "http://192.168.8.200/api" : "/api",
  allocServerUrl: isDevEnv
    ? "http://192.168.8.200:9999"
    : "http://192.168.8.200:9999",
  // apiBaseUrl: isDevEnv ? 'http://192.168.110.222/api' : 'http://192.168.110.222/api',
  // allocServerUrl: isDevEnv ? 'http://192.168.110.222:9999' : 'http://192.168.110.222:9999',
  //   apiBaseUrl: isDevEnv ? "http://59.92.0.3/api" : "http://59.92.0.3/api",
  //   allocServerUrl: isDevEnv ? "http://59.92.0.3:9999" : "http://59.92.0.3:9999",
  // deep link
  uriPrefix: "thunderFire://",
};

export default config;
