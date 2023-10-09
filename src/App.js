// eslint-disable-next-line

import logo from './logo.svg';
import React from 'react'
import './App.css'; //  순수 css 문법 적용 파일 
import 'bootstrap/dist/css/bootstrap.min.css'; // react bootstrap styles 
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap'; // 리액트 콤포넌트를 여러 개 import하면 중괄호 안에 배열로 표시
import { useState } from 'react';
import data from './data.js';

import { Routes, Route, Link } from 'react-router-dom'; /*리액트 라우터 사용을 위한 3개의 모듈을 import*/
// import card from 'card'

function App() { /* App() 함수는 리액트가 제공하는 함수로서, 리액트가 제공하는 함수는 반드시 return을 해야 함 */

  let [shoes] = useState(data) /* 단순히 data만 가지고 오는 것이 아니라, 값을 변경하고 즉시 화면에 반영하고자 useState를 사용하여 shoes변수를 생성함 */
  
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg"></div>  {/*배경이미지로서 css 파일에 있는 main-bg 클래스를 적용함 */}
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => { /* map 함수는 배열의 각 원소를 하나씩 꺼내서 함수를 적용시킨 후, 그 결과를 새로운 배열에 담아줌 */
                    return <Card shoes={shoes[i]} i={i+1}/> /* key 속성은 리액트에서 배열을 처리할 때 필요한 특수한 속성임 */
                  })
                }
              </div>
            </div>
          </div>}>
        </Route>
        <Route path="/detail" element={
          <div>상세페이지 임 </div>}>
        </Route>
      </Routes>

    </div>
  )
}

function Card (props) {
  return (
    <div className="col-md-4">
      <img src={"/shoes" + props.i + ".jpg"} width= "80%" alt={'Shoe'} />   {/* 문자와 변수 결합 */}
      <h5>{props.shoes.title}</h5>
      <p>가격: {props.shoes.price}</p>
    </div>
  )
}

export default App;
