import initialState from "../store/userInfo.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const store = {
  namespace: "userInfo",
  /**
   *  Initial state
   */
  state: initialState,
  effects: (dispatch) => {
    return {};
  },
  /**
   * Reducers
   */
  reducers: {},
};

export default store;
