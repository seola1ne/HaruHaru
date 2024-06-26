import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

function KeywordItem({ keywords }) {
    if (!keywords) {
        return null;
    }

    return (
        <KeywordLayout>
            {keywords.map((keyword, index) => (
                <KeywordBox key={index} isSpecial={index % 3 === 2}>
                    #{keyword.replace(/\s/g, '_')}
                </KeywordBox>
            ))}
        </KeywordLayout>
    )
}

export default KeywordItem;

const KeywordLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const KeywordBox = styled.div`
    padding: 0.8rem 1.6rem;
    border-radius: 2rem;
    ${font.p3_bold};
    border: 1px solid ${color.base['black']};
    background-color: ${({ isSpecial }) => isSpecial ? color.base['black'] : color.base['white']};
    color: ${({ isSpecial }) => isSpecial ? color.base['white'] : color.base['black']};

    &:hover {
        cursor: pointer;
        letter-spacing: 0.08rem;
        transition: 0.4s ease;
        background-color: ${({ isSpecial }) => isSpecial ? color.gray[800] : color.gray[100]};
    }
`;
