import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

function QuestionItem({id, contents, createDate, answerDate, emoji, color, onClick}) {
    const handleClick = () => {
        onClick(id);
    };

    return (
        <ItemBox color={color} onClick={handleClick}>
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
    border-radius: 0.625rem;
    width: 17rem;
    min-height: 6.6rem;
    border: 2px solid ${color.gray[200]};
    background-color: ${color.base['white']};
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    overflow: hidden;
    position: relative;

    &:hover {
        cursor: pointer;
        background-color: ${props => `${props.color}30`};
        border-color: ${props => `${props.color}`};
        transition: 0.2s ease;
    }
`;

const EmojiBox = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: ${props => props.color};
    position: absolute;
    bottom: -2.5rem;
    right: -1rem;
    text-align: center;
    z-index: 1;
`;

const EmojiIcon = styled.p`
    font-size: 2.4rem;
    margin-top: 1.5rem;
`;

const Title = styled.p`
    ${font.H2};
    z-index: 2;
`;