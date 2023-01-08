import React from "react";
import send from '../../assets/icon/footer/send.svg'
import headphone from "../../assets/icon/footer/headphone.svg";
import logo from "../../assets/logo/logo 1.svg";
import facebook from "../../assets/icon/footer/facebook.svg"
import google from "../../assets/icon/footer/google.svg";
import whatsapp from "../../assets/icon/footer/whatsapp.svg";
import "../../UI/footer.css";
function Footer() {
  return (
    <div className="footerBox">
      <div className="SubscribeBox">
        <div className="subNew">
          <h2>Subscribe newsletter</h2>
        </div>
        <div className="mailBtnBox">
          <p>Email address</p>
            <img src={send} />
        </div>
        <div className="callUs">
          <div>
          <img src={headphone}/>
          </div>
          <div className="callUsBox">
          <p>Call us 24/7:</p>
          <p>(+62)789 456 123</p>
          </div>  
        </div>
      </div>
      <div className="linkBox">
        <div className="social">
          <img src={logo} />
          <p>64 st james boulevard hoswick , ze2 7zj</p>
          <img src={facebook}/>
          <img src={google} />
          <img src={whatsapp} />
        </div>
          <div className="findProduct">
            <h5>Find product</h5>
            <ul className="footerUl">
              <li>Brownze arnold</li>
              <li>Chronograph blue</li>
              <li>Smart phones</li>
              <li>Automatic watch</li>
              <li>Hair straighteners</li>
            </ul>
          </div>
          <div className="findProduct">
            <h5>Get help</h5>
            <ul className="footerUl">
              <li>About us</li>
              <li>Contact us</li>
              <li>Return policy</li>
              <li>Privacy policy</li>
              <li>Payment policy</li>
            </ul>
          </div>
          <div className="findProduct">
            <h5>About us</h5>
            <ul className="footerUl">
              <li>News</li>
              <li>Service</li>
              <li>Our policy</li>
              <li>Customer care</li>
              <li>Faq’s</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Footer;
