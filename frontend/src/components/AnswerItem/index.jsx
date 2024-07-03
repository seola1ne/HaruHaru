import Column from 'components/Common/Flex/Column';
import Row from 'components/Common/Flex/Row';
import React from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import font from 'styles/font';

function AnswerItem({id, title, answer, date, isActive, onClick}){
  function formatDate(date) {
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    return `${year}. ${month}. ${day}`;
  }

  const formattedDate = formatDate(date);

  return (
    <AnswerItemBox onClick={onClick}>
      <Row gap={0.88}>
        <p className="title">{id}</p>
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
};

export default AnswerItem;

const AnswerItemBox = styled.div`
  border: 1px solid ${color.gray[300]};
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;

  .title {
    ${font.H2};
    font-weight: bold;
    max-width: 17rem;
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
    background-color: ${color.gray[100]};
  }
`;
