import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Taste the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>“Every time you use the word ‘healthy,’ you lose. The key is to make yummy, delicious food that happens to be healthy.” </p>
      <button type="button" className="custom__button"><div><a href="https://drive.google.com/file/d/1hs2cqZPGO05NM_NZsfxaEOPVsZoVz6kV/view?usp=sharing" target="blank">Explore Menu</a></div></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;