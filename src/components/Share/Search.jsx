import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchInfo = styled.div`
  position: absolute;
  width: 885px;
  height: 72px;
  left: calc(50% - 885px / 2 - 0.5px);
  top: 42px;
  background: #2a2f42;
  border: 1px solid #f4f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f4f3f3;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #f4f3f3;
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  ::placeholder {
    color: #f4f3f3; /* 원하는 색상으로 변경 */
  }
`;

// eslint-disable-next-line react/prop-types
function Search({ onInputChange, onSubmit }) {

  const handleChange = (event) => {
    onInputChange(event.target.value); // Step 2
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit(); // Enter 키를 눌렀을 때 onSubmit 호출
    }
  };

  return (
    <>
      <SearchInfo>
      <Link to="/page6">
        <SearchInput
            type="text"
            placeholder="영화 제목을 입력하세요"
            className="search_input"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
      </Link>
      </SearchInfo>
    </>
  );
}

export default Search;
