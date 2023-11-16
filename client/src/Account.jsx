import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import { Container,Header,Logo,Body} from './components/AccountStyle';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const Name1Box = styled.input`
    position: absolute;
    width: 295px;
    height: 52px;
    left: 370px;
    top: 158px;
    background: #D9D9D9;
    color: black;
    border-radius: 5px;
    font-size: 20px;
    text-indent: 10px;
`;

const Name2Box = styled.input`
    position: absolute;
    width: 295px;
    height: 52px;
    left: 680px;
    top: 158px;
    background: #D9D9D9;
    color: black;
    border-radius: 5px;
    font-size: 20px;
    text-indent: 10px;
`;

const EmailBox = styled.input`
    position: absolute;
    width: 605px;
    height: 52px;
    left: 370px;
    top: 248px;
    background: #D9D9D9;
    color: black;
    border-radius: 5px;
    font-size: 20px;
    text-indent: 10px;
`;

const IdBox = styled.input`
    position: absolute;
    width: 605px;
    height: 52px;
    left: 370px;
    top: 340px;
    background: #D9D9D9;
    color: black;
    border-radius: 5px;
    font-size: 20px;
    text-indent: 10px;
`;

const PwBox = styled.input`
    position: absolute;
    width: 605px;
    height: 52px;
    left: 370px;
    top: 431px;
    background: #D9D9D9;
    color: black;
    border-radius: 5px;
    font-size: 20px;
    text-indent: 10px;
`;

const CreateAccount = styled.button`
    position: absolute;
    width: 605px;
    height: 72px;
    left: 370px;
    top: 522px;
    background: #898FC0;
    border-radius: 5px;
    font-size: 20px;
`;


function Account() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // 서버로 보낼 데이터
        const userData = { firstName, lastName, email, id, password };

        // axios를 사용해 서버에 POST 요청 보내기
        axios.post('?', userData)
            .then(response => {
                console.log('회원가입 성공:', response.data);
                // 성공적인 회원가입 후 처리
            })
            .catch(error => {
                console.error('회원가입 오류:', error);
                // 오류 처리
            });
    };

    return (
        <Container>
            <Header>
                <Logo><img width={'170px'} height={'110px'} src='/logo.png'></img></Logo>
                <PageButton/>
                <Login/>
            </Header>

            <Body>
                <Name1Box 
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <Name2Box 
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <EmailBox 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <IdBox 
                    type="text"
                    placeholder="ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <PwBox 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <CreateAccount onClick={handleSubmit}>
                    Create Account
                </CreateAccount>
            </Body>
        </Container>
    )
}

export default Account;