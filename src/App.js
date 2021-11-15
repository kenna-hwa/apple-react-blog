import  React, { useState } from "react";
import fff from './f.jpg';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '홍대 독립 서점']);
  
  let [내용, 내용변경] = useState(["남자코트는 여기가 짱", "강남 우동 맛있어요", "재미있는 책이 있어요"]);

  let [따봉, 따봉변경] = useState([0, 0, 0])

  let [modal, modal변경] = useState(false)

  let [menu, menu변경] = useState(false)

  function 반복된UI(){
    var 어레이 = [];

    for(var i=0; i<글제목.length; i++){
      어레이.push(<div className="list">
      <h4 onClick={ 상태전환 }>{ 글제목[i] }</h4> 
      <span className="like">👍 {따봉[i]}</span>
      <p>{ 내용[i] }</p>
    </div>)
    }

    return 어레이
  }

function 상태전환(){

  let newModal = modal;
  if(newModal == false) {
    newModal = true;  
  }else{
    newModal = false;
  }


  modal변경(newModal)
  }

  function 메뉴등장(){
    let newMenu = menu;

    if(newMenu == false){
      newMenu = true
    }else{
      newMenu = false
    }

    menu변경(newMenu)
  }

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
        <div className="chatmenu" onClick={ 메뉴등장 }>💬</div>
        {
          menu == true ? <Menu /> : null
        }
      </div>
      <button onClick={ 글제목정렬 }>짠</button>


      <반복된UI />


      {/*     
        {
           글제목.map(function(글){
             return (<div className="list">
             <h4 onClick={ 상태전환 }>{ 글 }</h4>
             <p>2월 18일 발행</p>
           </div>)
           })
        } */}
    



      {
      modal == true ? 
      <Modal 글제목={글제목}></Modal> :
      null
      }
      
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
    <h2>{ props.글제목[0] }</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

function Menu(){
  return (<ul className="menu">
          <li>포스트</li>
          <li>방명록</li>
  </ul>
  )
}

export default App;
