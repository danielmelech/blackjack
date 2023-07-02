import styled from "styled-components";
import { getCardCharacter } from "./card";

const CardBox = styled.div`
  font-size: 13rem;
  color: ${(props) =>
    props.suite === "clubs" || props.suite === "spades" ? "black" : "red"};
`;

function Card({ card12 }) {
  return <CardBox suite={card12.suite}>{getCardCharacter(card12)}</CardBox>;
}

export default Card;
