import  React, { useState } from "react";
import fff from './f.jpg';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '홍대 독립 서점']);
  
  let [내용, 내용변경] = useState(["남자코트는 여기가 짱", "강남 우동 맛있어요", "재미있는 책이 있어요"]);
  

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>{ 내용[0] }</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>{ 내용[1] }</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>{ 내용[2] }</p>
      </div>

    </div>
  );
}

export default App;
