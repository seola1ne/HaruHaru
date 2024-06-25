import { styled } from "styled-components";

const Row = ({
  width = "fit-content",
  height = "fit-content",
  alignItems = "stretch",
  justifyContent = "flex-start",
  gap = 0,
  children,
}) => {
  return (
    <Container style={{ width, height, alignItems, justifyContent, gap: `${gap}rem` }}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Row;