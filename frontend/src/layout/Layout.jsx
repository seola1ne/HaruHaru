import styled from "styled-components";
import iPhoneMockup from 'assets/global/iPhone15_Pro.png';
import color from "styles/color";


function Layout({ children, bgcolor }) {
	return (
	  <Container>
		<Main>
		  <Mockup src={iPhoneMockup} />
		  <Screen bgcolor={bgcolor}>{children}</Screen>
		</Main>
	  </Container>
	);
  }  

export default Layout;

const Container = styled.div`
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 120px;

	background-color: ${color.base['white']};
`;

const Main = styled.main`
	margin: 0;
	padding: 0;
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;

const Mockup = styled.img`
	height: 885px;
	width: 432px;
	position: absolute;
	z-index: 1;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const Screen = styled.div`
	width: 393px;
	height: 49.88rem;
	position: absolute;
	z-index: 2;
	top: 70px;
	background-color: ${props => `${props.bgcolor}`};
	border-radius: 0 0 56px 56px;
`;