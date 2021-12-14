import styled from "styled-components";

// {}  obj의 정의
// optional 한 속성은 ? 를 붙여준다 => string | undefined
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

// props: CircleProps 를 주는 방법
// interface에서 선언한 값들만 작성이 가능하다
const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 100px;
`;

// Circle은 사용시 무조건 bgColor를 받도록 설정된다
// require가 아닌 borderColor에 default값을 검정으로 설정
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "black"}>
      {text}
    </Container>
  );
}

export default Circle;
