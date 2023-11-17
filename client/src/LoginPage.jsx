import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import { Container,Header,Logo,Logo1,Body,Welcome,BoldText,IdInput,PwInput,InputGroup, LoginButton, Caption} from './components/LoginPageStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function LoginPage() {
    // const [count, setCount] = useState(0)
  
  
    return (
      <Container>
        <Header>
        <Logo>
          <img width={'170px'} height={'120px'} src='/logo.png'></img>
        </Logo>
          <PageButton/>
          <Login/>
        </Header>
  
        <Body>
        <Logo1>
          <img width={'170px'} height={'120px'} src='/logo2.png' ></img>
        </Logo1>
        <Welcome>
          반갑습니다.{'\n'}
          <span>TGI의 <BoldText>MOVIEPARTNER </BoldText>입니다. </span>
        </Welcome>  
        <InputGroup>
          <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '415px', top: '295px' }} />
          <IdInput type="text" placeholder="아이디를 입력해 주세요" />
        </InputGroup>

        <InputGroup>
          <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '415px', top: '360px' }} />
          <PwInput type="password" placeholder="비밀번호를 입력해 주세요" />
        </InputGroup>
        <LoginButton>로그인하기</LoginButton>
        <Caption>
          새로운 회원이신가요? |&nbsp; <Link to="/signup"> 회원가입</Link>
        </Caption>
        </Body>
      </Container>
    )
  }
  
  export default LoginPage