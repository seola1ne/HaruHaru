import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Logo from "assets/global/Logo.png";
import Subtitle from "assets/global/Subtitle.png";
import Emoji from "assets/global/Splash_Emoji.png";
import Background from "assets/global/Splash_Background.png";
import HomeIndicatorImg from "assets/global/Home_Indicator.png";
import Screen from 'layout/Screen/Screen';
import Button from 'components/Common/Button';
import { Link } from 'react-router-dom';

function Splash() {
  return (
    <Layout>
      <Screen>
        <SplashPageBox>
          <SplashSrcBox>
            <LogoBox>
              <img className="logo" src={Logo} alt="하루하루 로고" />
              <img className="subtitle" src={Subtitle} alt="하루하루 서브 타이틀" />
            </LogoBox>
            <img className="emoji" src={Emoji} alt="하루하루 이모지" />
          </SplashSrcBox>

          <Link to="sign-up">
            <Button variant={"primary"}>시작하기</Button>
          </Link>
          
          <HomeIndicator src={HomeIndicatorImg} />
        </SplashPageBox>
      </Screen>
    </Layout>
  );
}

export default Splash;

const SplashPageBox = styled.div`
  max-width: 393px;
  max-height: 852px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${Background});
`;

const SplashSrcBox = styled.div`
  padding: 9.81rem 2.81rem 13.73rem 2.81rem;
  
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  .emoji {
    width: 304px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  .logo {
    width: 108px;
  }

  .subtitle {
    width: 181px;
  }
`;

const HomeIndicator = styled.img`
  margin-top: 4.19rem;
  bottom: 0;
`;
