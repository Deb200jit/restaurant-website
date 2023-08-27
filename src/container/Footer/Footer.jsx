import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Anandapur, Kolkata, 700150, India</p>
        <p className="p__opensans">+91 9064710574</p>
        <p className="p__opensans">+91 9641431386</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        
        <img src={images.spoon} className="spoon__img" alt='spoon__img' style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/debjit.bera.23" target="blank"> <FiFacebook  /> </a>
          <a href="https://twitter.com/DebjitBera12" target="blank"> <FiTwitter /> </a>
          <a href="https://www.instagram.com/deb_2000_jit/" target="blank">  <FiInstagram /> </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 11:30 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 03:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Thai Tanic. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;