import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../assets/logo.svg";
import LogoDark from "../assets/logo-dark.svg";
import MenuImg1 from "../assets/menu/menu-img1.png";
import Salad from "../assets/menu/salad.png";
import Cocktails from "../assets/menu/cocktail.png";
import Tapas from "../assets/menu/tapas.png";
import Hookah from "../assets/menu/hookah.png";
import Drinks from "../assets/menu/drinks.png";
import "./menu.scss";
import Contact from "../components/contact/contact";
import Accordion from "react-bootstrap/Accordion";

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
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
          backgroundImage: `url(${require("../assets/menu/banner.jpg")})`,
        }}
      >
        <Container className="text-center">
          <h1 data-aos="fade-down" data-aos-duration="1500">
            MENU
          </h1>
          <div className="sub-text" data-aos="zoom-in" data-aos-duration="1500">
            Experience the rich flavors of shisha tobacco in a vibrant and
            welcoming atmosphere at our hookah lounge, perfect for socializing
            and relaxation.
          </div>
        </Container>
      </section>
      <section className="our-selection-sec pt-5 position-relative">
        <Container className="text-center">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div
                className="title pb-5"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Our Selection at Tehran hookah lounge
              </div>
              <p
                className="pb-4"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                Explore our enticing hookah menu, crafted to satisfy every
                palate. From classic flavors to exotic blends, our selection
                promises a delightful journey into the world of shisha. Whether
                you crave the richness of traditional tobacco or the excitement
                of innovative combinations, our menu invites you to indulge in
                an unforgettable hookah experience.
              </p>
              <div>
                <img
                  src={MenuImg1}
                  alt="Our selection"
                  className="mw-100 position-relative z-1"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="different-flavours pb-5">
        <Container>
          <div
            className="title pb-5 text-center"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            What we serve
          </div>
          <div className="row">
            <div
              className="col-6 col-md-3 text-center"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img src={Cocktails} alt="Our selection" className="mw-100" />
              <div className="serve-name pt-4">Cocktails</div>
            </div>
            <div
              className="col-6 col-md-3 text-center"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img src={Tapas} alt="Our selection" className="mw-100" />
              <div className="serve-name pt-4">Tapas</div>
            </div>
            <div
              className="col-6 col-md-3 text-center"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img src={Hookah} alt="Our selection" className="mw-100" />
              <div className="serve-name pt-4">Hookah</div>
            </div>
            <div
              className="col-6 col-md-3 text-center"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img src={Drinks} alt="Our selection" className="mw-100" />
              <div className="serve-name pt-4">Drinks</div>
            </div>
          </div>
          {/* <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="pb-3">
                <div className="flavour-name">Blue Dew</div>
                <p>A blend of blueberry and honeydew melon</p>
              </div>
              <div className="pb-3">
                <div className="flavour-name">Pina Colada</div>
                <p>Pineapple and coconut with vanilla overtones</p>
              </div>
              <div className="pb-3">
                <div className="flavour-name">Geisha</div>
                <p>Smooth notes of peach with a hint of minty “mist”</p>
              </div>
              <div className="pb-3">
                <div className="flavour-name">Irish Peach</div>
                <p>Peach with notes of creamy, citrus and spice</p>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="pb-3">
                <div className="flavour-name">Irish Peach</div>
                <p>Peach with notes of creamy, citrus and spice</p>
              </div>
              <div className="pb-3">
                <div className="flavour-name">Tropicool</div>
                <p>A Pineapple & Mixed Fruit Blend</p>
              </div>
              <div className="pb-3">
                <div className="flavour-name">Blue Dew</div>
                <p>A blend of blueberry and honeydew melon</p>
              </div>
              <div className="pb-3">
                <div className="flavour-name">Pina Colada</div>
                <p>Pineapple and coconut with vanilla overtones</p>
              </div>
            </div>
          </div> */}
        </Container>
      </section>
      <section className="side-dishes-sec">
        <Container>
          <div
            className="reserve-table"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="bg-img text-center d-flex align-items-center justify-content-center">
              <div>
                <div className="title pb-4">Reserve a table</div>
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

          <Accordion
            defaultActiveKey="0"
            data-bs-theme="dark"
            className="custom-accordion"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Cocktails</Accordion.Header>
              <Accordion.Body>
                <div className="row g-5">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Classic Mojito</div>
                        <div className="item-description">
                          Fresh mint, lime, rum and sparkling water
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Tequila Sunshine</div>
                        <div className="item-description">
                          Tequila, orange juice, grenadine sunset
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Classic Margarita</div>
                        <div className="item-description">
                          Tequila, lime juice and triple sec
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Rasberry Margarita</div>
                        <div className="item-description">
                          Tequila, raspberry puree, lime juice
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Pin Colada</div>
                        <div className="item-description">
                          Rum, coconut cream, pineapple juice
                        </div>
                      </div>
                      <div className="item-price">$12.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item">
                      <div>
                        <div className="item-name">Electic Slide</div>
                        <div className="item-description">
                          Vodka or Tequila, grapefruit juice, slated rim
                        </div>
                      </div>
                      <div className="item-price">$12.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Martini</div>
                        <div className="item-description">
                          Gin or vodka with dry vermouh
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Matador</div>
                        <div className="item-description">
                          Tequila, pineapple juice, lime{" "}
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">EL Nino</div>
                        <div className="item-description">
                          Tequila, rose, syrup, sliced strawberries, triple sec
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Paloma</div>
                        <div className="item-description">
                          Tequila, grapefruit puree, soda, lime
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Blue Long Island</div>
                        <div className="item-description">
                          Vodka, gin, rum, tequila, blue, curacao
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">Whiskey & Coke</div>
                        <div className="item-description">
                          Smooth whiskey with classic cola
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Tapas</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Hookah</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Drinks</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <div className="row justify-content-center text-center pb-5">
            <div className="col-md-9">
              <div className="title2">
                Side dishes to complement your hookah flavour
              </div>
            </div>
          </div> */}
          {/* <div
            className="sub-title position-relative mb-3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Salads
          </div>
          <div className="row" data-aos="fade-left" data-aos-duration="1500">
            <div className="col-md-6">
              <div className="d-flex dish">
                <div className="dish-img me-3">
                  <img src={Salad} alt="Dish" className="mw-100" />
                </div>
                <div>
                  <div className="dish-name">Caesar salad</div>
                  <p>
                    Сhopped romaine lettuce and garlicky croutons, eggs, olive
                    oil, lemon, Parmesan
                  </p>
                  <div className="price">$9.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex dish">
                <div className="dish-img me-3">
                  <img src={Salad} alt="Dish" className="mw-100" />
                </div>
                <div>
                  <div className="dish-name">Caesar salad</div>
                  <p>
                    Сhopped romaine lettuce and garlicky croutons, eggs, olive
                    oil, lemon, Parmesan
                  </p>
                  <div className="price">$9.00</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="sub-title position-relative mb-3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            Starters
          </div>
          <div className="row" data-aos="fade-left" data-aos-duration="1500">
            <div className="col-md-6">
              <div className="d-flex dish">
                <div className="dish-img me-3">
                  <img src={Salad} alt="Dish" className="mw-100" />
                </div>
                <div>
                  <div className="dish-name">French fries</div>
                  <p>
                    Сhopped romaine lettuce and garlicky croutons, eggs, olive
                    oil, lemon, Parmesan
                  </p>
                  <div className="price">$11.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex dish">
                <div className="dish-img me-3">
                  <img src={Salad} alt="Dish" className="mw-100" />
                </div>
                <div>
                  <div className="dish-name">Classic burger</div>
                  <p>
                    Сhopped romaine lettuce and garlicky croutons, eggs, olive
                    oil, lemon, Parmesan
                  </p>
                  <div className="price">$14.00</div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="sub-title position-relative mb-3">Mains</div>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex dish">
                <div className="dish-img me-3">
                  <img src={Salad} alt="Dish" className="mw-100" />
                </div>
                <div>
                  <div className="dish-name">Caesar salad</div>
                  <p>
                    Сhopped romaine lettuce and garlicky croutons, eggs, olive
                    oil, lemon, Parmesan
                  </p>
                  <div className="price">$9.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex dish">
                <div className="dish-img me-3">
                  <img src={Salad} alt="Dish" className="mw-100" />
                </div>
                <div>
                  <div className="dish-name">Caesar salad</div>
                  <p>
                    Сhopped romaine lettuce and garlicky croutons, eggs, olive
                    oil, lemon, Parmesan
                  </p>
                  <div className="price">$9.00</div>
                </div>
              </div>
            </div>
          </div> */}
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

export default Menu;
