import React from 'react';
import styled from "styled-components";
import { FaArrowCircleUp } from 'react-icons/fa';
import { useState,useEffect,useRef } from 'react'; // Import useEffect and useState
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

  /* 초기에 숨기기 */
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
`;


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const ToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollToTopButton onClick={scrollToTop}  isVisible={isVisible}>
      <FaArrowCircleUp size="2em" color="#898FC0" />
    </ScrollToTopButton>
  );
};

export default ToTop;
