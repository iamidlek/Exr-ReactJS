import { DefaultTheme } from "styled-components";

// styled.d.ts 에서 확장한 값들을 설정
export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "white",
  accentColor: "#9c88ff",
  cardBgColor: "transparent",
};

export const lightTheme: DefaultTheme = {
  bgColor: "whitesmoke",
  textColor: "black",
  accentColor: "#9c88ff",
  cardBgColor: "white",
};

// export const lightTheme: DefaultTheme = {
//   bgColor: "white",
//   textColor: "black",
//   btnColor: "tomato",
// };

// export const darkTheme: DefaultTheme = {
//   bgColor: "black",
//   textColor: "white",
//   btnColor: "teal",
// };

// 사용시
// provider로 감싼 영역 안에서는 theme로 받아서 사용 가능

// const sample = styled.div`
//   background-color: ${props=> props.theme.bgColor}
// `
