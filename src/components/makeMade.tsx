import { styled } from "styled-components";

interface Props {
  title: string;
  review: string;
}

const MadeMake = ({ title, review }: Props) => {
  return (
    <Div>
      <h1>{title}</h1>
      <p>{review}</p>
    </Div>
  );
};

export default MadeMake;

const Div = styled.div`
  h1 {
    font-size: 2.4rem;
    color: #fff;
    font-weight: 700;
    margin: 1.6rem 0 1rem 0;
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: #969fad;
    line-height: 2.2rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.8rem;
      margin: 3rem 0 0.7rem 0;
    }
    p {
      font-size: 1.5rem;
      line-height: 2.4rem;
    }
  }
`;
