import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Input from "components/Common/Input";
import Button from 'components/Common/Button';
import { Link } from 'react-router-dom';
import Logo from "assets/global/Logo.png";
import font from 'styles/font';
import HomeIndicatorImg from "assets/global/Home_Indicator.png";

function SignUp() {
    return (
        <Layout>
            <Screen>
                <SignUpPageBox>
                    <InputAreaBox>
                        <TitleBox>
                            <img className="logo" src={Logo} alt="하루하루" />
                            <p className="title">
                                안녕하세요!<br /> 회원가입을 진행할게요.
                            </p>
                        </TitleBox>

                        <InputList>
                            <Input id="user-name" label="이름" placeholder="이름을 입력해 주세요." />
                            <Input id="user-id" label="아이디" placeholder="아이디를 입력해 주세요." />
                            <Input id="user-password" label="비밀번호" placeholder="비밀번호를 입력해 주세요." type="password" />
                            <Input id="user-birthday" label="생년월일" placeholder="생년월일을 입력해 주세요. (Ex. 20000101)" />
                        </InputList>


                        <Link to="/question">
                            <Button variant="primary">다음</Button>
                        </Link>
                    </InputAreaBox>
                    <HomeIndicator src={HomeIndicatorImg} />
                </SignUpPageBox>
            </Screen>
        </Layout>
    )
}

export default SignUp;

const SignUpPageBox = styled.div`
    max-width: 393px;
    max-height: 852px;

    display: flex;
    flex-direction: column;
`;

const InputAreaBox = styled.div`
    display: flex;
    flex-direction: column;

    padding: 6.25rem 2.5rem 4.19rem 2.5rem;
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 1rem;

    .logo {
        width: 6.75rem;
    }

    .title {
        ${font.H2};
    }
`;

const InputList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
`;

const HomeIndicator = styled.img`
    width: 100%;
    height: 100%;
    bottom: 0;
`;
