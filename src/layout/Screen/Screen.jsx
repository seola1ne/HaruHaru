import React from "react";
import styled from "styled-components";

function Screen({ children, bgcolor }) {
	return <Container bgcolor={bgcolor}>{children}</Container>;
};

export default Screen;

const Container = styled.div`
	width: 24.5625rem;
	height: 49.875rem;
	background-color: ${(props) => props.bgcolor};
	position: relative;
	border-radius: 49px;
`;
