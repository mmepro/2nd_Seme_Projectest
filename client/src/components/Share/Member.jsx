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
  // const Data = () => {

  // }

  return (
    <>
      <LoginInfo style={{ left: '80vw', top: '2vh' }}>회원이지롱</LoginInfo>

      <Link to="/page5">
        <LoginInfo style={{ left: '1145px', top: '15px' }}>내 정보</LoginInfo>
      </Link>
    </>
  );
}

export default Member;
