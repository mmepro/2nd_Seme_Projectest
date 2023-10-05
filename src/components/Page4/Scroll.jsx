import styled from "styled-components";

const Page4ScrollButton = styled.button`
position: absolute;
width: 47px;
height: 44px;
background: white;
transform: rotate(90deg);
`;

function Page4Scroll() {

    const scrollTop = () => {
        var scrollableDiv = document.getElementById('scroll');
        scrollableDiv.scrollTop += 50;
    }

    const scrollDown = () => {
        var scrollableDiv = document.getElementById('scroll');
        scrollableDiv.scrollTop -= 50;
    }

    return(
        <>
        <Page4ScrollButton style={{left:'360px', top:'70px'}} onClick={scrollTop}/>
        <Page4ScrollButton style={{left:'360px', top:'550px'}} onClick={scrollDown}/>
        </>
    )
}

export default Page4Scroll;