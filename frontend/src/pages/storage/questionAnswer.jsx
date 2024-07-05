import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Logo from "assets/global/Logo.png";
import Footer from 'components/Common/Footer';
import color from 'styles/color';
import font from 'styles/font';
import ArrowLeft from "assets/icon/arrow-left.png";
import { Link } from 'react-router-dom';
import AnswerItem from 'components/AnswerItem';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { Timestamp } from 'firebase/firestore'; // 필요한 경우에만 import

function QuestionAnswer() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestionsAndAnswers = async () => {
            try {
                const questionsQuery = query(collection(db, 'Questions'));
                const answersQuery = query(collection(db, 'QuestionAnswers'));

                const [questionsSnapshot, answersSnapshot] = await Promise.all([
                    getDocs(questionsQuery),
                    getDocs(answersQuery)
                ]);

                const questionsData = questionsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                const answersData = {};
                answersSnapshot.docs.forEach(doc => {
                    const answer = doc.data();
                    answersData[answer.questionId] = {
                        id: doc.id,
                        ...answer
                    };
                });

                console.log("Questions Data:", questionsData);
                console.log("Answers Data:", answersData);

                const combinedData = questionsData.map(question => {
                    const answer = answersData[question.id];
                    return {
                        ...question,
                        answer: answer ? answer.answer : 'No answer',
                        answerDate: answer ? formatDate(answer.answerDate) : 'N/A',
                        createDate: formatDate(question.createDate)
                    };
                });

                console.log("Combined Data:", combinedData);
                setQuestionsAndAnswers(combinedData);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestionsAndAnswers();
    }, []);

    const handleQuestionClick = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const formatDate = (timestamp) => {
        if (!timestamp || !(timestamp instanceof Timestamp)) {
            return 'Invalid Date';
        }
        const dateObj = timestamp.toDate();
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');
        return `${year}. ${month}. ${day}`;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

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
                        {questionsAndAnswers.map((item, index) => (
                            <AnswerItem
                                key={item.id}
                                id={item.id}
                                title={item.content}
                                emoji={item.emoji}
                                answer={item.answer}
                                date={item.answerDate}
                                isActive={activeIndex === index}
                                onClick={() => handleQuestionClick(index)}
                            />
                        ))}
                    </QuestionList>
                </AnswerPageBox>
                <Footer selectedPage={2}/>
            </Screen>
        </Layout>
    );
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