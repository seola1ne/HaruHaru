import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import { useNavigate } from 'react-router-dom';
import Logo from "assets/global/Logo.png";
import PageTitle from 'components/Common/PageTitle';
import Footer from 'components/Common/Footer';
import QuestionItem from 'components/QuestionItem';
import color from 'styles/color';
import questionData from 'data/questionData';

function Question() {
    const navigate = useNavigate();

    const handleQuestionItemClick = (id) => {
        navigate(`/question/${id}/write`);
    };

    return (
        <Layout bgcolor={color.gray[50]}>
            <Screen>
                <QuestionPageBox>
                <TitleBox>
                    <img className="logo" src={Logo} alt="하루하루" />
                    <PageTitle title="오늘의 질문이에요!" subTitle="어떤 질문에 답해 볼까요?" />
                </TitleBox>
                <ItemsBox>
                    {questionData.map(question => (
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
                <Footer />
            </Screen>
        </Layout>
    )
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