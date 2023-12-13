import React from "react";
import { images } from "../../constants";

import "./About.css";
const About = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      {/* <div className="app__aboutus-overlay flex__center">
        <img src={images.dineLogo} alt="G_overlay" />
      </div> */}
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Welcome to Restro —a culinary destination where passion meets palate. Nestled in Agra, our restaurant is a celebration of flavors, crafted with care and creativity. With a commitment to quality ingredients and exceptional service, we invite you to savor the essence of our culinary philosophy. Join us for an unforgettable dining experience where every dish tells a story, and every moment is a taste of our dedication to excellence. Welcome to Restro, where good food and good times come together.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>
        <div></div>
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant" style={{margin: "0px 0px 10px 0px"}}>Food Policy</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            At Restro, our food policy is rooted in a commitment to quality and sustainability. We source fresh, local ingredients to create flavorful dishes while supporting our community. We cater to diverse dietary preferences, offering a menu that includes vegetarian, vegan, and gluten-free options. Experience a culinary journey that not only delights your palate but also aligns with our dedication to responsible and delicious dining.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
