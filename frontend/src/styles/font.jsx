import { css } from "styled-components";

const fontGenerator = (
	weight,
	size,
    color
) => css`
	font-family: "Pretendard";
	font-weight: ${weight};
	font-size: ${size}rem;
	letter-spacing: -0.5px;
    color: ${color};
`;

const font = {
	H1: fontGenerator(700, 1.5, "#000000"),
	H2: fontGenerator(700, 1.25, "#000000"),

    SubTitle: fontGenerator(400, 1, "#8292AA"),

	p1: fontGenerator(400, 1.125, "#000000"),
	p2: fontGenerator(400, 1, "#000000"),
	p3: fontGenerator(400, 0.75, "#000000"),

    p1_bold: fontGenerator(600, 1, "#000000"),
    p2_bold: fontGenerator(600, 0.875, "#000000"),
    p3_bold: fontGenerator(600, 0.75, "#000000"),
    
    button: fontGenerator(400, 1, "#FFFFFF"),
    caption: fontGenerator(500, 0.9, "#000000"),
    placeholder: fontGenerator(300, 0.75, "#A8B3C4"),
    navigator: fontGenerator(600, 0.75, "#A8B3C4"),
};

export default font;