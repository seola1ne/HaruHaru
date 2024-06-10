import React, { useState } from "react";
import styled from "styled-components";
import color from "../../styles/color";
import { Link } from "react-router-dom";
import HomeIndicatorImg from "assets/global/Home_Indicator.png";

import QuestionFill from "assets/footer/question-fill.png";
import QuestionDefault from "assets/footer/question-default.png";
import TalkFill from "assets/footer/talk-fill.png";
import TalkDefault from "assets/footer/talk-default.png";
import StorageFill from "assets/footer/storage-fill.png";
import StorageDefault from "assets/footer/storage-default.png";
import ProfileFill from "assets/footer/profile-fill.png";
import ProfileDefault from "assets/footer/profile-default.png"
import font from "styles/font";

function Footer() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const NavArray = [
    {
      text: "1문 1답",
      icon: [
        QuestionFill,
        QuestionDefault,
      ],
      endpoint: "/question",
    },
    {
      text: "이야기",
      icon: [
        TalkFill,
        TalkDefault,
      ],
      endpoint: "/talk",
    },
    {
      text: "저장소",
      icon: [
        StorageFill,
        StorageDefault,
      ],
      endpoint: "/storage",
    },
    {
      text: "프로필",
      icon: [
        ProfileFill,
        ProfileDefault,
      ],
      endpoint: "/profile",
    },
  ];

  return (
    <Container>
      <NavWrapper>
        {NavArray.map((item, index) => (
          <NavItem
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <StyledLink to={item.endpoint}>
              <Icon src={index === selectedIndex ? item.icon[0] : item.icon[1]} />
              <Label selected={index === selectedIndex}>{item.text}</Label>
            </StyledLink>
          </NavItem>
        ))}
      </NavWrapper>
      <HomeIndicator src={HomeIndicatorImg} />
    </Container>
  );
}


export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  z-index: 3;
  border-radius: 0 0 49px 49px;
  width: 100%;
  background-color: ${color.white};
  padding: 16px 0;
`;

const NavWrapper = styled.div`
  background-color: ${color.base['white']};
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 76px;
  border-radius: 30%;

  &:hover {
    background-color: ${color.gray[100]};
    transition: 0.15s ease;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Label = styled.span`
  ${font.icon};
  color: ${({ selected }) => selected ? color.gray[800] : color.gray[400]};
  margin-top: 8px;
`;

const HomeIndicator = styled.img`
  width: 100%;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 8px;
`;
