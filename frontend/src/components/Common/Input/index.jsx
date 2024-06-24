import React from 'react';
import styled from 'styled-components';
import color from 'styles/color';
import font from 'styles/font';

const Input = ({ id, label, placeholder, ...props }) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputField placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Label = styled.label`
    margin-left: 1rem;
    ${font.caption};
`;

const InputField = styled.input`
    padding: 1rem 1.12rem;
    border-radius: 0.625rem;
    background-color: #FAFAFA;
    font-weight: 400;
    outline: none;
    border: none;
`;