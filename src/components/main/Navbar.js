import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./navbar.css";
//import img from "../src/images/banner-img.png";
const Navbar = () => {
  return (
    <div className="bg">
      <div  className="bg-img">
      <Container  fluid>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10} >
            
            
              <div className="bg-text">
                  <h3>Indulge in</h3>
                  <h1>
                    Exotic Flavour<span>&</span>
                  </h1>
                  <h2>Relaxing Atmosphere</h2>
 
 
              </div>
             
            
           
          </Col>
          <Col lg={1}></Col>
        </Row>
      
      </Container>
      </div>
      
     </div>
  );
};

export default Navbar;
