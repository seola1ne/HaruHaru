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

function QuestionAnswer() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const answers = [
        {
            id: 1,
            question: "생일 선물로 받고 싶은 것은?",
            emoji: "🎁",
            answer: "답변 부분",
            date: "20240515"
        },
        {
            id: 2,
            question: "해 보고 싶은 여행은?",
            emoji: "✈️",
            answer: "답변 부분",
            date: "20240515"
        },
        {
            id: 3,
            question: "가장 듣고 싶은 말은?",
            emoji: "💬",
            answer: "답변 부분",
            date: "20240515"
        }
    ];

    return (
        <Layout bgcolor={color.gray[50]}>
            <Screen>
                <AnswerPageBox>
                    <TitleBox>
                        <img className="logo" src={Logo} alt="하루하루" />
                        <StyledLink to="/storage">
                        <img className="arrow" src={ArrowLeft} alt="돌아가기"/>
                        1문 1답
                        </StyledLink>
                    </TitleBox>
                    <QuestionList>
                        {answers.map((question, index) => (
                            <AnswerItem
                                key={question.id}
                                id={question.id}
                                title={question.question}
                                emoji={question.emoji}
                                answer={question.answer}
                                date={question.date}
                                isActive={activeIndex === index}
                                onClick={() => handleQuestionClick(index)}
                            />
                        ))}
                    </QuestionList>
                </AnswerPageBox>
                <Footer />
            </Screen>
        </Layout>
    )
}

export default QuestionAnswer;

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

const QuestionList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;