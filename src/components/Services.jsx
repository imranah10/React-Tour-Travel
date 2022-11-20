import React from "react";
import place1 from "./images/place1.jpg"
import place2 from "./images/place2.jpg"
import place3 from "./images/place3.jpg"

export const Services = () => {
  return (
    <div>
      <h1 className="Services-Heading-name">Our Places</h1>
      <div className="Services">
        <div className="places">
          <h1 className="color">Hungary</h1>
          <img className="service-image" src={place1} alt="Tour Pic"/>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            explicabo asperiores rerum nostrum sit ea.
          </p>
        </div>

        <div className="places">
          <h1 className="color">Sweden</h1>
          <img className="service-image" src={place2} alt="Tour Pic" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            explicabo asperiores rerum nostrum sit ea.
          </p>
        </div>

        <div className="places">
          <h1 className="color">America</h1>
          <img className="service-image" src={place3} alt="Tour Pic"/>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            explicabo asperiores rerum nostrum sit ea.
          </p>
        </div>
      </div>
    </div>
  );
};
