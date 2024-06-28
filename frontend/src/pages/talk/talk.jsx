import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import { useNavigate } from 'react-router-dom';
import Logo from "assets/global/Logo.png";
import PageTitle from 'components/Common/PageTitle';
import Footer from 'components/Common/Footer';
import TalkItem from 'components/TalkItem';
import color from 'styles/color';
import talkData from 'data/talkData';

function Talk() {
    const navigate = useNavigate();

    const handleTalkItemClick = (id) => {
        navigate(`/talk/${id}/write`);
    };

    return (
        <Layout bgcolor={color.gray[50]}>
            <Screen>
                <TalkPageBox>
                <TitleBox>
                    <img className="logo" src={Logo} alt="하루하루" />
                    <PageTitle title="오늘의 이야깃거리예요!" subTitle="원설아 님의 의견을 들려주세요." />
                </TitleBox>
                <ItemsBox>
                    {talkData.map(talk => (
                        <TalkItem
                            key={talk.id}
                            id={talk.id}
                            writer={talk.writer}
                            contents={talk.content}
                            color={talk.color}
                            onClick={() => handleTalkItemClick(talk.id)}
                        />
                    ))}
                </ItemsBox>
                </TalkPageBox>
                <Footer />
            </Screen>
        </Layout>
    )
}

export default Talk;

const TalkPageBox = styled.div`
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