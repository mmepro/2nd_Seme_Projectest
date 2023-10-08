import styled from "styled-components";

const SearchInfo = styled.div`
    position: absolute;
width: 885px;
height: 72px;
left: calc(50% - 885px/2 - 0.5px);
top: 42px;
background: #2A2F42;
border: 1px solid #F4F3F3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
justify-content: center;
color: #F4F3F3;
`;

function Search() {

    // const Data = () => {
        
    // }


    return(
<>
        <SearchInfo>원하시는 영화를 검색하세요</SearchInfo>
</>
    )
}

export default Search;