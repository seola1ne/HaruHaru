import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

function TalkItem({ id, writer, contents, createDate, answerDate, color, onClick }) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <ItemBox color={color} onClick={handleClick}>
      <ItemContents>
        <p className="title">{writer} 님</p>
        <p className="contents">{contents}</p>
      </ItemContents>
      <CircleBoxWrapper>
        <CircleBox color={color} />
        <CircleBox color={color} />
      </CircleBoxWrapper>
    </ItemBox>
  );
}

export default TalkItem;

const ItemBox = styled.div`
  border-radius: 0.625rem;
  width: 17rem;
  min-height: 6.6rem;
  border: 2px solid ${color.gray[100]};
  background-color: ${color.base["white"]};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => `${props.color}30`};
    border-color: ${(props) => `${props.color}`};
    transition: 0.2s ease;
  }
`;

const CircleBoxWrapper = styled.div`
  position: absolute;
  bottom: -5rem;
  right: -1rem;
  display: flex;
  z-index: 2;
`;

const CircleBox = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  text-align: center;
  margin-left: -2rem;
`;

const ItemContents = styled.div`
  z-index: 3;
  margin-top: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  p {
    margin: 0;
  }

  .title {
    ${font.H2};
  }

  .contents {
    ${font.p2};
  }
`;
