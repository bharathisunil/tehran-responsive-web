import React from "react";
import "./navbar.css";
import IMG from "../assets/assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
//import { Container,Navbar,Nav  , NavLink } from 'react-bootstrap';

const NavBar = () => {
  return (
    
       <Navbar expand="lg" className=" nav-section " >
      <Container fulid className="nav-section">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav nav-section">
          <Nav className="me-auto nav-links ">
            <NavLink href="#home"style={{color:' #087B6F'}}>HOME</NavLink>
            <NavLink href="#link" style={{color:'#087B6F'}}>MENU</NavLink>
            <NavLink href="#link" style={{color:'#087B6F'}}>HOOKAH</NavLink>
            <NavLink href="#link"style={{color:'#087B6F'}}>HAPPY HOUR</NavLink>
            <Nav />
            <img src={IMG} alt="logo" className="logo" />
            <Nav >
              <NavLink href="#link" style={{color:'#087B6F'}}>BIG PARTY</NavLink>
              <NavLink href="#link"style={{color:'#087B6F'}}>BOOK A TABLE</NavLink>
            </Nav>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle />
      </Container>
    </Navbar>
    
    
  );
};

export default NavBar;
