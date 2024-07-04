import { useState } from 'react';
import { styled } from 'styled-components';
import Layout from "layout/Layout";
import Screen from "layout/Screen/Screen";
import Logo from "assets/global/Logo.png";
import Footer from 'components/Common/Footer';
import color from 'styles/color';
import font from 'styles/font';
import ArrowLeft from "assets/icon/arrow-left.png";
import Column from 'components/Common/Flex/Column';
import Button from 'components/Common/Button';
import WritingIllust from 'assets/global/writing-illust.png';
import { useParams } from 'react-router-dom';
import TextArea from 'components/Common/TextArea';
import ContentItem from 'components/ContentItem';
import questionData from 'data/questionData';
import { Link } from 'react-router-dom';
import { db } from '../../../firebase';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';

function QuestionWrite() {
  const userId = sessionStorage.getItem('userId'); // 세션 스토리지에서 사용자 ID 가져오기

  const { id } = useParams();
  const question = questionData.find(question => question.id === parseInt(id));

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const answerId = `${userId}_${id}`;

      await addDoc(collection(db, 'QuestionAnswers'), {
        id: answerId,
        answer: message,
        answerDate: serverTimestamp(),
        questionId: parseInt(id),
        userId: userId
      });

      const questionDocRef = doc(db, 'Questions', id);
      await updateDoc(questionDocRef, {
        answerDate: serverTimestamp()
      });

      alert('답변이 성공적으로 등록되었습니다.');
    } catch (error) {
      console.error('Error writing document: ', error);
      alert('답변 등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <Layout bgcolor={color.gray[50]}>
      <Screen>
        <WritePageBox>
          <TitleBox>
            <img className="logo" src={Logo} alt="하루하루" />
            <StyledLink to="/question">
              <img className="arrow" src={ArrowLeft} alt="돌아가기"/>
              1문 1답
            </StyledLink>
          </TitleBox>
          <WritingBox>
            <ContentItem
              title={question.content}
              createDate={question.createDate}
              color={question.color}
              emoji={question.emoji}
            />
            <Column gap="1.94" as="form" onSubmit={handleSubmit}>
              <TextArea
                name="question"
                value={message}
                onChange={handleChange}
                placeholder="답변을 입력해 주세요."
                rows={5}
                required
              />
              <Button variant="primary" type="submit" onClick={handleSubmit}>등록</Button>
            </Column>
          </WritingBox>
        </WritePageBox>
        <IllustImg src={WritingIllust} />
        <Footer selectedPage={0}/>
      </Screen>
    </Layout>
  );
}
export default QuestionWrite;


const WritePageBox = styled.div`
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
`

const WritingBox = styled.div`
  width: 20.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.37rem;
`;

const IllustImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 9rem;
  z-index: 1;
`;