import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Logo from "assets/global/Logo.png";
import PageTitle from 'components/Common/PageTitle';
import Footer from 'components/Common/Footer';
import color from 'styles/color';
import font from 'styles/font';
import { Link } from 'react-router-dom';

function Storage() {
    return (
        <Layout bgcolor={color.gray[50]}>
            <Screen>
                <StoragePageBox>
                <TitleBox>
                    <img className="logo" src={Logo} alt="하루하루" />
                    <PageTitle title="원설아 님의 기록장이에요!" subTitle="원설아 님만의 기록들을 확인해 봐요." />
                </TitleBox>
                <ItemsBox>
                    <StyledLink to="/storage/question">
                        <StorageItem>
                                <Col>
                                    <p className="item-title">1문 1답</p>
                                    <p className="item-subtitle">하루에 하나씩 주어지는 <br />질문에 답변한 기록들이에요.</p>
                                </Col>
                                <p className="item-icon">📃</p>
                        </StorageItem>
                    </StyledLink>
                    <StyledLink to="/storage/talk">
                        <StorageItem>
                            <Col>
                                <p className="item-title">이야기</p>
                                <p className="item-subtitle">다양한 이야기를 읽고 남긴<br/>원설아 님만의 생각이에요.</p>
                            </Col>
                            <p className="item-icon">🤔</p>
                        </StorageItem>
                    </StyledLink>
                </ItemsBox>
                </StoragePageBox>
                <Footer selectedPage={2}/>
            </Screen>
        </Layout>
    )
}

export default Storage;

const StoragePageBox = styled.div`
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
    align-items: center;
    gap: 0.88rem;
`;

const StorageItem = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 20rem;
    height: 8.3rem;
    border-radius: 1.25rem;
    border: 1px solid ${color.gray[100]};
    background-color: ${color.base['white']};

    p {
        margin: 0;
    }
    .item-title {
        ${font.H2};
    }

    .item-subtitle {
        ${font.p3};
        color: ${color.gray[500]};
        line-height: 140%;
    }

    .item-icon {
        font-size: 2.5rem;
    }

    &:hover {
        cursor: pointer;
        background-color: ${color.gray[50]};
        border-color: ${color.gray[200]};
        transition: 0.2s ease;
    }
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    
`