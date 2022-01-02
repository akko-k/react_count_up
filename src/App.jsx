import { useState, useEffect } from "react";
import "./App.css";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwithShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num !== 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwithShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)</p>}
    </>
  );
};

export default App;
