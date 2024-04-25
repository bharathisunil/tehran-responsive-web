import React from "react";
import "./reservation.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Reservation = () => {
  return (
    <div className="big">
      <Container>
        <Row>
          <Col>
            <div className="bigparty-text">
              <h1>Big Party</h1>
              <h3>Perfect setting for a group party</h3>
              <p>
                Gather your friends and elevate your celebration with a hookah
                big party at our lounge. Indulge in a variety of flavors, enjoy
                vibrant music, and create lasting memories in our welcoming
                atmosphere.{" "}
              </p>
            </div>
          </Col>
          <Col>
            <div className="registration">
              <div className="gradient">
                <Form>
                  <Row className="mb-2">
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="FirstName"
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="LastName"
                      />
                    </Form.Group>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reservation;
