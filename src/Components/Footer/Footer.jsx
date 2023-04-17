import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
function Footer() {

  useEffect(() =>{
    Aos.init(
      {
        duration: 2000,
      }
    )
  }, [])

  return <div className="footer">
    <div className="footerContainer container">
      <div className="footerMenuDiv grid">
        {/* SingleGrid */}
        <div data-aos='fade-up' className="singleGrid">
          <span className="footerTitle">About</span>
          <span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </span>
        </div>
         {/* SingleGrid 2 */}
         <div data-aos='fade-up' className="singleGrid">
          <span className="footerTitle">Become Seller</span>
          <span>
            <ul className="footerUl grid">
              <li className="footerLi">Add Vehicles</li>
              <li className="footerLi">Resource center</li>
              <li className="footerLi">Bonds</li>
              <li className="footerLi">Release Dates</li>
            </ul>
          </span>
        </div>
         {/* SingleGrid 3 */}
         <div data-aos='fade-up' className="singleGrid">
          <span className="footerTitle">Community</span>
          <span>
            <ul className="footerUl grid">
              <li className="footerLi">Recommendations</li>
              <li className="footerLi">Gift Cards</li>
              <li className="footerLi">Top Ups</li>
              <li className="footerLi">Selling</li>
            </ul>
          </span>
        </div>
         {/* SingleGrid 4*/}
         <div data-aos='fade-up' className="singleGrid">
          <span className="footerTitle">Booking Support</span>
          <span>
            <ul className="footerUl grid">
              <li className="footerLi">Updates for Covid 19</li>
              <li className="footerLi">Help center</li>
              <li className="footerLi">Garages</li>
              <li className="footerLi">Trust & Safety</li>
            </ul>
          </span>
        </div>
      </div>

      {/* Footer Lower section */}
      <div className="lowerSection grid">
        <p>2023 All right reserved</p>
        <blockquote>Cuong Project</blockquote>
      </div>
    </div>
  </div>;
}

export default Footer;
