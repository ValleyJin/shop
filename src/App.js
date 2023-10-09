// eslint-disable-next-line

import logo from './logo.svg';
import React from 'react'
import './App.css'; //  순수 css 문법 적용 파일 
import 'bootstrap/dist/css/bootstrap.min.css'; // react bootstrap styles 
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap'; // 리액트 콤포넌트를 여러 개 import하면 중괄호 안에 배열로 표시
import { useState } from 'react';
import data from './data.js';

import { Routes, Route, Link } from 'react-router-dom'; // 리액트 라우터 사용을 위한 import
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
         {/* <Card shoes = {shoes[0]} i ={1}></Card>        
         <Card shoes = {shoes[1]} i ={2}></Card>  
         <Card shoes = {shoes[2]} i ={3}></Card>   */}

         {/* 아래 식은 javascript가 실행되는 부분이므르 { } 중괄호로 감싸서 표시함 */}

         {
         shoes.map((value, i)=>{
         return (
           <Card shoes={shoes[i]} i={i+1}></Card>
           )
         })
        }

        </div>
      </div> 
    </div>
  )
}

function Card (props) {
  return (
    <div className="col-md-4">
      <img src={"/shoes" + props.i + ".jpg"} width= "80%" />   {/* 문자와 변수 결합 */}
      <h5>{props.shoes.title}</h5>
      <p>가격: {props.shoes.price}</p>
    </div>
  )
}

export default App;
