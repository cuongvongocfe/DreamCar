import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Review.css";
//import icon
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'


//import image
import car1 from '../../assets/secc2.png'
import car2 from '../../assets/cadillac2023.png'
import car3 from '../../assets/2023-cadillac-escalade-v-black-front.png'

import user from '../../assets/tonystark.png'
import user2 from '../../assets/chrisevans.png'
import user3 from '../../assets/Chris_Hemsworth.png'



const Review = () => {

  useEffect(() =>{
    Aos.init(
      {
        duration: 2000,
      }
    )
  }, [])

  return <div className="review section">
    <div className="secContainer container">

      <div  data-aos='fade-up' className="secHeading flex">
        <h3 className="secTitle">
          Recent Reviews
        </h3>
        <div className="navBtns flex">
          <BsArrowLeftShort className="icon leftIcon"/>
          <BsArrowRightShort className="icon rightIcon"/>
        </div>
      </div>
      {/* review container */}
      <div className="reviewContainer grid">
        {/* single review */}
        <div data-aos='fade-up' className="singleReview grid">
          <div className="imgDiv">
            <img src={car1} alt="Car Image" />
          </div>
          <h5 className="reviewTitle">
            2023 Cadiallac
          </h5>
          <span className="desc">
            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
          </span>
          <div className="reviewerDiv flex">
            <div className="leftDiv flex">
              <div className="reviewImage">
                <img src={user} alt="Reviewer Image" />
              </div>
              <div className="aboutReviewer">
                <span className="name">Robert downey jr</span>
                <p>Iron Man</p>
              </div>
            </div>
            <div className="rightDiv ">
              <AiFillStar className="icon"/>
              <blockquote>4.84</blockquote>
            </div>
          </div>
        </div>
         {/* single review */}
         <div data-aos='fade-up' className="singleReview grid">
          <div className="imgDiv">
            <img src={car2} alt="Car Image" />
          </div>
          <h5 className="reviewTitle">
            2023 Cadiallac
          </h5>
          <span className="desc">
            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
          </span>
          <div className="reviewerDiv flex">
            <div className="leftDiv flex">
              <div className="reviewImage">
                <img src={user2} alt="Reviewer Image" />
              </div>
              <div className="aboutReviewer">
                <span className="name">Chris Evans</span>
                <p>Captain America</p>
              </div>
            </div>
            <div className="rightDiv ">
              <AiFillStar className="icon"/>
              <blockquote>4.84</blockquote>
            </div>
          </div>
        </div>
         {/* single review */}
         <div data-aos='fade-up' className="singleReview grid">
          <div className="imgDiv">
            <img src={car3} alt="Car Image" />
          </div>
          <h5 className="reviewTitle">
            2023 Cadiallac
          </h5>
          <span className="desc">
            Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.
          </span>
          <div className="reviewerDiv flex">
            <div className="leftDiv flex">
              <div className="reviewImage">
                <img src={user3} alt="Reviewer Image" />
              </div>
              <div className="aboutReviewer">
                <span className="name">Chris Hemsworth</span>
                <p>Thor</p>
              </div>
            </div>
            <div className="rightDiv ">
              <AiFillStar className="icon"/>
              <blockquote>4.84</blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Review;
