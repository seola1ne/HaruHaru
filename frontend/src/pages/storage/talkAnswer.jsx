import { useState } from 'react';
import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Logo from "assets/global/Logo.png";
import Footer from 'components/Common/Footer';
import color from 'styles/color';
import font from 'styles/font';
import ArrowLeft from "assets/icon/arrow-left.png";
import { Link } from 'react-router-dom';
import AnswerItem from 'components/AnswerItem';

function TalkAnswer() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleTalkClick = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const answers = [
        {
            id: 1,
            talk: "나와는 의견이 너무 다른 동료와 의견 충돌이 난 상황, 어떻게 해결할까?",
            emoji: "😮",
            answer: "내 의견이 중요한 만큼 상대 의견도 중요하겠지... 상대 의견도 들어보고, 내 의견과 비교해서 장점과 단점은 무엇인지 생각해 볼 것 같다. 수용할 수 있는 의견이라면 수용하고, 아니라면 내 의견을 논리정연하게 정리해서 설득해야 할 듯",
            date: "20240515"
        },
    ];

    const formatDate = (dateString) => {
        if (!dateString || dateString.length !== 8) {
            return 'Invalid Date';
        }

        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);

        return `${year}. ${month}. ${day}.`;
    };

    return (
        <Layout bgcolor={color.gray[50]}>
            <Screen>
                <AnswerPageBox>
                    <TitleBox>
                        <img className="logo" src={Logo} alt="하루하루" />
                        <StyledLink to="/storage">
                        <img className="arrow" src={ArrowLeft} alt="돌아가기"/>
                        이야기
                        </StyledLink>
                    </TitleBox>
                    <TalkList>
                        {answers.map((talk, index) => (
                            <AnswerItem
                                key={talk.id}
                                id={talk.id}
                                emoji={talk.emoji}
                                title={talk.talk}
                                answer={talk.answer}
                                date={formatDate(talk.date)} // 날짜 포맷팅 함수 호출
                                isActive={activeIndex === index}
                                onClick={() => handleTalkClick(index)}
                            />
                        ))}
                    </TalkList>
                </AnswerPageBox>
                <Footer selectedPage={2}/>
            </Screen>
        </Layout>
    )
}

export default TalkAnswer;

const AnswerPageBox = styled.div`
    width: 100%;
    padding: 3.75rem 2rem;
    overflow: auto;

    p {
        margin: 0;
    }

    .box-title {
      ${font.H1};
    }
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.87rem;
    ${font.H1};
    

    margin-bottom: 1.88rem;

    .logo {
      width: 6.75rem;
    }

    .arrow {
      width: 1.5rem;
      height: 1.5rem;

      &:hover {
        cursor: pointer;
      }
    }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.38rem;
  color: ${color.base['black']};
  text-decoration: none;
`;

const TalkList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;