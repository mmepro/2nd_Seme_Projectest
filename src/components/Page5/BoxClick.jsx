// BoxClick.jsx


export function handleBoxClick(boxName, selectedBoxes, setSelectedBoxes) {
  if (selectedBoxes.includes(boxName)) {
    setSelectedBoxes(selectedBoxes.filter((box) => box !== boxName));
  } else {
    if (selectedBoxes.length < 3) {
      setSelectedBoxes([...selectedBoxes, boxName]);
    } else {
      alert('최대 세 개의 박스까지만 선택 가능합니다.');
    }
  }
}
