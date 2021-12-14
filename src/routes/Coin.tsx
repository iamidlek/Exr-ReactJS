import { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// state로 받아온 name을 정의하는 방법
interface nameState {
  name: string;
}

interface RouteState {
  state: nameState;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  // useParams에 자동적으로 stirng 설정됨
  // const { coinId } = useParams();

  // 부모에서 state로 넘긴 데이터들을 이용
  const { state } = useLocation() as RouteState;
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
