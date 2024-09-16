import React from "react";
import image from "../../assets/images/illustration-grow-followers.webp";
import "./GrowFollowers.scss";

const GrowFollowers = () => {
  return (
    <div className="growFollowers">
      <img className="growFollowers__img" src={image} alt="grow followers" />
      <div className="growFollowers__title">
        <h1 className="growFollowers__title--heading">
          Grow followers with non-stop content.
        </h1>
      </div>
    </div>
  );
};

export default GrowFollowers;
