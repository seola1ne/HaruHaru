import { styled } from 'styled-components';
import font from 'styles/font';

function PageTitle({ title, subTitle }) {
    return (
        <TitleBox>
            <p className='title'>{title}</p>
            {subTitle && <p className='subTitle'>{subTitle}</p>}
        </TitleBox>
    )
}

export default PageTitle;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    p {
        margin: 0;
    }

    .title {
        ${font.H1};
    }

    .subTitle {
        ${font.SubTitle};
    }
`;