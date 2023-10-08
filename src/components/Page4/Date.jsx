import styled from "styled-components";

const DateInfo = styled.div`
position: absolute;
width: 100px;
height: 52px;
left: 661px;
top: 15px;
background: #2A2F42;
border: 1px solid #F4F3F3;
`;

function Date() {

    const Data = () => {
        
    }


    return(
<>
    {[19, 126, 233, 340, 447, 554, 661].map((left, index) => (
      <DateInfo key={index} style={{ left: `${left}px`, top: '15px' }} onClick={Data} />
    ))}
  </>
    )
}

export default Date;