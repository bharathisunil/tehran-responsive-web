import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoDark from "../assets/logo-dark.svg";
import Logo from "../assets/logo.svg";
import Cocktails from "../assets/menu/cocktail.png";
import Drinks from "../assets/menu/drinks.png";
import Hookah from "../assets/menu/hookah.png";
import MenuImg1 from "../assets/menu/menu-img1.png";
import Salad from "../assets/menu/salad.png";
import Tapas from "../assets/menu/tapas.png";
import Contact from "../components/contact/contact";
import "./menu.scss";
import { useState } from "react";
import FunctionalCarousel from "../components/CardCarousel/FunctionalCarousel";

const Menu = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleCardClick = (img) => {
    setModalImage(img);
  };

  const closeModal = () => {
    setModalImage(null);
  };
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
                <Button
                  variant="primary"
                  className="book-btn mt-3 d-inline-flex justify-content-center align-items-center"
                  href="/book-table"
                >
                  Book a Table
                </Button>
              </div>
            </div>
          </div>
          <FunctionalCarousel />

          <Accordion
            // defaultActiveKey="0"
            data-bs-theme="dark"
            className="custom-accordion mt-4 pt-4"
          >
            {/* <Accordion.Item eventKey="0">
              <a
                className="item-name"
                style={{ textDecoration: "none", color: "white", fontSize: 16 }}
                href="https://drive.google.com/file/d/1zWhJEE4JEfw5VMAcLXtFIN33ZSQqkauc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Accordion.Header>
                  <span style={{ paddingRight: 12 }}>Full Menu </span>
                  <img
                    src="/pdf-icon.png"
                    alt="menu icon"
                    style={{ height: 59 / 2, width: 48 / 2, resize: "contain" }}
                  />
                </Accordion.Header>
              </a>
            </Accordion.Item> */}
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
              <Accordion.Body>
                <div className="row gx-5">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">CHICKEN NUGGETS & FRIES</div>
                        <div className="item-description">
                          Juicy nuggets with crispy, golden fries.
                        </div>
                      </div>
                      <div className="item-price">$7.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">CHICKEN KABOB</div>
                        <div className="item-description">
                          Marinated chicken, grilled to perfection.
                        </div>
                      </div>
                      <div className="item-price">$6.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">NACHO MOUNTAIN</div>
                        <div className="item-description">
                          Tortilla chips piled high with cheese and toppings.
                        </div>
                      </div>
                      <div className="item-price">$11.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">LAMB KABOB</div>
                        <div className="item-description">
                          Juicy, spiced lamb, expertly grilled.
                        </div>
                      </div>
                      <div className="item-price">$8.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">TEHRAN TACOS</div>
                        <div className="item-description">
                          (BEEF OR CHICKEN) <br></br>
                          Spiced meats with vibrant, fresh toppings.
                        </div>
                      </div>
                      <div className="item-price">$7.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">ALOO TIKI</div>
                        <div className="item-description">
                          Seasoned potato patties with aromatic spices
                        </div>
                      </div>
                      <div className="item-price">$4.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">VEG SAMOSA (2)</div>
                        <div className="item-description">
                          Flaky pastry stuffed with spiced potatoes and peas.
                        </div>
                      </div>
                      <div className="item-price">$4.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">CHICKEN SPRING ROLL</div>
                        <div className="item-description">
                          Golden rolls with tender, spiced chicken.
                        </div>
                      </div>
                      <div className="item-price">$6.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">VEG SPRING ROLL (3)</div>
                        <div className="item-description">
                          Crisp rolls filled with seasoned vegetables.
                        </div>
                      </div>
                      <div className="item-price">$4.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">CHICKEN WINGS</div>
                        <div className="item-description">
                          Marinated wings, fried to golden crispiness.
                        </div>
                      </div>
                      <div className="item-price">$8.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">BEEF SKEWERS</div>
                        <div className="item-description">
                          Marinated beef, grilled to tender perfection.
                        </div>
                      </div>
                      <div className="item-price">$8.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">CHICKEN SKEWERS</div>
                        <div className="item-description">
                          Herb-marinated chicken, char-grilled.
                        </div>
                      </div>
                      <div className="item-price">$6.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">BUTTERFLY SHRIMP</div>
                        <div className="item-description">
                          Crispy, golden-battered shrimp.
                        </div>
                      </div>
                      <div className="item-price">$6.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">BEEF GYRO</div>
                        <div className="item-description">
                          Tender beef, wrapped in soft pita with tzatziki.
                        </div>
                      </div>
                      <div className="item-price">$9.99</div>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Sides</Accordion.Header>
              <Accordion.Body>
                <div className="row gx-5">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">FRENCH FRIES</div>
                      </div>
                      <div className="item-price">$7.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">TZATZIKI SAUCE </div>
                      </div>
                      <div className="item-price">$1.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">TORTILLA CHIPS & SALSA</div>
                      </div>
                      <div className="item-price">$7.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">KETCHUP</div>
                      </div>
                      <div className="item-price">FREE</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div>
                        <div className="item-name">HUMMUS & PITA</div>
                      </div>
                      <div className="item-price">$9.99</div>
                    </div>
                  </div>
                  <div className="col-12 menu-item">
                    <div className="item-description">
                      ALL CHECKS ARE SUBJECTED TO A 18% SOCIETY FEE(keep this
                      line on center)
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
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
                              APRICOT <br></br>
                              CAPPUCCINO <br></br>
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
                  <div className="item-name">
                    WATER I MILK +$6 | ICE +$6 | RED BULL +$10 I SANGRIA +$13 |
                    FRUIT +$14
                  </div>
                </div>
                <div className="menu-sub-title">3. CHOOSE A HEAD</div>
                <div className="menu-item pb-4">
                  <div className="item-name">
                    CLASSIC I VINTAGE CERAMIC +$6 I FRESH PINEAPPLE +$10
                  </div>
                </div>
                <div className="menu-sub-title">
                  4. CHOOSE AN ADD-ON (OPTIONAL)
                </div>
                <div className="menu-item pb-4">
                  <div className="item-name">
                    LOLIPOP-TIPS +$4 | BUBBLES +$6 | ICED HOSE +$8 | LED BASE
                    +$9
                  </div>
                </div>
                <div className="menu-sub-title">ALL REFILLS $9.99</div>
                <div>ALL CHECKS ARE SUBJECTED TO A 18% SOCIETY FEE</div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Drinks</Accordion.Header>
              <Accordion.Body>
                <div className="menu-sub-title pb-4">BEER</div>
                <div className="row g-5 menu-item">
                  <div className="col-md-6">
                    <div className="item-name">
                      IMPORTED BRANDS -- $6.99 I BUCKET (5) 28.99
                    </div>
                    <div className="item-description">
                      CORONA EXTRA <br></br>
                      CORONA LIGHT <br></br>
                      CORONA PREMIER <br></br>
                      STELLA <br></br>
                      MODELO <br></br>
                      HEINEKEN <br></br>
                      RED STRIPE
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="item-name">DRAFT BEERS -- $7.99</div>
                    <div className="item-description">
                      BUD LIGHT <br></br>
                      YUENGLING <br></br>
                      WICKED WEED <br></br>
                      IPA <br></br>
                      BLUE MOON
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="item-name">SMIRNOFF ICE $6.99</div>
                    <div className="item-description">
                      ORIGINAL <br></br>
                      MARGARITA <br></br>
                      PEACH <br></br>
                      GREEN APPLE <br></br>
                      PINK <br></br>
                      ORANGE <br></br>
                      GRAPE
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item-name">
                      DOMESTIC BRANDS $5.99 | BUCKET (5) 25.99
                    </div>
                    <div className="item-description">
                      BUD LIGHT <br></br>
                      MILLER LITE <br></br>
                      COORS LIGHT
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="item-name">VODKA SODA $5.99</div>
                    <div className="item-description">
                      MOJITO <br></br>
                      LIME <br></br>
                      GRAPEFRUIT <br></br>
                      CUCUMBER
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="item-name">WHITE CLAW $6.99</div>
                    <div className="item-description">
                      MANGO <br></br>
                      LIME <br></br>
                      CHERRY <br></br>
                      RASBERRY
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">WATER</div>
                      <div className="item-price">$2.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">
                        JUICE <span className="item-description">(MANGO)</span>
                      </div>
                      <div className="item-price">$5.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">
                        SODA{" "}
                        <span className="item-description">
                          {" "}
                          (COKE I DIET COKE I SPRITE I GINGER ALE I PEPSI DIET){" "}
                        </span>
                      </div>
                      <div className="item-price">$3.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">PERRIER</div>
                      <div className="item-price">$4.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">
                        ENERGY DRINKS{" "}
                        <span className="item-description">
                          {" "}
                          (RED BULLI BANG I MONSTER){" "}
                        </span>
                      </div>
                      <div className="item-price">$6.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">GATORADE </div>
                      <div className="item-price">$3.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">STARBUCKS CAPPICINO </div>
                      <div className="item-price">$6.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">
                        LAZIZA{" "}
                        <span className="item-description">
                          {" "}
                          (REGULAR I RASPBERRY | PEACH I STRAWBERRY | APPLE I
                          POMEGRANTE){" "}
                        </span>
                      </div>
                      <div className="item-price">$4.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">
                        SMOOTHIES{" "}
                        <span className="item-description">
                          {" "}
                          (STRAWBERRY I BANANA I MIXED){" "}
                        </span>
                      </div>
                      <div className="item-price">$9.99</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">PROSECCO WINE</div>
                      <div className="item-price">$8.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">WINE RED/WHITE</div>
                      <div className="item-price">$8.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">WINE BOTTLE</div>
                      <div className="item-price">$36.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">SANGRIA GLASS</div>
                      <div className="item-price">$8.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">SANGRIA BOTTLE</div>
                      <div className="item-price">$36.99</div>
                    </div>
                    <div className="d-flex justify-content-between menu-item pb-4">
                      <div className="item-name">MOËT BOTTLE</div>
                      <div className="item-price">$149.99</div>
                    </div>
                  </div>
                  <div className="col-12">
                    WINE BOTTLE: CHARDONNAY I PINOT NOIR I CABERNET I SAUVIGNON
                    I MERLOT I MOSCATO I ROSE
                  </div>
                  <div className="col-12">
                    ALL CHECKS ARE SUBJECTED TO A 18% SOCIETY FEE
                  </div>
                </div>
              </Accordion.Body>
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
{/* 
      <section className="side-dishes-sec-1">
        <div
          className="reserve-table"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <FunctionalCarousel />
        </div>
      </section> */}
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
