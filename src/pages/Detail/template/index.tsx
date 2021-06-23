import t11 from "./t11";
import t21 from "./t21";
import t23 from "./t23";

const template: any = {
  // 重点管控
  ZDGK: {
    // 三涉管控
    11: `${t11}`,
    // 重点人员
    12: "",
  },
  JQTB: {
    // 三涉警情
    21: `${t21}`,
    // 预警指令
    22: "",
    // 110警情
    23: `${t23}`,
  },
  TZGG: {
    31: "",
  },
  FLZY: {
    41: "",
  },
};

export default template;
