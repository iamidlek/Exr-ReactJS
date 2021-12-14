import styled, { keyframes } from "styled-components";

// 태그 속성을 주는 방법
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: tomato;
`;

// 애니메이션 주기
const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

// 설정 값 받기 props
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  /* 자식 요소 선택 */
  span {
    font-size: 48px;
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const Emoji = styled.span``;

const Box2 = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  /* 자식을 컴포넌트로 설정 */
  ${Emoji} {
    font-size: 48px;
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

// 컴포넌트 확장(extend) 하기
const Circle = styled(Box)`
  border-radius: 50px;
`;

const Text = styled.span`
  color: white;
`;

const Btn = styled.button`
  color: white;
  background-color: blue;
  border: 0;
  border-radius: 15px;
`;
// theme에 설정한 이름의 값 부여
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Father = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;
function styledComponent() {
  return (
    <Father as="header">
      {/* <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box bgColor="tomato" />
      <Circle bgColor="tomato" /> */}
      {/* <Btn as="a" href="/">
        Log in
      </Btn> */}
      {/* <Box2 bgColor="blue">
        <Emoji>🤩</Emoji>
      </Box2> */}
      <Title>제목</Title>
    </Father>
  );
}

export default styledComponent;
