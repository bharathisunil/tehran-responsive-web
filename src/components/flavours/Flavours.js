import React from "react";
import "./flavours.css";
import fav1 from "../assets/assets/flavour01.png";
import fav2 from "../assets/assets/flavour2.png";
import fav3 from "../assets/assets/flavour3.png";
//import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import side__img from "../assets/assets/Group 449.png";
import side__img2 from "../assets/assets/Group 448.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const Flavours = () => {
  return (
    <div className="falvour-class">
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <Row>
              <Col className="flav-heading">
                <div className="flav-head">
                  <h3>Hookh Flavours</h3>
                </div>
              </Col>
            </Row>
            <Row >
              <Col>    
                  <div className="flav-cards">
                    <div className="flav-items">
                    <Card style={{ width: "18rem" }}  className="flav-card-items">
                  <Card.Img  src={fav1}  className="flav-images1"/>
                  <Card.Body>
                    <Card.Title className="flav-title"><h5>HOOKAH </h5></Card.Title>
                    <Card.Text className="flav-text">
                      <p> Al Fakher, Nakhla, Fumari, Vantage by Starbuzz, Tangiers, Starbuzz, Lavoo,<br/> Dark Side.</p>
                   
                    </Card.Text>
                    <Button className="flav-btn" ><span>$32.99</span></Button>
                  </Card.Body>
                   </Card>
                   
                    </div>
                  </div>
              </Col>
              <Col>    
                  <div className="flav-cards">
                    <div className="flav-items">
                    <Card style={{ width: "18rem" }} className="flav-card-items">
                  <Card.Img  src={fav2} className="flav-images2" />
                  <Card.Body>
                    <Card.Title className="flav-title"><h5>FRUIT BOWL</h5></Card.Title>
                    <Card.Text className="flav-text">
                      <p>Try our fruit bowl hookah with Grapefruit, Orange, Apple, Pineapple, Melon.</p>
                    
                    </Card.Text>
                    <Button className="flav-btn"><span>$32.99</span></Button>
                  </Card.Body>
                   </Card>
                   
                    </div>
                  </div>
              </Col>
              <Col>    
                  <div className="flav-cards">
                    <div className="flav-items">
                    <Card style={{ width: "18rem" }}   className="flav-card-items">
                  <Card.Img  src={fav3} className="flav-images3" />
                  <Card.Body>
                    <Card.Title className="flav-title"><h5>ART HOOKAH</h5> </Card.Title>
                    <Card.Text className="flav-text">
                   <p>These all glass hookah are created using only the highest quality of glass. </p>           
                      </Card.Text>
                    <Button className="flav-btn"><span>$32.99</span></Button>
                  </Card.Body>
                   </Card>
                   
                    </div>
                  </div>
              </Col>
            </Row>
          </Col>

          <Col lg={1}></Col>
        </Row>
        <Row>
          <Col>
              <div className="fav-btn">
                <div className="all-flav-btn">
                  <button ><h5>All Flavours</h5></button>
</div>
              </div>
              
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Flavours;
