import  React, { useState } from "react";
import fff from './f.jpg';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '홍대 독립 서점']);
  
  let [내용, 내용변경] = useState(["남자코트는 여기가 짱", "강남 우동 맛있어요", "재미있는 책이 있어요"]);

  let [따봉, 따봉변경] = useState(0)

  function 글제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천'
    글제목변경(newArray);
  }

  function 글제목정렬(){
    var sortArray = [...글제목];
    sortArray = sortArray.sort();
    글제목변경(sortArray)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 글제목정렬 }>짠</button>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => {
          따봉변경(따봉+1)
        }}>👍</span> { 따봉 } </h4>
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
        <Modal />
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
