import Column from 'components/Common/Flex/Column';
import Row from 'components/Common/Flex/Row';
import React from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import font from 'styles/font';

function AnswerItem({ id, title, emoji, answer, date, isActive, onClick }) {
  function formatDate(timestamp) {
    if (!timestamp || !timestamp.toDate) {
      return 'Invalid Date';
    }

    const dateObj = timestamp.toDate(); // Firestore Timestamp를 JavaScript Date 객체로 변환
    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');
    return `${year}. ${month}. ${day}`;
  }

  const formattedDate = formatDate(date);

  // 답변이 'No answer'일 경우 null을 반환하여 렌더링을 하지 않음
  if (answer === 'No answer') {
    return null;
  }

  return (
    <AnswerItemBox onClick={onClick}>
      <Row gap={0.88}>
        <p className="emoji">{emoji}</p>
        <Column gap={0.6}>
          <Column gap={0.4}>
            <p className="title">{title}</p>
            <p className="date">{formattedDate}</p>
          </Column>
          <p className="answer" style={{ display: isActive ? 'block' : 'none' }}>
            {answer}
          </p>
        </Column>
      </Row>
    </AnswerItemBox>
  );
}

export default AnswerItem;



const AnswerItemBox = styled.div`
  background-color: ${color.base['white']};
  border: 1px solid ${color.gray[200]};
  border-radius: 0.625rem;
  padding: 1.4rem 1.2rem;
  cursor: pointer;

  .emoji {
    ${font.H1};
  }

  .title {
    ${font.H2};
    font-weight: bold;
    word-break: keep-all;
  }

  .date {
    color: ${color.gray[400]};
  }

  .answer {
    ${font.Body1};
    margin-top: 0.5rem;
  }

  &:hover {
    transition: 0.3s ease;
    background-color: ${color.gray[50]};
    border-color: ${color.gray[200]};
  }
`;
