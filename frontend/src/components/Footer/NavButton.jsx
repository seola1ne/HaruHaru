import React from "react";
import styled from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

function NavButton ({ index, text, icon, isActive}){
	const labelStyle = {
		color: isActive ? color.black : color.gray500,
	};

	return (
		<Container>
			<Icon src={isActive ? icon[0] : icon[1]} />
			<Label style={labelStyle}>{text}</Label>
		</Container>
	);
};

export default NavButton;

const Container = styled.div`
	width: 79px;
	height: 56px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4px;
	cursor: pointer;
`;

const Label = styled.p`
	${font.p2}
`;

const Icon = styled.img`
	width: 36px;
	height: 36px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
