import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Auction.css";
//import icon
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
//import image
import car1 from "../../assets/honda-civic-black.png";
function Auction() {

  useEffect(() =>{
    Aos.init(
      {
        duration: 2000,
      }
    )
  }, [])

  return (
    <div className="auction section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Active Auctions</h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon rightIcon" />
          </div>
        </div>

        <div className="carContainer grid">
          {/* Single Car Div */}
          <div data-aos="fade-up"  className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Honda Civic Type R</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_buyBtn flex">
              <span className="price">$44,390</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div data-aos="fade-up"  className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Honda Civic Type R</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_buyBtn flex">
              <span className="price">$44,390</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div data-aos="fade-up"  className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Honda Civic Type R</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_buyBtn flex">
              <span className="price">$44,390</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div data-aos="fade-up"  className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Honda Civic Type R</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_buyBtn flex">
              <span className="price">$44,390</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div data-aos="fade-up"  className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Honda Civic Type R</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_buyBtn flex">
              <span className="price">$44,390</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
          <div data-aos="fade-up"  className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Honda Civic Type R</h5>
            <span className="miles">11547 Miles</span>
            <span className="AWD">Twin-Turbo V8</span>
            <div className="price_buyBtn flex">
              <span className="price">$44,390</span>
              <span className="buyBtn">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auction;
