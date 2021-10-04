import { Carousel } from "react-bootstrap";
import "./Page.css";
import useService from "../Data/serviceDb";
import Service from "./Service";

const Home = () => {
  const [services] = useService();

  return (

    <div className="home-background">
      {/*===================================== Using  Carousel ffrom react bootstrap  */}
      <div className="header-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/background.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Best place for</h3>
              <h1>Music Career</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/background-2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Let's start a</h3>
              <h1>Music Career</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./image/flute-1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>The Life is </h3>
              <h1>Always Musical</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/*============================================= Main Section Start  */}
      <div className="main-section">
        <div className="welcome-section">
          {/*======================================== WellCome Section Start  */}
          <div className="welcome">
            <h1>Welcome To Us !</h1>
            <p className="text-uppercase">Attend out Music School</p>
            <div className="welcome-intro row justify-content-around align-items-center">
              <div className="welcome-image col-5">
                <img className="img-fluid" src="./image/guiter-1.jpg" alt="" />
              </div>
              <div className="welcome-content text-center col-5">
                <span className="short-para text-uppercase">Welcome There</span>
                <h1>Rythmo Music School</h1>
                <p>
                  At our School, we share our passion for music with students
                  from all walks of life. Whether young or old, beginner or
                  master, our students grow!
                </p>
                <button className="btn-more btn-warning rounded text-uppercase p-2 ">
                  More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*========================================================= Service Section Start  */}
        <div className="service-section">
          <h1>Service</h1>
          <p>
            A variety of musical instruments are taught by world famous artists on this website.
          </p>
          <div className="row justify-content-around align-items-center">
            {services.slice(0, 4).map((service) => (
              <Service key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
