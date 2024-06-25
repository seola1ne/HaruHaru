import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

function ProfileItem({img, id, name, birthday}) {
    function formatBirthday(birthday) {
        const year = birthday.slice(0, 4);
        const month = birthday.slice(4, 6);
        const day = birthday.slice(6, 8);
        return `${year}. ${month}. ${day}`;
    }

    const formattedBirthday = formatBirthday(birthday);

    return (
        <ItemBox>
            <ProfileImg src={img} alt="프로필 이미지"/>
            <Col>
                <Row>
                    <p className="user-name">{name}</p>
                    <p className="user-id">@{id}</p>
                </Row>
                <p className="user-birthday">생일 {formattedBirthday}</p>
            </Col>
        </ItemBox>
    )
}

export default ProfileItem;

const ItemBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.88rem;
    width: 18.75rem;

    border-radius: 1.25rem;
    border: 1px solid ${color.gray[100]};
    background-color: ${color.base['white']};

    padding: 1.5rem 1.25rem;

    p {
        margin: 0;
        word-break: keep-all;
    }

    .user-name {
        ${font.p1_bold};
    }

    .user-id {
        ${font.p3};
        color: ${color.gray[400]};
    }

    .user-birthday {
        ${font.p3};
    }

    &:hover {
        cursor: pointer;
    }
`

const ProfileImg = styled.img`
    width: 5.3125rem;
    height: 5.3125rem;
    border-radius: 50%;
`;

const Row = styled.div`
    display: flex;
    gap: 0.25rem;
    align-items: center;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;