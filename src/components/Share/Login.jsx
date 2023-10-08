import styled from "styled-components";
import { Link } from 'react-router-dom';

const LoginInfo = styled.div`
position: absolute;
width: 79px;
height: 43px;
font-family: 'Noto Sans KR', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
justify-content: center;

color: #F4F3F3;
`;


function Login() {

    // const Data = () => {
        
    // }


    return(
<>
        <Link to="/"><LoginInfo style={{left:'987px',top:'15px'}}>로그인</LoginInfo></Link>
        <Link to="/page2"><LoginInfo style={{left:'1066px',top:'15px'}}>회원가입</LoginInfo></Link>
        <Link to="/page3"><LoginInfo style={{left:'1145px',top:'15px'}}>내 정보</LoginInfo></Link>
  </>
    )
}

export default Login;