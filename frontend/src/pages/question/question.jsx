import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import { useNavigate } from 'react-router-dom';
import Logo from "assets/global/Logo.png";
import PageTitle from 'components/Common/PageTitle';
import Footer from 'components/Common/Footer';
import QuestionItem from 'components/QuestionItem';
import color from 'styles/color';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';

function Question() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const questionsQuery = query(collection(db, 'Questions'));
                const questionsSnapshot = await getDocs(questionsQuery);
                
                const questionsData = questionsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                // Log the parsed data
                console.log("Questions Data:", questionsData);
                
                setQuestions(questionsData);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const handleQuestionItemClick = (id) => {
        navigate(`/question/${id}/write`);
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
                <QuestionPageBox>
                    <TitleBox>
                        <img className="logo" src={Logo} alt="하루하루" />
                        <PageTitle title="오늘의 질문이에요!" subTitle="어떤 질문에 답해 볼까요?" />
                    </TitleBox>
                    <ItemsBox>
                        {questions.map(question => (
                            <QuestionItem
                                key={question.id}
                                id={question.id}
                                contents={question.content}
                                color={question.color}
                                emoji={question.emoji}
                                onClick={() => handleQuestionItemClick(question.id)}
                            />
                        ))}
                    </ItemsBox>
                </QuestionPageBox>
                <Footer selectedPage={0} />
            </Screen>
        </Layout>
    );
}

export default Question;

const QuestionPageBox = styled.div`
    width: 100%;
    padding: 4.19rem 2.19rem 0rem 2.19rem;
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.87rem;

    margin-bottom: 1.88rem;

    .logo {
        width: 6.75rem;
    }
`;

const ItemsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.88rem;
`;