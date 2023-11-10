import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 832px;
`;
export const Body = styled.div`
  position: relative;
  width: 1280px;
  height: 721px;
  left: 0px;
  top: 111px;
  background: #2A2F42;
`;

export const Reservation = styled.div`
  position: absolute;
  width: 777px;
  height: 589px;
  left: 464px;
  top: 90px;
  background: #2A2F42;
  border: 1px solid #F4F3F3;
`;

export const NearTheather = styled.div`
position: absolute;
width: 143px;
height: 31px;
left: 621px;
top: 79px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #F4F3F3;
`;

export const TheatherGroup = styled.div`
  position: absolute;
  width: 735px;
  height: 433px;
  left: 19px;
  top: 121px;
  overflow: hidden;
`;

export const Header = styled.div`
  position: absolute;
  width: 1280px;
  height: 123px;
  left: 0px;
  top: 0px;
  background: #1C1E2C;
`;

export const Logo = styled.div`
position: absolute;
left: 90px;
display: flex;
`;

export const TextBox = styled.div`
  position: absolute;
  height: 559px;
  left: 880px;
  top: 90px;
  background: #2A2F42;
  padding-left: 20px;
  padding-top: 30px;
  font-size: 27px;
  font-weight: bold;
  line-height: 50px;
`;

export const StyledButton = styled.button`
  width: 250px;
  height: 90px;
  padding: 10px 20px;
  margin: 20px;
  border: none;
  background: #1C1E2C; /* Light background for the button */
  color: white; /* Dark text color for the button */
  font-weight: bold;
  font-size: 30px;
  border-radius: 5px; /* Rounded corners for the button */
  border: 1px solid #F4F3F3;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #4F5B93; /* Change color on hover */
    transform: translateY(-2px); /* Slight lift on hover */
  }

  &:active {
    transform: translateY(1px); /* Depress button on click */
  }
`;
