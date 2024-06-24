import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import { Link } from 'react-router-dom';
import Logo from "assets/global/Logo.png";
import font from 'styles/font';
import PageTitle from 'components/Common/PageTitle';
import Footer from 'components/Common/Footer';

function Question() {
    return (
        <Layout>
            <Screen>
                <QuestionPageBox>
                <TitleBox>
                    <img className="logo" src={Logo} alt="하루하루" />
                    <PageTitle title="오늘의 질문이에요!" subTitle="어떤 질문에 답해 볼까요?" />
                </TitleBox>
                </QuestionPageBox>
                <Footer />
            </Screen>
        </Layout>
    )
}

export default Question;

const QuestionPageBox = styled.div`
    padding: 4.19rem 2.19rem 0rem 2.19rem;
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.87rem;

    margin-bottom: 0.88rem;

    .logo {
        width: 6.75rem;
    }
`;