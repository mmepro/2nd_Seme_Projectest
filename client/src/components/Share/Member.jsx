import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginInfo = styled.div`
  position: fixed;
  width: 79px;
  height: 3px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #f4f3f3;
`;

function Member() {
  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  }

  return (
    <>
      <LoginInfo style={{ left: '75vw', top: '2vh' }}>
        {localStorage.username} 님
      </LoginInfo>

      <Link to="/page5">
        <LoginInfo style={{ left: '80vw', top: '2vh' }}>내 정보</LoginInfo>
      </Link>

      <Link to="/">
        <LoginInfo style={{ left: '85vw', top: '2vh', width: '5vw' }}>
          <button style={{ background: 'none' }} onClick={signOut}>
            로그아웃
          </button>
        </LoginInfo>
      </Link>
    </>
  );
}

export default Member;
