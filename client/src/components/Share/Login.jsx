import styled from "styled-components";
import { Link } from 'react-router-dom';

const LoginInfo = styled.div`
position: fixed;
width: 10vw;
height: 5vh;
font-family: 'Noto Sans KR', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1.8vh;
line-height: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
color: #F4F3F3;
&:hover {
    color: #f4f3f3;
    text-decoration: underline;
    text-underline-position: under;
    transition: 0.5s;
  }
`;


function Login() {

    // const Data = () => {
        
    // }


    return(
<>
        <Link to="/Login"><LoginInfo style={{left:'80vw',top:'1vh'}}>로그인</LoginInfo></Link>
        <Link to="/signup"><LoginInfo style={{left:'85vw',top:'1vh'}}>회원가입</LoginInfo></Link>
  </>
    )
}

export default Login;