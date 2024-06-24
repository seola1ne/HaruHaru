import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

function QuestionItem({contents, createDate, answerDate, emoji, color}) {
    return (
        <ItemBox>
            <Title>
                Q. {contents}
            </Title>
            <EmojiBox color={color}>
                <EmojiIcon>{emoji}</EmojiIcon>
            </EmojiBox>
        </ItemBox>
    )
}

export default QuestionItem;

const ItemBox = styled.div`
    width: 20rem;
    height: 7.3125rem;
    border-radius: 0.625rem;
    border: 1px solid ${color.gray[100]};
    background-color: ${color.base['white']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
`;

const Title = styled.p`
    ${font.H2};
`;

const EmojiBox = styled.div`
    width: 10.125rem;
    height: 10.125rem;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const EmojiIcon = styled.p`
    font-size: 1.5rem;
`;