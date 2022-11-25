import React from "react";

export const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="contact-Heading-name">Contact us</h1>
      </div>
      <div className="Contact-Main">
        <div className="contactForm">
          <form>
            <input type="text" placeholder="YourName"></input>
            <input type="number" placeholder="Number"></input>
            <select>
              <option value="Hungry">Hungry</option>
              <option value="Sweden">Sweden</option>
              <option value="America">America</option>
            </select>
            <textarea type="text" placeholder="Write About Yourself"></textarea>
            <button className="cBtn">Submit</button>
          </form>
        </div>
        <div className="contact-Map">
          <iframe
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="residential map"
            src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=America&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
