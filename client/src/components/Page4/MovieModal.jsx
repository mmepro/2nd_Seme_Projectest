import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  /* overlayStyle 스타일 적용 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;

`;

const ModalContent = styled.div`
  /* contentStyle 스타일 적용 */
  background: #1C1E2C;
  padding: 20px;
  borderRadius: 8px;
  boxShadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  minWidth: 300px;
  maxWidth: 600px;
  margin: 0 20px;
  textAlign: center;
  color: #FFF;
  fontFamily: 'Inter';
`;

const ImageStyle = styled.img`
  /* imageStyle 스타일 적용 */

  maxWidth: 10vw;
  height: auto;
`;

const SynopsisStyle = styled.div`
  /* synopsisStyle 스타일 적용 */
  textAlign: left;
  marginTop: 10px;
  maxHeight: 150px;
  overflowY: auto;
  padding: 10px;
  borderRadius: 5px;
  backgroundColor: #2A2F42;
  boxShadow: inset 0 2px 4px rgba(0,0,0,0.1);
  color: #FFF;
  marginBottom: 10px;
  fontFamily: 'Inter';
`;

const MovieModal = ({ movie, onClose }) => {
    console.log(movie)  
  return (
    <ModalBackdrop>
      <ModalContent>
      <ImageStyle src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
        <h2>{movie.title}</h2>
        <p>평점: {movie.vote_average}</p>
        <SynopsisStyle>
          <h4>줄거리:</h4>
          <p>{movie.overview}</p>
        </SynopsisStyle>
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default MovieModal;
