import React from "react";

import ImageSlider from "../../components/imageSlider/imageSlider.js";

import "./services.css";

export default function Services() {

  return (
    <div className="slideShow" id="servicesId">
      <h1 className="servicesTitle">Services</h1>
        <ImageSlider />
    </div>
  );
}
