import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Page1ScrollButton = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  background: #434b69;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  opacity: 80%;
`;

function Page1Scroll() {
  const [count, setCount] = useState(0);

  const scrollRight = () => {
    var scrollableDiv = document.getElementById('scroll');
    scrollableDiv.scrollLeft += 291;
    setCount(count + 1);
  };

  const scrollLeft = () => {
    var scrollableDiv = document.getElementById('scroll');
    scrollableDiv.scrollLeft -= 291;
    setCount(count - 1);
  };

  return (
    <>
      {count > 0 && (
        <Page1ScrollButton
          style={{ left: '82px', top: '337px' }}
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faAngleLeft} color="black" />
        </Page1ScrollButton>
      )}

      {count < 4 && (
        <Page1ScrollButton
          style={{ left: '1143px', top: '337px' }}
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faAngleRight} color="black" />
        </Page1ScrollButton>
      )}
    </>
  );
}

export default Page1Scroll;
