import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './index.css';
import { AiOutlineBars } from "react-icons/ai";
import useWindowDimensions from "../window-dimension";

function Navigation() {
  const [showNavIcon, setNavIcon] = useState(false);


  const onClickNavIcon = () => {
    setNavIcon(prevState => !prevState)
  }

  return (
    <div className="navOuterDiv">
      <Link to="/">
        <img src={'/assets/LOGO.jpg'} className="logo" />
      </Link>

      {
        useWindowDimensions().width < 616
          ?
          <div className="navIcon">
            <button data-testid="navIcon" onClick={onClickNavIcon}>
              <AiOutlineBars />
            </button>
          </div>
          : <div className="linkDiv">
            <Link className="link" to="/"> <img src={'/assets/HomeIcon.png'} className="NavIcons" /> HOME</Link>
            <Link className="link" to="/product"><img src={'/assets/ProductIcon.png'} className="NavIcons" /> PRODUCT</Link>
            <Link className="link" to="/about"> <img src={'/assets/AboutUsIcon.png'} className="NavIcons" />ABOUT US</Link>
            <Link className="link" to="/contact"><img src={'/assets/ContactUsIcon.png'} className="NavIcons" /> CONTACT</Link>
          </div>
      }
      {
        showNavIcon && <div aria-label="navData" className="showNavData">
          <Link className="link" to="/"><img src={'/assets/HomeIcon.png'} className="NavIcons" /> HOME</Link>
          <Link className="link" to="/product"> <img src={'/assets/ProductIcon.png'} className="NavIcons" />PRODUCT</Link>
          <Link className="link" to="/about"><img src={'/assets/AboutUsIcon.png'} className="NavIcons" /> ABOUT US</Link>
          <Link className="link" to="/contact"> <img src={'/assets/ContactUsIcon.png'} className="NavIcons" />CONTACT</Link>
        </div>
      }
    </div>
  );
}

export default Navigation;
