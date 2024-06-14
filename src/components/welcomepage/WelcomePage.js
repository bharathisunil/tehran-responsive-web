import React from "react";
import "./welcomepage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img5 from "../assets/assets/welcome-img.png";
import Button from "react-bootstrap/Button";

const WelcomePage = () => {
  return (
    <div className="welcome__page">
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Container>
              <Row>
              <Col lg={6} className="welcome-text">
                  <div className=".welcome-text-1">
                    
                      <h1>Welcome to Tehran hookah lounge</h1>

                      <p>
                        Quisque arcu dui, ornare a lacus ac, dignissim bibendum
                        tellus. Integer vestibulum faucibus nulla, vel lobortis
                        mauris pharetra at. Morbi fringilla mi ut augue
                        consectetur, sed laoreet lectus iaculis. Etiam sed orci
                        consequat, interdum arcu non, imperdiet mauris. Vivamus
                        vel laoreet arcu, non dignissim dolor.
                        <br />
                        <br /> Sed laoreet lectus iaculis. Etiam sed orci
                        consequat, interdum arcu non, imperdiet mauris. Vivamus
                        vel laoreet arcu, non dignissim dolor.
                      </p>

                      <div className=".welcome-btn">
                        <button href="/book-table">Book A Table</button>
                      </div>
                    
                  </div>
                </Col>
                <Col lg={6} className="image">
                  <div className="imgsrc">
                    <div className="img">
                      <img src={img5} />
                    </div>
                  </div>
                </Col>
              
              </Row>
            </Container>
              
                
            
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePage;
