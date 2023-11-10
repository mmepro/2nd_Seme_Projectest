import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Page6ScrollButton = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  background: #434b69;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  opacity: 80%;
`;

function Page6Scroll() {
  const [count, setCount] = useState(0);

  const scrollRight = () => {
    var scrollableDiv = document.getElementById('page6scroll');
    scrollableDiv.scrollLeft += 291;
    setCount(count + 1);
  };

  const scrollLeft = () => {
    var scrollableDiv = document.getElementById('page6scroll');
    scrollableDiv.scrollLeft -= 291;
    setCount(count - 1);
  };

  return (
    <>
      {count > 0 && (
        <Page6ScrollButton
          id='scrollLeft'
          style={{ left: '5px', top: '400px' }}
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faAngleLeft} color="black" />
        </Page6ScrollButton>
      )}

  
        <Page6ScrollButton
          id='scrollRight'
          style={{ left: '1225px', top: '400px' }}
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faAngleRight} color="black" />
        </Page6ScrollButton>
    </>
  );
}

export default Page6Scroll;
