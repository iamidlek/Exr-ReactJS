import { useParams } from "react-router";

function Coin() {
  // useParams에 자동적으로 stirng 설정
  const { coinId } = useParams();
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;
