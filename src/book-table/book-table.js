import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../assets/logo.svg";
import LogoDark from "../assets/logo-dark.svg";
import InstaIcon from "../assets/insta-icon.png";
import BookatableHookah from "../assets/book-table/bookatable-hookah-img.png";
import BookatableImg1 from "../assets/book-table/booktable-img1.png";
import BookatableImg2 from "../assets/book-table/booktable-img2.png";
import BookatableImg3 from "../assets/book-table/booktable-img3.png";
import "./book-table.scss";
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
              <Nav.Link href="/happy-hour">Happy Hour</Nav.Link>
              <a href="/home" className="d-none d-md-none d-lg-block">
                <img src={Logo} alt="Logo" />
              </a>
              <Nav.Link href="/big-party">Big Party</Nav.Link>
              <Nav.Link href="/book-table">Book a table</Nav.Link>
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
          backgroundImage: `url(${require("../assets/book-table/banner.png")})`,
        }}
      >
        <Container className="text-center">
          <h1 data-aos="fade-down" data-aos-duration="1500">
            Book Your Table
          </h1>
          <div className="sub-text" data-aos="zoom-in" data-aos-duration="1500">
            Join us for an unforgettable experience
          </div>
        </Container>
      </section>
      <section className="book-table-content-area py-5">
        <Container>
          <div
            className="title pb-3 text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Experience Hookah Flavours
          </div>
          <div className="sub-text1 text-center pb-4">
            Indulge in a Journey of Flavor and Atmosphere
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
          <div className="title3 text-center pb-4">Reservation</div>
          <form>
            <div className="row">
              <div className="col-md-6 pb-3">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Full Name"
                  className="w-100"
                  name="email"
                />
              </div>
              <div className="col-md-3 pb-3">
                <Form.Control
                  size="lg"
                  type="date"
                  placeholder="Date"
                  className="w-100"
                  name="first_name"
                />
              </div>
              <div className="col-md-3 pb-3">
                <Form.Control
                  size="lg"
                  type="time"
                  placeholder="Time"
                  className="w-100"
                  name="last_name"
                />
              </div>

              <div className="col-md-3 pb-3">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Mobile"
                  className="w-100"
                  name="password"
                />
              </div>
              <div className="col-md-3 pb-3" data-bs-theme="dark">
                <Form.Select>
                  <option>2</option>
                  <option value="1">4</option>
                  <option value="2">6</option>
                  <option value="3">8</option>
                </Form.Select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 pb-3">
                <Button type="submit" value="Send" className="book-btn">
                  Reserve
                </Button>
              </div>
            </div>
          </form>
          <div className="text-center">
            <img
              src={BookatableHookah}
              alt="BookatableHookah"
              className="mw-100"
            ></img>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src={BookatableImg1}
                alt="BookatableImg1"
                className="mw-100"
              ></img>
              <div className="sub-text2">Flavourful <br></br> Journey</div>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={BookatableImg2}
                alt="BookatableImg2"
                className="mw-100"
              ></img>
              <div className="sub-text2">Expertly Crafted Cocktails</div>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={BookatableImg3}
                alt="BookatableImg3"
                className="mw-100"
              ></img>
              <div className="sub-text2">
                Enchanting <br></br>Atmosphere
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-4 right-line">
              <div className="sub-text1">Special Request</div>
              <p>
                Let us know if you have any special requests or preferences, and
                we'll do our best to accommodate you.
              </p>
            </div>
            <div className="col-md-4 right-line">
              <div className="sub-text1">How to Reserve</div>
              <p>
              Booking your table is quick and easy. Simply fill out the form on this page with your desired date, time, and contact information. Our team will confirm your reservation promptly.
              </p>
            </div>
            <div className="col-md-4">
              <div className="sub-text1">Contact Us</div>
              <p>
              Have questions or need assistance? Feel free to reach out to our friendly staff, who are always happy to help.
              </p>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            <div className="col-md-10">
              <div className="title2 text-center pb-3">
                @Tehran - Where Every Moment is Memorable
              </div>
              <p className="text-center">
                guide you through a journey of flavor, culture, and camaraderie,
                where every puff is a moment to savor
              </p>
            </div>
          </div>

          <div
            className="followus-box mt-5 position-relative justify-content-between align-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="d-flex align-items-center">
              <div className="border-right px-3 me-3">
                <img src={InstaIcon} alt="Instagram" />
              </div>
              <div className="text-start">
                Follow us and stay up to date{" "}
                <span className="tag-text">@Tehranhookahlounge</span>
              </div>
            </div>
            <a
              href="https://www.instagram.com/tehranhookahlounge/?hl=en"
              target="_blank"
            >
              <button className="followus-btn" onClick={() => {}}>
                Follow Us
              </button>
            </a>
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
            <a href="/hookah">Hookah</a> <a href="/happy-hour">Happy Hour</a>{" "}
            <br></br>
            <a href="/big-party">Big Party</a>{" "}
            <a href="/book-table">Book a table</a>
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
