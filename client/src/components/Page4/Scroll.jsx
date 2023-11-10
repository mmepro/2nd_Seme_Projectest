import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Page4ScrollButton = styled.button`
  position: absolute;
  width: 55px;
  height: 55px;
  background: #434b69;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  opacity: 80%;
  text-align: center;
`;

function Page4Scroll() {

    const scrollTop = () => {
        var scrollableDiv = document.getElementById('scroll');
        scrollableDiv.scrollTop -= 50;
    }

    const scrollDown = () => {
        var scrollableDiv = document.getElementById('scroll');
        scrollableDiv.scrollTop += 50;
    }

    return(
        <>
        <Page4ScrollButton style={{left:'360px', top:'80px'}} onClick={scrollTop}>
        <FontAwesomeIcon icon={faAngleUp} color="black"/>
        </Page4ScrollButton>
        <Page4ScrollButton style={{left:'360px', top:'530px'}} onClick={scrollDown}>
        <FontAwesomeIcon icon={faAngleDown} color="black" />
        </Page4ScrollButton>
        </>
    )
}

export default Page4Scroll;