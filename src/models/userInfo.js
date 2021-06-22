import { login as loginApi } from "../api/common";
import initialState from "../store/userInfo.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const store = {
  namespace: "userInfo",
  /**
   *  Initial state
   */
  state: initialState,
  effects: (dispatch) => {
    return {
      login(data) {
        // present 用来弹出提示的，1.这样传来传去，控制UI肯定不行，太low 2.这种情况下，错误的统一处理单元要写到哪里？
        const { policeCode, name, present } = data;
        loginApi({
          policeNo: policeCode,
          password: policeCode,
          // name
        })
          .then((res) => {
            if (res.data.success) {
              present({
                message: res.data.msg,
                duration: 3000,
              });
              // reducer
              dispatch.userInfo.replace(res.data.data);
              AsyncStorage.setItem("@Auth:token", res.data.data.token);
              // to do 登录成功后的操作
              // 设置redux跳转去首页
              window.location.href = "/";
            }
          })
          .catch((err) => {
            present({
              message: err,
              color: "danger",
              duration: 3000,
            });
          });
      },
    };
  },
  /**
   * Reducers
   */
  reducers: {
    // 更新登录用户信息
    replace(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default store;
