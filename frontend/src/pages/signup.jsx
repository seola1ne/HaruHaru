import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Input from "components/Common/Input";
import Button from 'components/Common/Button';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "assets/global/Logo.png";
import font from 'styles/font';
import HomeIndicatorImg from "assets/global/Home_Indicator.png";
import { useState } from 'react';

import { doc, getFirestore, collection, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userBirthday, setUserBirthday] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !userId || !userPassword || !userBirthday) {
      setError('입력되지 않은 정보가 있어요!');
      return;
    }

    try {
      await setDoc(doc(db, 'Users', userId), {
        birthday: userBirthday,
        name: userName,
        password: userPassword,
      });
      console.log('Document written with ID: ', userId);
      sessionStorage.setItem('userId', userId); // 사용자 ID를 세션 스토리지에 저장
      navigate('/question');
    } catch (error) {
      if (error.code === 'already-exists') {
        setError('이미 사용 중인 아이디예요. 다른 아이디를 입력해 주세요.');
      } else {
        console.error('Error adding document: ', error);
        setError('회원가입 중 오류가 발생했어요. 잠시 후 다시 시도해 주세요.');
      }
    }
  };

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

            <form onSubmit={handleSubmit}>
              <InputList>
                <Input
                  id="user-name"
                  label="이름"
                  placeholder="이름을 입력해 주세요."
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Input
                  id="user-id"
                  label="아이디"
                  placeholder="아이디를 입력해 주세요."
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <Input
                  id="user-password"
                  label="비밀번호"
                  placeholder="비밀번호를 입력해 주세요."
                  type="password"
                  required
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
                <Input
                  id="user-birthday"
                  label="생년월일"
                  placeholder="생년월일을 입력해 주세요. (Ex. 20000101)"
                  required
                  value={userBirthday}
                  onChange={(e) => setUserBirthday(e.target.value)}
                />
              </InputList>

              {error && <ErrorMessage>{error}</ErrorMessage>}

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                다음
              </Button>
            </form>
          </InputAreaBox>
          <HomeIndicator src={HomeIndicatorImg} />
        </SignUpPageBox>
      </Screen>
    </Layout>
  );
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

const ErrorMessage = styled.p`
  ${font.p3};
  color: red;
  text-align: center;
`;