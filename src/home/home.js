import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../assets/logo.svg";
import LogoDark from "../assets/logo-dark.svg";
import Hookah1 from "../assets/hookah1.svg";
import WelcomeImg from "../assets/welcome-img.png";
import Flavour01 from "../assets/flavour01.png";
import Flavour02 from "../assets/flavour02.png";
import Gallery1 from "../assets/gallery01.png";
import Gallery2 from "../assets/gallery02.png";
import Gallery3 from "../assets/gallery03.png";
import Gallery4 from "../assets/gallery04.png";
import Brand1 from "../assets/brand01.png";
import Brand2 from "../assets/brand02.png";
import Brand3 from "../assets/brand03.png";
import Brand4 from "../assets/brand04.png";
import Brand5 from "../assets/brand05.png";
import emailjs from "@emailjs/browser";
import "./home.scss";
import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  const form = useRef();
  const [mobile, setMobile] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onMobileChange = (e) => {
    console.log("onMobileChange ", e.target.value);
    setMobile(e.target.value);
  };

  const onFirstNameChange = (e) => {
    console.log("onFirstNameChange ", e.target.value);
    setFirstName(e.target.value);
  };
  const onLastNameChange = (e) => {
    console.log("onLastNameChange ", e.target.value);
    setLastName(e.target.value);
  };
  const onEmailChange = (e) => {
    console.log("onEmailChange ", e.target.value);
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    console.log("onPasswordChange ", e.target.value);
    setPassword(e.target.value);
  };
  const sendEmail = (e) => {
    console.log("sendEmail : ", form.current);
    e.preventDefault();

    emailjs
      .sendForm("service_z91w1xf", "template_xr7yeq5", form.current, {
        publicKey: "iLHcFCbqcEy0wS-h4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="d-block d-sm-none ">
            <img src={Logo} alt="Logo" height="40px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Menu</Nav.Link>
              <Nav.Link href="#link">Hookah</Nav.Link>
              <Nav.Link href="#link">Happy Hour</Nav.Link>
              <img src={Logo} alt="Logo" className="d-none d-sm-block" />
              <Nav.Link href="#link">Big Party</Nav.Link>
              <Nav.Link href="#link">Book a table</Nav.Link>
              <Form.Select
                aria-label="Default select example"
                size="sm"
                className="ms-2"
              >
                <option>English</option>
                <option value="1">Spanish</option>
                <option value="2">Japanese</option>
              </Form.Select>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="carousel-sec d-flex justify-content-center align-items-center position-relative">
        <Container>
          <div className="titles">
            <div className="font1">Indulge in</div>
            <div className="font2">
              Exotic Flavour <span>&</span>
            </div>
            <div className="font3">Relaxing Atmosphere</div>
          </div>
        </Container>
        <div className="hookah1">
          <img src={Hookah1} alt="Hookah1" />
        </div>
      </section>
      <section className="welcome-sec">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>Welcome to Tehran hookah lounge</h2>
              <p>
                Quisque arcu dui, ornare a lacus ac, dignissim bibendum tellus.
                Integer vestibulum faucibus nulla, vel lobortis mauris pharetra
                at. Morbi fringilla mi ut augue consectetur, sed laoreet lectus
                iaculis. Etiam sed orci consequat, interdum arcu non, imperdiet
                mauris. Vivamus vel laoreet arcu, non dignissim dolor.
              </p>
              <p>
                Sed laoreet lectus iaculis. Etiam sed orci consequat, interdum
                arcu non, imperdiet mauris. Vivamus vel laoreet arcu, non
                dignissim dolor.
              </p>
              <Button variant="primary" className="book-btn mt-3">
                Book a Table
              </Button>
            </div>
            <div className="col-md-6">
              <img src={WelcomeImg} alt="Logo" className="mw-100" />
            </div>
          </div>
        </Container>
      </section>
      <section className="flavours-sec py-5">
        <Container>
          <h2 className="text-center pb-3">Hookh Flavours</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="flavour-box text-center">
                <div className="box-bg">
                  <img src={Flavour01} alt="Flavour" className="flavour-img" />
                  <div className="flavour-name pb-3">HOOKAH</div>
                  <div className="flavour-des">
                    Al Fakher, Nakhla, Fumari, Vantage by Starbuzz, Tangiers,
                    Starbuzz, Lavoo, Dark Side.
                  </div>
                </div>
                <div className="price d-flex align-items-center justify-content-center">
                  $32.99
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flavour-box text-center">
                <div className="box-bg">
                  <img src={Flavour02} alt="Flavour" className="flavour-img" />
                  <div className="flavour-name pb-3">FRUIT BOWL</div>
                  <div className="flavour-des">
                    Try our fruit bowl hookah with Grapefruit, Orange, Apple,
                    Pineapple, Melon.
                  </div>
                </div>
                <div className="price d-flex align-items-center justify-content-center">
                  $32.99
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flavour-box text-center">
                <div className="box-bg">
                  <img src={Flavour01} alt="Flavour" className="flavour-img" />
                  <div className="flavour-name pb-3">ART HOOKAH </div>
                  <div className="flavour-des">
                    These all glass hookah are created using only the highest
                    quality of glass.
                  </div>
                </div>
                <div className="price d-flex align-items-center justify-content-center">
                  $32.99
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Button variant="primary" className="all-btn     mt-3">
              All Flavours
            </Button>
          </div>
        </Container>
      </section>
      <section className="happy-hours-sec py-5">
        <div className="text-center">
          <div className="border1 d-inline-block"></div>
          <div className="hh-text1">HAPPY HOURS</div>
          <div className="hh-text2 position-relative">SISHA AT</div>
          <div className="hh-text3">Just $10</div>
          <div className="border2 d-inline-block"></div>
          <div className="hh-text4">Mon - Fri | 6PM - 9PM</div>
        </div>
      </section>
      <section className="home-gallery-sec py-5">
        <Container>
          <h2 className="text-center pb-4">Hookah Gallery</h2>
          <div className="row mb-5">
            <div className="col-md-4">
              <img
                src={Gallery1}
                alt="Gallery"
                className="w-100 mb-4 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <img
                src={Gallery2}
                alt="Gallery"
                className="w-100 mb-4 mb-md-0"
              />
            </div>
            <div className="col-md-4">
              <img src={Gallery3} alt="Gallery" className="w-100 mb-4" />
              <img src={Gallery4} alt="Gallery" className="w-100" />
            </div>
          </div>
          <h3 className="text-center pb-4">Brands we carry</h3>
          <div className="row">
            <div className="col-6 col-md">
              <img src={Brand1} alt="Brand" className="w-100" />
            </div>
            <div className="col-6 col-md">
              <img src={Brand2} alt="Brand" className="w-100" />
            </div>
            <div className="col-6 col-md">
              <img src={Brand3} alt="Brand" className="w-100" />
            </div>
            <div className="col-6 col-md">
              <img src={Brand4} alt="Brand" className="w-100" />
            </div>
            <div className="col-6 col-md">
              <img src={Brand5} alt="Brand" className="w-100" />
            </div>
          </div>
        </Container>
      </section>
      <section className="reservation-sec">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6 pe-md-5">
              <div className="py-5">
                <h2 className="pb-3">Big Party</h2>
                <div className="rs-text1 pb-2">
                  Perfect setting for a group party
                </div>
                <p>
                  Gather your friends and elevate your celebration with a hookah
                  big party at our lounge. Indulge in a variety of flavors,
                  enjoy vibrant music, and create lasting memories in our
                  welcoming atmosphere.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 ps-md-5">
              <div className="py-5 position-relative z-1">
                <h3 className="mb-5">Reservation</h3>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="First Name"
                        className="w-100"
                        onChange={onFirstNameChange}
                        name="first_name"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Last Name"
                        className="w-100"
                        onChange={onLastNameChange}
                        name="last_name"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Email"
                        className="w-100"
                        onChange={onEmailChange}
                        name="email"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Password"
                        className="w-100"
                        onChange={onPasswordChange}
                        name="password"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Mobile"
                        className="w-100"
                        key="mobile"
                        onChange={onMobileChange}
                        name="mobile"
                      />
                    </div>

                    <Button type="submit" value="Send">
                      Sign Up
                    </Button>
                  </div>
                </form>
                {/* <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="first_name" />
                    <input type="text" name="last_name" />
                    <input type="email" name="user_email" />
                    <input type="password" name="user_password" />
                    <input type="phone" name="user_phone" />
                    <input type="submit" value="Send" />
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="home-contact-sec py-5">
        <Container>
          <h2 className="text-center pb-5">Contact Info</h2>
          <div className="map mb-4"></div>
          <div className="row">
            <div className="col-md-3">
              <div className="lable">Hours of Operations:</div>
              <div className="value">2 PM to 3 AM Daily</div>
            </div>
            <div className="col-md-3">
              <div className="lable">Located:</div>
              <div className="value">123 W 45th Newyork</div>
            </div>
            <div className="col-md-3">
              <div className="lable">Phone:</div>
              <div className="value">(+1) (404) 7236 423</div>
            </div>
            <div className="col-md-3">
              <div className="lable">Follow Us:</div>
              <div className="value">@tehranlounge</div>
            </div>
          </div>
          <hr className="mt-5"></hr>
        </Container>
      </section>
      <footer>
        <Container>
          <div className="footer-menu text-center">
            <a href="#">HOME</a> <a href="#">Menu</a> <a href="#">Hookah</a>{" "}
            <a href="#">Happy HoUR</a> <br></br>
            <a href="#">Big Party</a> <a href="#">Book a table</a>
          </div>
          <div className="row align-items-center pb-5">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center pb-3 pb-md-0">
              Tehran © 2024 All rights reserved.
            </div>
            <div className="col-md-4 text-center text-md-end">
              <img src={LogoDark} alt="Logo" />
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
