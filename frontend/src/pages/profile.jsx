import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Logo from "assets/global/Logo.png";
import Footer from 'components/Common/Footer';
import color from 'styles/color';
import font from 'styles/font';
import ProfileItem from 'components/Profile/ProfileItem';
import Column from 'components/Common/Flex/Column';
import userData from 'data/userData';
import keywordData from 'data/keywordData';
import KeywordItem from 'components/Profile/KeywordItem';
import Button from 'components/Common/Button';
import Row from 'components/Common/Flex/Row';

function Profile() {
    const userId = "seola1ne";
    const user = userData.find(u => u.id === userId);
    const keywordInfo = keywordData.find(data => data.userId === user.id);

    return (
        <Layout bgcolor={color.gray[50]}>
            <Screen>
                <ProfilePageBox>
                    <TitleBox>
                        <img className="logo" src={Logo} alt="하루하루" />
                    </TitleBox>
                    <BoxLayout>
                        <ProfileBox>
                            <p className="box-title">프로필</p>
                            <ProfileItem
                                img="https://www.studiopeople.kr/common/img/default_profile.png"
                                id={user.id}
                                name={user.name}
                                birthday={user.birthday}
                            />
                        </ProfileBox>

                        <KeywordBox>
                            <Column gap={0.2}>
                                <p className="box-title">{user.name} 님의 키워드</p>
                                <p className="box-subtitle">현재까지의 기록을 바탕으로 추출된 키워드예요.</p>
                            </Column>
                            <KeywordItem keywords={keywordInfo.keywords} />
                        </KeywordBox>
                    </BoxLayout>
                </ProfilePageBox>
                <Footer />
            </Screen>
        </Layout>
    )
}

export default Profile;

const ProfilePageBox = styled.div`
    width: 100%;
    padding: 4.19rem 2.19rem 0rem 2.19rem;
    overflow: auto;

    p {
        margin: 0;
    }

    .box-title {
        margin-left: 1rem;
        ${font.H1};
    }

    .box-subtitle {
        margin-left: 1rem;
        color: ${color.gray[500]};
    }
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

const BoxLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.06rem;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`;

const KeywordBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.56rem;
`;
