import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${props => props.image}), #1c1c1c;
  height: 80vh;
  background-size: 100%, cover;
  background-position: center, center;
  width: 100%;
  position: relative;
  opacity: 0.8;
  & > div {
    position: absolute;
    max-width: 500px;
    bottom: 2rem;
    margin-left: 2rem;

    h2 {
      color: white;
      font-family: 'Noto Sans KR', sans-serif;
    }

    p {
      color: white;
      font-size: 1rem;
      font-family: 'Noto Sans KR', sans-serif;
    }
  }
`;

const MainImage = ({ image, title, text }) => {
  return (
    <ImageContainer image={image} >
      <div>
        <h2 style={{fontSize:'1.7vw'}}>{title}</h2>
        <p style={{fontSize:'1.2vw'}}>{text}</p>
      </div>
    </ImageContainer>
  );
};

export default MainImage;
