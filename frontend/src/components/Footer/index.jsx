import React, { useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import { Link } from "react-router-dom";
import HomeIndicatorImg from "assets/global/Home_Indicator.png";
import NavButton from "./NavButton";

import QuestionFill from "assets/footer/question-fill.png";
import QuestionDefault from "assets/footer/question-default.png";
import TalkFill from "assets/footer/talk-fill.png";
import TalkDefault from "assets/footer/talk-default.png";
import StorageFill from "assets/footer/storage-fill.png";
import StorageDefault from "assets/footer/storage-default.png";
import ProfileFill from "assets/footer/profile-fill.png";
import ProfileDefault from "assets/footer/profile-default.png";

function Footer() {
  const [selectedIndex, setSelectedIndex] = useState();

  const NavArray = [
    {
      text: "1문 1답",
      icon: [QuestionFill, QuestionDefault],
      endpoint: "/question",
    },
    {
      text: "이야기",
      icon: [TalkFill, TalkDefault],
      endpoint: "/talk",
    },
    {
      text: "저장소",
      icon: [StorageFill, StorageDefault],
      endpoint: "/storage",
    },
    {
      text: "프로필",
      icon: [ProfileFill, ProfileDefault],
      endpoint: "/profile",
    },
  ];

  return (
    <Container>
      <NavWrapper>
        {NavArray.map((item, index) => (
          <StyledLink
            to={item.endpoint}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <NavButton
              index={index + 1}
              text={item.text}
              icon={item.icon}
              isActive={selectedIndex === index}
            />
          </StyledLink>
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
  margin: 0 auto;
  bottom: 0;
  z-index: 3;
  border-radius: 0 0 49px 49px;
  width: 100%;
  background-color: ${color.base["white"]};
  border-top: 1px solid ${color.gray[100]};
`;

const NavWrapper = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-around;
  width: 99%;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
