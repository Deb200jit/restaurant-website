import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Apart from being great builders, the Mughals were also known as great food connoisseurs. Almost every Mughal emperor has passed on his personal receipe as he moved along the passage of time, which is known as Mughlai food. This is why perhaps the influence of Mughals is most felt in their food. To get the real taste of authentic Mughlai cuisine one need to visit GERICHT a trusted name in Mughlai dishes at the heart of the city of joy.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">In 2020 our Founders, Debjit and Sulagna, were hungry to build a new kind of restaurant. One that makes people the focus, and quality the bottom line.

Debjit was in search of fresh flavor and inspiration, and Sulagna wanted a place that served fresh, fast food he felt good about feeding to his kids.

So they hit the road and (lucky for us) found just what they were looking for in Kolkata and they opening their first Tampa restaurant on Kolkata.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;