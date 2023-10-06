import styled from "styled-components";

const TheatherInfo = styled.button`
position: absolute;
width: 735px;
height: 129px;
background: #F0EEEE;
`;

function Theather() {

    const Data = () => {
        
    }


    return (
        <>
          {[0, 152, 304, 456, 608].map((top, index) => (
            <TheatherInfo key={index} style={{ left: '0px', top: `${top}px` }} onClick={Data} />
          ))}
        </>
      );
      
}

export default Theather;