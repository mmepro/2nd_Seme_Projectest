import { useState } from 'react'
import React, { useRef } from 'react';
//import { Link } from 'react-router-dom';
import { Container,Header,Logo,Body } from './components/Page5Style'
import Login from './components/Share/Login';
import PageButton from './components/Share/PageButton';
import {Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Text1,Submit,ScrollContent,SubmitBox,SubmitContent} from './components/Page5Style';
import BoxChange from './components/Page5/BoxChange';
import { handleBoxClick } from './components/Page5/BoxClick';

function Page5() {
  // const [count, setCount] = useState(0);
  const scrollableContentRef = useRef(null);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  // handleBoxClick 함수를 사용
  const handleClick = (boxName) => {
    handleBoxClick(boxName, selectedBoxes, setSelectedBoxes);
  };
  const handleDeleteBox = (boxName) => {
    setSelectedBoxes(selectedBoxes.filter((box) => box !== boxName));
  };
  
  return (
    <Container>
      <Header>
      <Logo>MOVIE</Logo>
        <PageButton/>
        <Login/>
      </Header>

      <Body>
        <Text1>본인의 취향에 맞는 영화를 3개 골라주세요!</Text1>
        <ScrollContent id='scroll' style={{ scrollBehavior: 'smooth' }} ref={scrollableContentRef}>
        <Box1 onClick={() => handleClick("Box1")}>Box1</Box1>
        <Box2 onClick={() => handleClick("Box2")}>Box2</Box2>
        <Box3 onClick={() => handleClick("Box3")}>Box3</Box3>
        <Box4 onClick={() => handleClick("Box4")}>Box4</Box4>
        <Box5 onClick={() => handleClick("Box5")}>Box5</Box5>
        <Box6 onClick={() => handleClick("Box6")}>Box6</Box6>
        <Box7 onClick={() => handleClick("Box7")}>Box7</Box7>
        <Box8 onClick={() => handleClick("Box8")}>Box8</Box8>
        <Box9 onClick={() => handleClick("Box9")}>Box9</Box9> 
        </ScrollContent>
        <BoxChange/>
        <SubmitBox>
  {selectedBoxes.map((boxName) => (
    <SubmitContent key={boxName}onClick={() => handleDeleteBox(boxName)}>{boxName}</SubmitContent>
  ))}
</SubmitBox>

        <Submit>제출하기</Submit>
      </Body>
    </Container>
  );
}

export default Page5