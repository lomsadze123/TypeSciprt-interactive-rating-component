import { styled } from "styled-components";
import Payment from "../assets/payment.svg";
import MadeMake from "./makeMade";

interface Score {
  score: number;
}

const Thanks = ({ score }: Score) => {
  return (
    <Main>
      <img src={Payment} alt="Payment" />
      <P>You selected {score} out of 5</P>
      <MadeMake
        title="Thank you!"
        review="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
      />
    </Main>
  );
};

export default Thanks;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    width: 14.4rem;
    height: auto;
    background-color: transparent;
    padding: 0;
  }
  p {
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    img {
      width: 16.2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const P = styled.p`
  color: #fc7614;
  font-size: 1.4rem;
  padding: 0.5rem 1.2rem;
  background-color: #262e38;
  border-radius: 2.25rem;
  line-height: 2.2rem;
  margin: 2.4rem 0 0.8rem 0;
`;
