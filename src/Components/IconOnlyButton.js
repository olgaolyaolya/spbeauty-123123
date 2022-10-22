import Clickable from "./Clickable";
import styled from "styled-components";

function IconOnlyButton({ icon }) {
  const Container = styled.div`
    &:hover {
      opacity: 0.8;
    }
  `;
  return (
    <Container>
      <Clickable>{icon}</Clickable>
    </Container>
  );
}

export default IconOnlyButton;

