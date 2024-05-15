import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/slider-img01.jpg";
import img2 from "../assets/slider-img02.jpg";
import img3 from "../assets/slider-img03.jpg";
import img4 from "../assets/slider-img04.jpg";
import img5 from "../assets/slider-img05.jpg";
import "./IndividualIntervalsExample.scss";

function IndividualIntervalsExample() {
  return (
    <section className="carousel-sec1">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img1} alt="Image One" />
          <Carousel.Caption>
            <div className="titles">
              <div className="font1">Indulge in</div>
              <div className="font2">
                Exotic Flavour <span>&</span>
              </div>
              <div className="font3">Relaxing Atmosphere</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img2} alt="Image One" />
          <Carousel.Caption>
            <div className="titles">
              <div className="font1">Hookah whispers</div>
              <div className="font2">
              starters sizzle
              </div>
              <div className="font3">igniting conversations, flavors, shared moments</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img3} alt="Image One" />
          <Carousel.Caption>
            <div className="titles">
              <div className="font1">Flavor Voyage,</div>
              <div className="font2">
              Savor the Journey
              </div>
              <div className="font3">Dive into Our Irresistible Hookah Flavors</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img4} alt="Image One" />
          <Carousel.Caption>
            <div className="titles">
              <div className="font1">Unwind with Friends</div>
              <div className="font2">
              Embrace Flavor
              </div>
              <div className="font3">Create Lasting Memories</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 img-size" src={img5} alt="Image One" />
          <Carousel.Caption>
            <div className="titles">
              <div className="font1">Smoke and</div>
              <div className="font2">
              Celebrate
              </div>
              <div className="font3">Join the Hookah Extravaganza</div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default IndividualIntervalsExample;
