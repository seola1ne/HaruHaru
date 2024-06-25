import { styled } from "styled-components";

const Column = ({
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
  flex-direction: column;
`;

export default Column;