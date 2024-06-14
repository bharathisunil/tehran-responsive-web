import React from "react";
import './wlcome.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img5 from '../assets/assets/welcome-img.png'
import Button from 'react-bootstrap/Button';
const Welcome = () => {
  return (
    

    <Container  className=".welcome__page" >
      <Row>
        <div className="welcome-text-1" >
              
              <h1>Welcome to Tehran hookah  lounge</h1>
            
            <p>Quisque arcu dui, ornare a lacus ac, dignissim bibendum tellus. Integer vestibulum faucibus nulla, vel lobortis mauris pharetra at. Morbi fringilla mi ut augue consectetur, sed laoreet lectus iaculis. Etiam sed orci consequat, interdum arcu non, imperdiet mauris. Vivamus vel laoreet arcu, non dignissim dolor.<br/>
           <br/> Sed laoreet lectus iaculis. Etiam sed orci consequat, interdum arcu non, imperdiet mauris. Vivamus vel laoreet arcu, non dignissim dolor.</p>
  
              
            
           
          <div className='welcome-btn'>
        <button href="/book-table">Book A Table</button>
          </div>
            
         </div>
           
        <Col   lg={2}></Col>
        <Col  >
           <Row>
            <Col  lg={6}  >
              <div className="welcome-text" >
              <div className="welcome-text-1" >
              
              <h1>Welcome to Tehran hookah  lounge</h1>
            
            <p>Quisque arcu dui, ornare a lacus ac, dignissim bibendum tellus. Integer vestibulum faucibus nulla, vel lobortis mauris pharetra at. Morbi fringilla mi ut augue consectetur, sed laoreet lectus iaculis. Etiam sed orci consequat, interdum arcu non, imperdiet mauris. Vivamus vel laoreet arcu, non dignissim dolor.<br/>
           <br/> Sed laoreet lectus iaculis. Etiam sed orci consequat, interdum arcu non, imperdiet mauris. Vivamus vel laoreet arcu, non dignissim dolor.</p>
  
              
            
           
          <div className='welcome-btn'>
        <button href="/book-table">Book A Table</button>
          </div>
            
         </div>
           
              </div>
              
              
            </Col>
            <Col lg={6} className="welcome-img" >
                  <div className="welcome-imgsrc">
                  <div className="wel-img">
                    <img src={img5}/>
                    </div>
                
                  </div>

                 
                  
                
              
          
            </Col>

           </Row>
        </Col>
        <Col  lg={2}></Col>
      </Row>
      
    </Container>

    
 
);
};

export default Welcome;
