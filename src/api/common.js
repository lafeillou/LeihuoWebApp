import axios from "../lib/api"; // axios包装

// 绑定设备
// {
//   "name": "王五",
//   "phone": "13212345679",
//   "policeNo": "12345679",
//   "sex": "男",
//   "jurisdiction": "洪山区",
//   "deviceNo": "HW12345679"
// }
export const bindDevice = (data) => {
  return axios({
    method: "post",
    url: "/user/bindUser",
    data,
  });
};

// 解绑设备
// {
//   "userId": 5,
//   "deviceNo": "HW12345679"
// }
export const unbindDevice = (data) => {
  return axios({
    method: "post",
    url: "/user/unBindUser",
    data,
  });
};

// 查询设备绑定状态
export const getBindingStatus = (deviceNo) => {
  return axios({
    method: "get",
    url: `/user/hasBind?deviceNo=${deviceNo}`,
  });
};

// 查看消息列表
// 返回结果
// {
//   "success": true,
//   "status": 200,
//   "msg": "操作成功",
//   "data": {
//       "records": [
//           {
//               "routerId": 1,
//               "messageId": 1,
//               "module": "TZGG",
//               "type": null,
//               "content": "这是一条新的消息，请注意查收！",
//               "createTime": "2021-05-01 03:10:15",
//               "readStatus": 0,
//               "readTime": null
//           }
//       ],
//       "total": 60,
//       "size": 1,
//       "current": 1,
//       "searchCount": true,
//       "pages": 60
//   }
// }
// 发布模块枚举
// ZDGK	重点管控
// JQTB	警情通报
// TZGG	通知公告
// FLZY	法律指引
export const getMsgList = ({ module, size, page }) => {
  return axios({
    method: "get",
    url: `/message/queryUserMessage?module=${module}&size=${size}&page=${page}`,
  });
};

// 查看通知详情
// {
//   "success": true,
//   "status": 200,
//   "msg": "操作成功",
//   "data": {
//       "routerId": null,
//       "messageId": null,
//       "module": "TZGG",
//       "type": null,
//       "content": "这是一条新的消息，请注意查收！",
//       "createTime": "2021-05-01 03:10:15",
//       "readStatus": null,
//       "readTime": null
//   }
// }
export const getMsgDetail = (messageId) => {
  return axios({
    method: "get",
    url: `/message/queryUserMessageDetail?messageId=${messageId}`,
  });
};

// 刷新Token
// {
//   "success": true,
//   "status": 200,
//   "msg": "操作成功",
//   "data": {
//       "id": 6,
//       "name": "刘七",
//       "password": null,
//       "phone": "13212345649",
//       "policeNo": "12345670",
//       "sex": "男",
//       "jurisdiction": "洪山区",
//       "registerTime": "2021-05-11 11:53:51",
//       "status": 1,
//       "deviceNo": "HW12345670",
//       "token": "22c25c62755f4bbc1d25785bbd2e4438"
//   }
// }
export const refreshToken = () => {
  return axios({
    method: "post",
    url: "/sys/refresh",
  });
};

// {
//   "id": 2,
//   "name": "王五",
//   "phone": "13212345679",
//   "policeNo": "12345679",
//   "sex": "男",
//   "jurisdiction": "洪山区",
//   "deviceNo": "HW12345679"
// }

// 修改用户信息，方便再审核
export const modifyUserInfo = (data) => {
  return axios({
    method: "post",
    url: "/user/modifyUser",
    data,
  });
};

// /api/message/showHtmlMessage?messageId=418
export const showMessageHtml = (messageId) => {
  return axios({
    method: "get",
    url: `/message/showHtmlMessage?messageId=${messageId}`,
    responseType: "text",
  });
};

// 2021-05-27 首页改版
// 首页某个点击某个tab获取数据
export const getIndexTabsData = (moduleId) => {
  return axios({
    method: "get",
    url: `/message/queryIndexMessage?module=${moduleId}`,
  });
};

// 改版后新增多二级列表页面
export const getSubMsgList = ({ module, type, size = 10, page = 1 }) => {
  return axios({
    method: "get",
    url: `/message/queryModuleTypeMessage?module=${module}&type=${type}&size=${size}&page=${page}`,
  });
};

// web版接口 2021-06-21
export const login = (data) => {
  return axios({
    method: "post",
    url: "/sys/login",
    data,
  });
};
// 测试跨域接口
export const getCorsTestResult = () => {
  return axios({
    method: "post",
    url: "/topics",
  });
};

// 查询业务部门列表，拍平的结构
export const getDepList = () => {
  return axios({
    method: "get",
    url: "/org/queryOrgDepartmentList",
  });
};
