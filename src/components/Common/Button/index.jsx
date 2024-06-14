import styled, { css } from "styled-components";
import font from "styles/font";
import color from "styles/color";

const Button = ({ variant, width, ...props }) => {
    switch (variant) {
        case "primary":
            return <PrimaryButton width={width} {...props} />;
        case "secondary":
            return <SecondaryButton width={width} {...props} />;
        case "tertiary":
            return <TertiaryButton width={width} {...props} />;
        case "text":
            return <TextButton width={width} {...props} />;
        default:
            return <ButtonBase width={width} {...props} />;
    }
};

export default Button;

const ButtonBase = styled.button`
    width: ${props => props.width ? props.width : "19.625rem"};
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    ${font.button}
    cursor: pointer;
    border: none;
    color: ${color.base['black']};
    &:hover {
        transition: 0.2s ease;
    }
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: ${color.gray[900]};
  color: ${color.base['white']};
  padding: 1rem 1rem;

  &:hover {
    background-color: ${color.gray[700]};
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background-color: ${color.gray[200]};
  color: ${color.gray[900]};

  &:hover {
    background-color: ${color.gray[300]};
  }
`;

const TertiaryButton = styled(ButtonBase)`
    border: 1px solid ${color.gray[400]};
    color: ${color.gray[900]};

  &:hover {
    border-color: ${color.gray[900]};
  }
`;

const TextButton = styled(ButtonBase)`
    border: none;
    color: ${color.gray[600]};

    &:hover {
        color: ${color.gray[900]};
    }
`;
