import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../assets/logo.svg";
import LogoDark from "../assets/logo-dark.svg";
import Flavor1 from "../assets/hookah/flavor1.png";
import Flavor2 from "../assets/hookah/flavor2.png";
import Flavor3 from "../assets/hookah/flavor3.png";
import Line from "../assets/happy-hour/line.png";
import InstaIcon from "../assets/insta-icon.png";
import "./happy-hour.scss";
import Contact from "../components/contact/contact";

const Hookah = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-block d-md-block d-lg-none ">
            <a href="/home">
              <img src={Logo} alt="Logo" height="40px" />
            </a>
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
              <a href="/home" className="d-none d-md-none d-lg-block">
                <img src={Logo} alt="Logo" />
              </a>
              <Nav.Link href="#link">Big Party</Nav.Link>
              <Nav.Link href="#link">Book a table</Nav.Link>
              {/* <Form.Select
                aria-label="Default select example"
                size="sm"
                className="ms-2"
              >
                <option>English</option>
                <option value="1">Spanish</option>
                <option value="2">Japanese</option>
              </Form.Select> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section
        className="inner-banner d-flex justify-content-center align-items-center py-3"
        style={{
          backgroundImage: `url(${require("../assets/happy-hour/banner.png")})`,
        }}
      >
        <Container className="text-center">
          <h1 data-aos="fade-down" data-aos-duration="1500">
            HAPPY HOUR
          </h1>
          <div className="sub-text" data-aos="zoom-in" data-aos-duration="1500">
            Enjoy double the relaxation with our Happy Hour Hookah: unwind in
            style!
          </div>
        </Container>
      </section>
      <section className="happy-hour-content-area py-5">
        <Container>
          <div
            className="title pb-5 text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Welcome to <br></br>
            our Hookah Happy Hour!
          </div>
          <p
            className="text-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Escape the ordinary and indulge in a relaxing oasis of flavor and
            atmosphere. Our Hookah Happy Hour is the ultimate destination for
            those seeking a unique experience. Here, we blend the art of
            traditional hookah with modern vibes, creating an ambiance perfect
            for unwinding with friends or meeting new ones.
          </p>
          <div className="row">
            <div className="col-md-4 text-center">
              <div
                className="happy-hour-day"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${require("../assets/happy-hour/happy-hour-img1.png")})`,
                  }}
                >
                  setting the tone for a fantastic week ahead
                </div>
                <div>
                  <img src={Line} alt="Line" className="mx-100" />
                </div>
                <div className="day">Monday</div>
                <div className="time">4pm-6pm</div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div
                className="happy-hour-day"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${require("../assets/happy-hour/happy-hour-img1.png")})`,
                  }}
                >
                  every inhale is a journey, & every exhale is bliss
                </div>
                <div>
                  <img src={Line} alt="Line" className="mx-100" />
                </div>
                <div className="day">Tuesday</div>
                <div className="time">4pm-6pm</div>
              </div>
            </div>
            <div
              className="col-md-4 text-center"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="happy-hour-day">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${require("../assets/happy-hour/happy-hour-img1.png")})`,
                  }}
                >
                  where ambiance is as inviting as the flavors
                </div>
                <div>
                  <img src={Line} alt="Line" className="mx-100" />
                </div>
                <div className="day">Wednesday</div>
                <div className="time">4pm-6pm</div>
              </div>
            </div>
            <div
              className="col-md-4 text-center"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="happy-hour-day">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${require("../assets/happy-hour/happy-hour-img1.png")})`,
                  }}
                >
                  where the flavors are as vibrant as the company
                </div>
                <div>
                  <img src={Line} alt="Line" className="mx-100" />
                </div>
                <div className="day">Thursday</div>
                <div className="time">4pm-6pm</div>
              </div>
            </div>
            <div
              className="col-md-4 text-center"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <div className="happy-hour-day">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${require("../assets/happy-hour/happy-hour-img1.png")})`,
                  }}
                >
                  every flavor is a taste of relaxation
                </div>
                <div>
                  <img src={Line} alt="Line" className="mx-100" />
                </div>
                <div className="day">Friday</div>
                <div className="time">4pm-6pm</div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            <div className="col-md-7">
              <div className="title2 text-center pb-5">
                Let's Enjoy-Eat-Drink-Relax Smoke Hookah
              </div>
              <p className="text-center">Looking for a place to unwind after a long day? Need a unique spot to celebrate with friends? Look no further than our Hookah Happy Hour. Join us and elevate your evening with a touch of exotic luxury."</p>
            </div>
          </div>
         

          <div
            className="perfect-place mt-5"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="bg-img text-center d-flex align-items-center justify-content-center">
              <div>
                <div className="title4 pb-4">Perfect place for Big party</div>
                <p>
                  Indulge in culinary excellence with us; your reservation is
                  the gateway to an unforgettable dining adventure.
                </p>
                <Button variant="primary" className="book-btn mt-3">
                  Book a Table
                </Button>
              </div>
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
      {/* <section className="home-contact-sec py-5">
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
      </section> */}
      <Contact />
      <footer>
        <Container>
          <div className="footer-menu text-center">
            <a href="/home">HOME</a> <a href="/menu">Menu</a>{" "}
            <a href="/hookah">Hookah</a> <a href="#">Happy HoUR</a> <br></br>
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

export default Hookah;
