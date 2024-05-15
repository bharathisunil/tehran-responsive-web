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
import MenuItem1 from "../assets/menu-item1.png";
import InstaIcon from "../assets/insta-icon.png";
import LargeGathering from "../assets/large-gathering-bg.png";
import emailjs from "@emailjs/browser";
import "./home.scss";
import React, { useEffect, useState, useRef } from "react";
import IndividualIntervalsExample from "./IndividualIntervalsExample";
import Contact from "../components/contact/contact";

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
       <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-block d-md-block d-lg-none ">
            <a href="/home"><img src={Logo} alt="Logo" height="40px" /></a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="align-items-center">
              {/* <Nav.Link href="/home">Home</Nav.Link> */}
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/hookah">Hookah</Nav.Link>
              <Nav.Link href="#link">Happy Hour</Nav.Link>
              <a href="/home"  className="d-none d-md-none d-lg-block">
              <img
                src={Logo}
                alt="Logo"
               
              />
              </a>
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
      <IndividualIntervalsExample />
      {/* <section className="carousel-sec d-flex justify-content-center align-items-center position-relative">
        <Container>
          <div
            className="titles"
            data-aos="zoom-in-up"
            data-aos-duration="2000"
          >
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
      </section> */}
      <section className="welcome-sec pt-5">
        <Container>
          <h2 className="text-center">Welcome to Tehran</h2>
          <h3 className="text-center">Book a Table</h3>
          <div className="row align-items-center">
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              {/* <img src={WelcomeImg} alt="Logo" className="mw-100" /> */}
            </div>
            <div className="col-md-6 ps-md-5">
              <div
                className="py-5 position-relative z-1"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Date"
                        className="w-100"
                        onChange={onFirstNameChange}
                        name="first_name"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Time"
                        className="w-100"
                        onChange={onLastNameChange}
                        name="last_name"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Full Name"
                        className="w-100"
                        onChange={onEmailChange}
                        name="email"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Mobile"
                        className="w-100"
                        onChange={onPasswordChange}
                        name="password"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="No of members"
                        className="w-100"
                        key="mobile"
                        onChange={onMobileChange}
                        name="mobile"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <Button type="submit" value="Send" className="book-btn">
                        Book a Table
                      </Button>
                    </div>
                  </div>
                  <div className="note">
                    Note: Secure your spot for up to 8 guests
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
      <section className="home-menu py-5">
        <Container>
          <h2
            className="text-center pb-5"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Menu
          </h2>
          <div className="row">
            <div className="col-md-3">
              <div className="menu-item">
                <div className="item-img mb-3">
                  <img src={MenuItem1} alt="Flavour" className="menu item" />
                </div>
                <div className="item-name">Vegetable samosa</div>
                <div className="item-price">$5.00</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-item">
                <div className="item-img mb-3">
                  <img src={MenuItem1} alt="Flavour" className="menu item" />
                </div>
                <div className="item-name">Vegetable samosa</div>
                <div className="item-price">$5.00</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-item">
                <div className="item-img mb-3">
                  <img src={MenuItem1} alt="Flavour" className="menu item" />
                </div>
                <div className="item-name">Vegetable samosa</div>
                <div className="item-price">$5.00</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-item">
                <div className="item-img mb-3">
                  <img src={MenuItem1} alt="Flavour" className="menu item" />
                </div>
                <div className="item-name">Vegetable samosa</div>
                <div className="item-price">$5.00</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-item">
                <div className="item-img mb-3">
                  <img src={MenuItem1} alt="Flavour" className="menu item" />
                </div>
                <div className="item-name">Vegetable samosa</div>
                <div className="item-price">$5.00</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-item">
                <div className="item-img mb-3">
                  <img src={MenuItem1} alt="Flavour" className="menu item" />
                </div>
                <div className="item-name">Vegetable samosa</div>
                <div className="item-price">$5.00</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-item">
                <div className="item-img mb-3">
                  <img src={MenuItem1} alt="Flavour" className="menu item" />
                </div>
                <div className="item-name">Vegetable samosa</div>
                <div className="item-price">$5.00</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-item">
                <div className="item-img mb-3">
                  <img src={MenuItem1} alt="Flavour" className="menu item" />
                </div>
                <div className="item-name">Vegetable samosa</div>
                <div className="item-price">$5.00</div>
              </div>
            </div>
          </div>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="300"
          >
            <div className="col-md-4">
              <div className="flavour-box text-center">
                <img src={Flavour01} alt="Flavour" className="flavour-img" />
                <div className="flavour-name pb-3">HOOKAH</div>
                <div className="flavour-des">
                  Al Fakher, Nakhla, Fumari, Vantage by Starbuzz, Tangiers,
                  Starbuzz, Lavoo, Dark Side.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flavour-box text-center">
                <img src={Flavour02} alt="Flavour" className="flavour-img" />
                <div className="flavour-name pb-3">FRUIT BOWL</div>
                <div className="flavour-des">
                  Try our fruit bowl hookah with Grapefruit, Orange, Apple,
                  Pineapple, Melon.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="flavour-box text-center">
                <img src={Flavour01} alt="Flavour" className="flavour-img" />
                <div className="flavour-name pb-3">ART HOOKAH </div>
                <div className="flavour-des">
                  These all glass hookah are created using only the highest
                  quality of glass.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="happy-hours-sec py-5">
        <div
          className="text-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-offset="100"
        >
          <div className="border1 d-inline-block"></div>
          <div className="hh-text1">HAPPY HOURS</div>
          {/* <div className="hh-text2 position-relative">SISHA AT</div> */}
          {/* <div className="hh-text3">Just $10</div> */}
          <div className="border2 d-inline-block"></div>
          <div className="hh-text4">Sunday - Thursday | 6PM - 12PM</div>
          <div className="hh-text4">Friday - Saturday | 6PM - 2AM</div>
        </div>
      </section>
      <section className="large-gatherings">
        <Container>
          <div className="row">
            <div className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500">
              <h3>From large gatherings to intimate soirées</h3>
              <p>
                our hookah lounge is the perfect place for all your party needs
              </p>
              <div className="row text-center">
                <div className="col-6">
                  <div className="count-number">30+ </div>
                  <div className="count-text">Shisha Gatherings </div>
                </div>
                <div className="col-6">
                  <div className="count-number">15+</div>
                  <div className="count-text">university hookah bash </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={LargeGathering} alt="LargeGathering" className="mw-100"></img>
            </div>
          </div>
          <div className="followus-box mt-5 position-relative justify-content-between align-items-center"  data-aos="fade-up"
            data-aos-duration="1500">
            <div className="d-flex align-items-center">
              <div className="border-right px-3 me-3"><img src={InstaIcon} alt="Instagram"  /></div>
              <div className="text-start">Follow us and stay up to date <span className="tag-text">@Tehranhookahlounge</span></div>
              </div>
              <Button type="submit" value="Send" className="followus-btn">
              Follow Us
                    </Button>
          </div>
        </Container>
      </section>
      <section className="reservation-sec">
        <Container>
          <div className="row align-items-center">
            <div
              className="col-md-6 pe-md-5"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
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
              <div
                className="py-5 position-relative z-1"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <h3 className="mb-5">Reservation</h3>

                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Date"
                        className="w-100"
                        onChange={onFirstNameChange}
                        name="first_name"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Time"
                        className="w-100"
                        onChange={onLastNameChange}
                        name="last_name"
                      />
                    </div>
                    <div className="col-md-12 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Full Name"
                        className="w-100"
                        onChange={onEmailChange}
                        name="email"
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
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Mobile"
                        className="w-100"
                        onChange={onPasswordChange}
                        name="password"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="No of members"
                        className="w-100"
                        key="mobile"
                        onChange={onMobileChange}
                        name="mobile"
                      />
                    </div>
                    <div className="col-md-6 pb-3">
                    <Button type="submit" value="Send" className="reserve-btn">
                    Reserve
                    </Button>
                    </div>
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
      <Contact />
      <footer>
        <Container>
          <div className="footer-menu text-center">
            <a href="/home">HOME</a> <a href="/menu">Menu</a> <a href="/hookah">Hookah</a>{" "}
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
