import { useState, useEffect } from 'react';
import { Container, Header, Logo, Body } from './components/Page1Style';
import { Link } from 'react-router-dom';
import PageButton from './components/Share/PageButton';
import Login from './components/Share/Login';
import Member from './components/Share/Member';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Footer from './components/Share/Footer';
import ToTop from './components/Page1/ToTop';

function Page8() {
  const [records, setRecords] = useState([]);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const [rating, setRating] = useState('');
  const [showRatingInput, setShowRatingInput] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      const decodedToken = jwtDecode(storedToken);
      setUsername(decodedToken.username);
    }
  }, []);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          window.location.href = '/login';
          return;
        }

        const headers = {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        };

        const response = await axios.get('http://localhost:3000/userRecord', {
          headers,
        });

        setRecords(response.data);
      } catch (error) {
        console.error('시청 기록을 가져오는 중 오류 발생:', error);
      }
    };

    fetchRecords();
  }, []);

  const openRatingInput = (movie) => {
    setSelectedMovie(movie);
    setShowRatingInput(true);
  };

  const submitRating = async () => {
    try {
      const payload = {
        title: selectedMovie.title,
        rating: rating,
      };

      await axios.post('http://localhost:3000/rating', payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // 평점 입력창 숨기기
      setShowRatingInput(false);

      // 추가적인 상태 업데이트나 UI 반영 로직 (예: 평점 목록 업데이트)
    } catch (error) {
      console.error('평점 제출 중 오류 발생:', error);
    }
  };

  return (
    <Container>
      <Header>
        <Logo>
          <Link to="/">
            <img
              src="/logo2.png"
              alt="Logo"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </Logo>
        <PageButton />
        {token ? <Member /> : <Login />}
      </Header>

      <Body>
        <div style={{ height: '100vh' }}>
          <div
            style={{
              position: 'absolute',
              marginTop: '20vh',
              overflow: 'auto',
              height: '60vh',
              width: '300px',
              overflowY: 'scroll',
            }}
          >
            {records.map((record) => (
              <div key={record.title} style={{ width: '210px' }}>
                <img
                  style={{ width: '200px', height: '200px' }}
                  src={BASE_IMG_URL + record.poster_path}
                  alt="Movie Poster"
                />
                <p>
                  <span>{record.title}</span>
                  <button onClick={() => openRatingInput(record)}>평점</button>
                </p>
                {showRatingInput && selectedMovie === record && (
                  <div>
                    <input
                      type="number"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      min="0"
                      max="5"
                    />
                    <button onClick={submitRating}>제출</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Body>
      <Footer />
      <ToTop />
    </Container>
  );
}

export default Page8;
