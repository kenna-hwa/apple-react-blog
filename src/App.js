import React from "react";
import fff from './f.jpg';
import './App.css';

function App() {
  let posts = "강남 고기 맛집";
  function fun(){
    return 100;
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <h4>{ fun() }</h4>
      <img src={ fff } style={ { width : '400px', boxShadow : '0 0 10px'}}></img>
    </div>
  );
}

export default App;
