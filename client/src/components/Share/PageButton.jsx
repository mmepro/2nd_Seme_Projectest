import styled from "styled-components";
import { Link } from 'react-router-dom';

const PageButtonInfo = styled.div`
  position: fixed;
  width: 11.25rem; // Assuming 1rem = 16px, equivalent to 180px
  height: 1.56rem; // Assuming 1rem = 16px, equivalent to 25px
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2.8vh; // Adjusted for 24px
  line-height: 1.81rem; // Adjusted for 29px
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

function PageButton() {
  return (
    <>
      <Link to="/">
        <PageButtonInfo id="page1" style={{ left: '25.125vw', top: '4.583vh' }}>박스오피스</PageButtonInfo>
      </Link>
      <Link to="/page2">
        <PageButtonInfo id="page2" style={{ left: '39.375vw', top: '4.583vh' }}>상영작 추천</PageButtonInfo>
      </Link>
      <Link to="/page5">
        <PageButtonInfo id="page5" style={{ left: '54.625vw', top: '4.583vh' }}>내게 맞는 영화</PageButtonInfo>
      </Link>
    </>
  );
}

export default PageButton;