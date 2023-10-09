// eslint-disable-next-line

import logo from './logo.svg';
import React from 'react'
import './App.css'; //  순수 css 문법 적용 파일 
import 'bootstrap/dist/css/bootstrap.min.css'; // react bootstrap styles 
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap'; // 리액트 콤포넌트를 여러 개 import하면 중괄호 안에 배열로 표시
import { useState } from 'react';
import data from './data.js';
// import card from 'card'

function App() {

  let [shoes] = useState(data) // 단순히 data만 가지고 오는 것이 아니라, 값을 변경하고 즉시 화면에 반영하고자 useState를 사용하여 shoes변수를 생성함
  
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

      <div className="main-bg"></div>  {/* 배경이미지로서 css 파일에 있는 main-bg 클래스를 적용함 */}

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src= '/shoes1.jpg' width= "80%" /> {/*public 폴더에 있는 이미지 파일을 가져올 때임. /는 public 폴더를 의미함*/}
             <h4>{shoes[0].title}</h4> {/* h 태그로 글자 크기 적절힌 선택 */}
            <p>가격: {shoes[0].price}</p> {/* 설명 덩어리는 p 태그로 감싸기 */}
          </div>
          <div className="col-md-4">
            <img src= '/shoes2.jpg' width= "80%" />
            <h4>{shoes[1].title}</h4>
            <p>가격: {shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src= '/shoes3.jpg' width= "80%" />
            <h4>{shoes[2].title}</h4>
            <p>가격: {shoes[2].price}</p>
          </div>
          
        </div>
      </div> 
    </div>
  )
}



export default App;
