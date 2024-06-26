import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

function ContentItem({ title, createDate }) {
    function formatDate(date) {
        const year = date.slice(0, 4);
        const month = date.slice(4, 6);
        const day = date.slice(6, 8);
        return `${year}. ${month}. ${day}`;
    }

    const formattedDate = formatDate(createDate);

    return (
        <ContentBox>
          <Title>{title}</Title>
          {createDate && <CreateDate>{formattedDate}</CreateDate>}
        </ContentBox>
      );
}

export default ContentItem;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.44rem;
  border: 1px solid ${color.gray[200]};
  border-radius: 0.625rem;

  p {
    margin: 0;
  }
`;

const Title = styled.p`
  ${font.H2};
`;

const CreateDate = styled.p`
  ${font.p2};
  color: ${color.gray[400]};
`;
