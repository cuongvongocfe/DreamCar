import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Sellers.css";
//import img
import sellerImage1 from "../../assets/toyota-logo.png";
import sellerImage2 from "../../assets/Mercedes-Logo.png";
import sellerImage3 from "../../assets/volkswagen-logo.png";
import sellerImage4 from "../../assets/hyundai-logo.png";
const Sellers = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="sellers section">
      <div className="secContainer container">
        <div data-aos="fade-up" className="secHeading grid">
          <h3 className="secTitle">Explore top seller in town</h3>
          <p>
            Joseph Samuel Girard holds the Guiness World Record for being the
            greatest salesman in the world
          </p>
        </div>
        <div className="sellersContainer grid">
          {/* Single seller */}
          <div data-aos="fade-up" className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>

          <div data-aos="fade-up" className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage2} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Mercedes</h4>
              <p>from $60k</p>
            </span>
          </div>
          <div data-aos="fade-up" className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage3} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Volkswagen</h4>
              <p>from $35k</p>
            </span>
          </div>
          <div data-aos="fade-up" className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage4} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Hyundai</h4>
              <p>from $23k</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
