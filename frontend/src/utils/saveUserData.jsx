import { getFirestore, doc, setDoc } from 'firebase/firestore';

/**
 * @param {object} userData - 사용자 정보 객체 { name, id, password, birthday }
 * @returns {Promise<void>} - 저장 작업이 완료되면 resolve되는 Promise
 */
export const saveUserData = async (userData) => {
  const { name, id, password, birthday } = userData;
  const firestore = getFirestore();

  try {
    await setDoc(doc(firestore, 'Users', id), {
      name,
      password,
      birthday,
    });

    console.log('회원가입 성공!');
  } catch (error) {
    console.error('회원가입 실패:', error);
    throw error;
  }
};
