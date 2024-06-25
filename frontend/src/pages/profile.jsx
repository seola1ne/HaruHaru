import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Logo from "assets/global/Logo.png";
import PageTitle from 'components/Common/PageTitle';
import Footer from 'components/Common/Footer';
import color from 'styles/color';
import font from 'styles/font';
import ProfileItem from 'components/Profile/ProfileItem';
import Column from 'components/Common/Flex/Column';

function Profile() {
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
                            img="https://i.pinimg.com/736x/bb/b5/be/bbb5beaf4f7c3ea66bd912d0e3f9f2e5.jpg"
                            id="seola1ne"
                            name="원설아"
                            birthday="20060915"
                        />
                    </ProfileBox>
                    {/* <KeywordBox>
                        <Column gap={0.2}>
                            <p className="box-title">원설아 님의 키워드</p>
                            <p className="box-subtitle">현재까지의 기록을 바탕으로 추출된 키워드예요.</p>
                        </Column>
                        <Column gap={1.56}>
                            
                        </Column>
                        <Column gap={1.25}>
                            
                        </Column>
                    </KeywordBox> */}
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

    p {
        margin: 0;
    }
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.87rem;

    margin-bottom: 1.88rem;
    margin-left: 1rem;

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

    .box-title {
        margin-left: 1rem;
        ${font.H1};
    }
`;

const KeywordBox = styled.div`
    
`;