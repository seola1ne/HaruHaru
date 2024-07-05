import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Logo from "assets/global/Logo.png";
import Footer from 'components/Common/Footer';
import color from 'styles/color';
import font from 'styles/font';
import ArrowLeft from "assets/icon/arrow-left.png";
import WritingIllust from 'assets/global/writing-illust.png';
import { useParams, useNavigate } from 'react-router-dom';
import ContentItem from 'components/ContentItem';
import talkData from 'data/talkData';
import { Link } from 'react-router-dom';
import { db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';

function TalkAnswerById() {
  const userId = sessionStorage.getItem('userId'); // 세션 스토리지에서 사용자 ID 가져오기
  const { id } = useParams();
  const talk = talkData.find(talk => talk.id === parseInt(id));
  
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnswer = async () => {
      try {
        const numericId = parseInt(id); // 숫자 형식의 ID 사용
        const docRef = doc(db, 'TalkAnswers', numericId.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setAnswer(docSnap.data().answer);
        } else {
          setAnswer('답변이 존재하지 않습니다.');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        setAnswer('답변을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnswer();
  }, [id, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout bgcolor={color.gray[50]}>
      <Screen>
        <AnswerPageBox>
          <TitleBox>
            <img className="logo" src={Logo} alt="하루하루" />
            <StyledLink to="/talk">
              <img className="arrow" src={ArrowLeft} alt="돌아가기"/>
              1문 1답
            </StyledLink>
          </TitleBox>
          <TalkBox>
            <ContentItem
              title={talk.content}
              createDate={talk.createDate}
              color={talk.color}
              emoji={talk.emoji}
            />
            <AnswerBox>
              {answer}
            </AnswerBox>
          </TalkBox>
        </AnswerPageBox>
        <IllustImg src={WritingIllust} />
        <Footer selectedPage={0}/>
      </Screen>
    </Layout>
  );
}

export default TalkAnswerById;


const AnswerPageBox = styled.div`
    width: 100%;
    padding: 3.75rem 2rem;
    overflow: auto;

    p {
        margin: 0;
    }

    .box-title {
      ${font.H1};
    }
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.87rem;
    ${font.H1};
    

    margin-bottom: 1.88rem;

    .logo {
      width: 6.75rem;
    }

    .arrow {
      width: 1.5rem;
      height: 1.5rem;

      &:hover {
        cursor: pointer;
      }
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.38rem;
    color: ${color.base['black']};
    text-decoration: none;
`;

const TalkBox = styled.div`
    width: 20.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.37rem;
`;

const AnswerBox = styled.div`
  margin-top: 20px;
  color: ${color.gray[800]};
  white-space: pre-wrap;
`;

const IllustImg = styled.img`
  position: absolute;
  bottom: 150px;
  right: 0;
  width: 300px;
  height: auto;
`;

