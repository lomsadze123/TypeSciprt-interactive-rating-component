import { styled } from "styled-components";
import Rate from "./components/rate";

function App() {
  return (
    <Body>
      <Rate />
    </Body>
  );
}

export default App;

const Body = styled.div`
  background-color: #131518;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.4rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`;
