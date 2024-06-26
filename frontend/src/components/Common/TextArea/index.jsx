import React, { useState } from 'react';
import styled from 'styled-components';
import font from 'styles/font';
import color from 'styles/color';

function TextArea({ name, value, onChange, placeholder, rows = 4, ...props }) {
  return (
    <StyledTextArea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  );
}

export default TextArea;

const StyledTextArea = styled.textarea`
  padding: 1.12rem 1.37rem;
  width: 17.8rem;
  background-color: ${color.base['white']};
  border-radius: 0.625rem;
  border: 1px solid ${({ isFocused }) => (isFocused ? color.gray[600] : color.gray[200])};
  resize: none;
  ${font.p3};

  &::-webkit-resizer {
    display: none;
  }

  &::placeholder {
    color: ${color.gray[400]};
  }

  &:hover {
    border-color: ${color.gray[400]};
  }

  &:focus {
      outline: none;
      border-color: ${color.gray[400]};
  }
`;
