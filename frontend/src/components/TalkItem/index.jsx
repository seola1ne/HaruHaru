import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

function TalkItem({ id, writer, contents, createDate, answerDate, onClick }) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <ItemBox onClick={handleClick}>
      <ItemContents>
        <p className="title">{contents}</p>
        <p className="contents">{writer} 님</p>
      </ItemContents>
      <CircleBoxWrapper>
        <CircleBox />
        <CircleBox />
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
    background-color: rgba(241, 243, 246, 0.3);
    border-color: ${color.gray[200]};
    transition: 0.2s ease;
  }
`;

const CircleBoxWrapper = styled.div`
  position: absolute;
  bottom: -7rem;
  right: -2rem;
  display: flex;
  z-index: 2;
`;

const CircleBox = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: ${color.gray[100]};
  text-align: center;
  margin-left: -4.4rem;
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
    ${font.p3};
    line-height: 110%;
  }
`;
