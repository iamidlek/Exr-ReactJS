import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [counter, setCounter] = useState(0);
  // setCounter("string") 에러 자동으로 default 자료형으로 설정

  const [value, setValue] = useState<number | string>(0);
  // setValue 는 두가지 타입에서 에러가 나지 않음
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "black"}>
      {text}
    </Container>
  );
}

export default Circle;
