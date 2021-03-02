import { instance } from "./axios";

// 同步进度
const getMenuList = () => {
  return instance({
    url: "/dataList"
  });
};

export { getMenuList };
