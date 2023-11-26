import React from 'react';
import styled from "styled-components";
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transition: transform 0.3s ease; // 여기서 transition을 정의

  &:hover {
    cursor: pointer;
    transform: scale(1.2); // 호버될 때 확대 효과 적용
  }
`;


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const ToTop = () => {
  return (
    <ScrollToTopButton onClick={scrollToTop}>
      <FaArrowCircleUp size="2em" color="#898FC0" />
    </ScrollToTopButton>
  );
};

export default ToTop;
