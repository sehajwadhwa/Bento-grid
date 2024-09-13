import React from "react";
import fiveStarImage from "../../assets/images/illustration-five-stars.webp";

const Banner = () => {
  return (
    <div className="Banner">
      <h1 className="Banner__heading">
        Social Media <span className="Banner__heading--color">10x</span>
        <span className="Banner__heading--style"> Faster </span>with AI
      </h1>
      <img
        className="Banner__img"
        src={fiveStarImage}
        alt="Social Media 10x Faster with AI"
      />
      <p>Over 4,000 5-star reviews</p>
    </div>
  );
};

export default Banner;
