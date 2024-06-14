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
import Accordion from "react-bootstrap/Accordion";

const Hookah = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
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
          <Accordion
            defaultActiveKey="0"
            data-bs-theme="dark"
            className="custom-accordion"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hookah</Accordion.Header>
              <Accordion.Body>
              <div className="menu-sub-title pb-4">1. CHOOSE YOUR FLAVOR</div>
                <div className="row gx-5">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="w-100">
                        <div className="item-name">ADAYA</div>
                        <div className="item-description">
                          <div className="row">
                            <div className="col-4 text-nowrap">
                              EXAGELADO <br></br>
                              SWISS BONBON <br></br>
                              BAKU NIGHTS <br></br>
                              BLUE MELON <br></br>
                              MINT <br></br>
                              LOVE 66
                            </div>
                            <div className="col-4 text-nowrap">
                              ICE RASPBERRY <br></br>
                              MANGO TANGO <br></br>
                              BLUEBERRY <br></br>
                              LADY KILLER <br></br>
                              LEMON COCKTAIL <br></br>
                              WATERMELON
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-price">$28.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="w-100">
                        <div className="item-name">STARBUZZ </div>
                        <div className="item-description">
                          <div className="row">
                            <div className="col-4 text-nowrap">
                              BLUE MIST <br></br>
                              CODE 69 <br></br>
                              SEX ON THE BEACH <br></br>
                              GREEN SAVIOR
                            </div>
                          </div>
                          </div>
                      </div>
                      <div className="item-price">$28.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">AL FAHKER</div>
                        <div className="item-description">
                          <div className="row">
                            <div className="col-6 col-md-3 text-nowrap">
                              CINNAMON GUM <br></br>
                              CHERRY <br></br>
                              GRAPE <br></br>
                              BUBBLEGUM <br></br>
                              MIXED BERRY <br></br>
                              ROSE <br></br>
                              LEMON <br></br>
                              ORANGE <br></br>
                              MINT
                            </div>
                            <div className="col-6 col-md-3 text-nowrap">
                            COCONUT <br></br>
                            MELON <br></br>
                            FRESH <br></br>
                            HUBBLY <br></br>
                            CHOCOLATE <br></br>
                            APRICOT  <br></br>
                            CAPPUCCINO  <br></br>
                            PAN RAAS <br></br>
                            STRAWBERRY
                            </div>
                            <div className="col-6 col-md-3 text-nowrap">
                            MANGO <br></br>
                            KIWI <br></br>
                            PINEAPPLE <br></br>
                            PEACH <br></br>
                            GRAPEFRUIT <br></br>
                            GUM <br></br>
                            GUAVA <br></br>
                            GRENADINE <br></br>
                            VANILLA
                            </div>
                            <div className="col-6 col-md-3 text-nowrap">
                            WATERMELON <br></br>
                            BANANA <br></br>
                            DOUBLE APPLE <br></br>
                            BLUEBERRY <br></br>
                            STRAWBERRY W/ CREAM
                            </div>
                          </div>
                          </div>
                      </div>
                      <div className="item-price">$24.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">AFZAL</div>
                        <div className="item-description">PAN RAAS</div>
                      </div>
                      <div className="item-price">$22.99</div>
                    </div>
                  </div>
                </div>
                <div className="menu-sub-title">2. CHOOSE A BASE</div>
                <div className="menu-item pb-4">
                  <div className="item-name">WATER I MILK +$6 | ICE +$6 | RED BULL +$10 I SANGRIA +$13 | FRUIT +$14</div>
                </div>
                <div className="menu-sub-title">3. CHOOSE A HEAD</div>
                <div className="menu-item pb-4">
                  <div className="item-name">CLASSIC I VINTAGE CERAMIC +$6 I FRESH PINEAPPLE +$10</div>
                </div>
                <div className="menu-sub-title">4. CHOOSE AN ADD-ON (OPTIONAL)</div>
                <div className="menu-item pb-4">
                  <div className="item-name">LOLIPOP-TIPS +$4 | BUBBLES +$6 | ICED HOSE +$8 | LED BASE +$9</div>
                </div>
                <div className="menu-sub-title">ALL REFILLS $9.99</div>
                <div>ALL CHECKS ARE SUBJECTED TO A 18% SOCIETY FEE</div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="row justify-content-center text-center mb-5 mt-5">
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
                <Button variant="primary" className="book-btn mt-3 d-inline-flex justify-content-center align-items-center" href="/book-table">
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
            <a href="/home">HOME</a> <a href="/menu">Menu</a>{" "}
            <a href="/hookah">Hookah</a> <a href="/happy-hour">Happy Hour</a> <br></br>
            <a href="/big-party">Big Party</a> <a href="/book-table">Book a table</a>
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
