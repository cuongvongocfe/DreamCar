import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Trending.css";
// import icon
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// import image
import car1 from "../../assets/Ford_Mustang_Dark_.png";
import car2 from "../../assets/McLaren-P1-GTR.png";
import car3 from "../../assets/Koenigsegg-One-1.png";
const Trending = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="trending section">
      <div className="secContainer container">
        <div data-aos="fade-up" className="secHeading flex">
          <h3 className="secTitle">Trending Near You</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Div */}
          <div data-aos="fade-up" className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Ford Mustang Dark Horse</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_seller flex">
              <span className="price">$60,865</span>
              <span className="seller">Best Seller</span>
            </div>
          </div>
          <div data-aos="fade-up" className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="carTitle">McLaren P1</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_seller flex">
              <span className="price">$3.3 Million</span>
              <span className="seller">Hyper Car</span>
            </div>
          </div>
          <div data-aos="fade-up" className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="carTitle">Koenigsegg One: 1</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_seller flex">
              <span className="price">$7.2 Million</span>
              <span className="seller">Hyper Car</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
