import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import { Container,Header,Logo,Body,Welcome,IdInput,PwInput, LoginButton, Caption} from './components/LoginPageStyle';

function LoginPage() {
    // const [count, setCount] = useState(0)
  
  
    return (
      <Container>
        <Header>
          <Logo>LOGO</Logo>
          <PageButton/>
          <Login/>
        </Header>
  
        <Body>
        <Welcome>Welcome Back</Welcome>
        <IdInput type="text"/>
        <PwInput type="text"/>
        <LoginButton>Log in</LoginButton>
        <Caption>New to number? Create an Account</Caption>
        </Body>
      </Container>
    )
  }
  
  export default LoginPage