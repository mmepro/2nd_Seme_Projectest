import styled from "styled-components";

const ImageChangeButton = styled.button`
position: absolute;
width: 47px;
height: 44px;
background: #D9D9D9;
transform: rotate(90deg);
`;

function ImageChange() {

    const scrollLeft = () => {
        var scrollableDiv = document.getElementById('scroll');
        scrollableDiv.scrollLeft += 291;
    }

    const scrollRight = () => {
        var scrollableDiv = document.getElementById('scroll');
        scrollableDiv.scrollLeft -= 291;
    }

    return(
        <>
        <ImageChangeButton style={{left:'1200px', top:'337px'}} onClick={scrollLeft}/>
        <ImageChangeButton style={{left:'30px', top:'337px'}} onClick={scrollRight}/>
        </>
    )
}

export default ImageChange;