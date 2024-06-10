import React from "react";
import styled from "styled-components";
import iPhone15ProInner from "assets/global/iPhone15_Pro_Inner.png";

function Screen({ children, bgcolor }) {
	return <Container bgcolor={bgcolor}>{children}</Container>;
};

export default Screen;

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.bgcolor};
	position: relative;
	border-radius: 49px;
	padding: 47px 0 0;
	background-image: url(${iPhone15ProInner});
`;
