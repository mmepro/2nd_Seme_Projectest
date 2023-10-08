import styled from "styled-components";

const TheatherInfo = styled.div`
position: absolute;
width: 735px;
height: 129px;
background: #4F526B;
overflow: hidden;
`;

const TimeInfo = styled.div`
position: absolute;
width: 149px;
height: 67px;
left: 23px;
top: 45px;

background: #898FC0;
`;

function Theather() {

    const Data = () => {
        
    }


    return (
        <>
          {[0, 152, 304, 456, 608].map((top, index) => (
            <TheatherInfo key={index} style={{ left: '0px', top: `${top}px` }} onClick={Data}>
              {[23, 189, 355,521,687].map((left, index) => (
            <TimeInfo key={index} style={{ left: `${left}px`, top: `45px` }} onClick={Data}>
            </TimeInfo>
          ))}
            </TheatherInfo>
          ))}
        </>
      );
      
}

export default Theather;