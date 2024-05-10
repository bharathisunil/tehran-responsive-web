import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/slider-img01.jpg";
import img2 from "../assets/slider-img02.jpg";
import img3 from "../assets/slider-img03.jpg";
import img4 from "../assets/slider-img04.jpg";
import img5 from "../assets/slider-img05.jpg";
import "./IndividualIntervalsExample.css"

function IndividualIntervalsExample() {
  return (
    <section className="carousel-sec1">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img1} alt="Image One" />
          <Carousel.Caption>
            <div className="font1">Indulge in</div>
            <div className="font2">
              Exotic Flavour <span>&</span>
            </div>
            <div className="font3">Relaxing Atmosphere</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img2} alt="Image One" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img3} alt="Image One" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img4} alt="Image One" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img5} alt="Image One" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default IndividualIntervalsExample;
