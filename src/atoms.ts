import { atom } from "recoil";

// 사용시에는 isDarkAtom의 default값을 이용
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
