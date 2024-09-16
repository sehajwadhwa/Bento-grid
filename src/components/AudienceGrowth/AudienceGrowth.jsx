import React from "react";
import growthimage from "../../assets/images/illustration-audience-growth.webp";
import "./AudienceGrowth.scss";

const AudienceGrowth = () => {
  return (
    <div className="audienceGrowth">
      <div className="audienceGrowth__heading">
        <h1> >56% </h1>
      </div>
      <div className="audienceGrowth__text">faster audience growth</div>
      <div className="audienceGrowth__image">
        <img src={growthimage} alt="audience growth" />
      </div>
    </div>
  );
};

export default AudienceGrowth;
