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
import "./hookah.scss";
import Contact from "../components/contact/contact";

const Hookah = () => {
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
          backgroundImage: `url(${require("../assets/hookah/banner.jpg")})`,
        }}
      >
        <Container className="text-center">
          <h1 data-aos="fade-down"
            data-aos-duration="1500">HOOKAH</h1>
          <div className="sub-text" data-aos="zoom-in"
            data-aos-duration="1500">
            Experience the rich flavors of shisha tobacco in a vibrant and
            welcoming atmosphere at our hookah lounge, perfect for socializing
            and relaxation.
          </div>
        </Container>
      </section>
      <section className="hokah-content-area py-5">
        <Container>
          <div className="title pb-5 text-center" data-aos="fade-up"
            data-aos-duration="1500">
            Welcome to <br></br>
            Tehran hookah lounge
          </div>
          <p className="text-center" data-aos="fade-right"
            data-aos-duration="1500">
            Welcome to our vibrant hookah lounge, where every puff is an
            experience and every moment is filled with relaxation and
            camaraderie. Nestled in the heart of [Location], our lounge offers a
            haven for hookah enthusiasts and socialites alike.
          </p>
          <p className="text-center" data-aos="fade-left"
            data-aos-duration="1500">
            Step into our inviting space and immerse yourself in the aromas of
            our premium shisha blends, carefully curated to tantalize your
            senses. Whether you're a seasoned aficionado or new to the world of
            hookah, our knowledgeable staff is here to guide you through our
            extensive menu and ensure a personalized experience tailored to your
            preferences
          </p>
          <div className="escape-flavor row align-items-center">
            <div className="col-md-1"></div>
            <div className="col-8 col-md-7 text-end" data-aos="fade-right"
            data-aos-duration="1500">
              <div className="title2">
                Escape with flavor-filled clouds: Hookah awaits.
              </div>
              <p>
                Discover the allure of our handcrafted shisha blends and indulge
                in moments of pure indulgence. Join us and unlock the secrets of
                hookah culture, where each session becomes a cherished memory.
              </p>
            </div>
          </div>
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <div className="title3" data-aos="fade-down"
            data-aos-duration="1500">Top picked</div>
              <div className="title pb-4" data-aos="zoom-in"
            data-aos-duration="1500">Hookah Flavours</div>
              <p data-aos="fade-up"
            data-aos-duration="1500">
                Delve into a world of tantalizing flavors with our diverse range
                of hookah blends. From timeless classics like mint and fruit
                medley to adventurous concoctions like blueberry ice and
                pineapple coconut, our selection caters to every taste bud. Each
                flavor is carefully crafted to deliver a smooth and satisfying
                smoking experience, leaving you craving for more. Elevate your
                hookah sessions with our premium flavors and embark on a journey
                of sensory delight.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 text-center pb-3">
              <div className="flavour-box" data-aos="zoom-in"
            data-aos-duration="1500">
                <div className="mb-3">
                  <img src={Flavor1} alt="Flavor" />
                </div>
                <div className="flavour-name pb-3">Aladin Wave</div>
                <div className="price pb-4">$650</div>
              </div>
            </div>
            <div className="col-md-4 text-center pb-3">
              <div className="flavour-box" data-aos="zoom-in"
            data-aos-duration="1500">
                <div className="mb-3">
                  <img src={Flavor2} alt="Flavor" />
                </div>
                <div className="flavour-name pb-3">Alpha Hookah Model C</div>
                <div className="price pb-4">$370</div>
              </div>
            </div>
            <div className="col-md-4 text-center pb-3">
              <div className="flavour-box" data-aos="zoom-in"
            data-aos-duration="1500">
                <div className="mb-3">
                  <img src={Flavor3} alt="Flavor" />
                </div>
                <div className="flavour-name pb-3">Alpha Hookah Model A</div>
                <div className="price pb-4">$520</div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-7">
              <div className="title text-center pb-3" data-aos="fade-down"
            data-aos-duration="1500">Why Choose Us</div>
              <div className="title3 text-center pb-5" data-aos="fade-up"
            data-aos-duration="1500">
                Enjoying quality time with friends is an essential component of
                a fulfilling life
              </div>
              <p data-aos="zoom-in"
            data-aos-duration="1500">
                Discover the ultimate hookah experience with us. Our exceptional
                quality, diverse flavors, and top-notch service make us the
                preferred choice for hookah enthusiasts. Explore our extensive
                selection of premium shisha blends and accessories, curated to
                elevate your smoking sessions to new heights. With our
                commitment to excellence and customer satisfaction, your hookah
                journey starts and thrives with us.
              </p>
            </div>
          </div>
          <div className="row pb-5 text-center">
            <div className="col-md-4 count" data-aos="fade-right"
            data-aos-duration="1500">
              <div className="number">30+</div>
              <div className="count-label">Food Variants</div>
            </div>
            <div className="col-md-4 count" data-aos="zoom-in"
            data-aos-duration="1500">
              <div className="number">100+</div>
              <div className="count-label">Capacity</div>
            </div>
            <div className="col-md-4 count" data-aos="fade-left"
            data-aos-duration="1500">
              <div className="number">Cool</div>
              <div className="count-label">Atmosphere</div>
            </div>
          </div>
          <div className="perfect-place mt-5" data-aos="zoom-in"
            data-aos-duration="1500">
            <div className="bg-img text-center d-flex align-items-center justify-content-center">
              <div>
                <div className="title4 pb-4">Perfect place for Big party</div>
                <p>
                Indulge in culinary excellence with us; your reservation is the gateway to an unforgettable dining adventure.
                </p>
                <Button variant="primary" className="book-btn mt-3">
                  Book a Table
                </Button>
              </div>
            </div>
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
      <Contact/>
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

export default Hookah;
