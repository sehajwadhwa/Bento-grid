import React from "react";
import image from "../../assets/images/illustration-schedule-posts.webp";
import "./ScheduleSocialMedia.scss";

const SchduleSocialMedia = () => {
  return (
    <div className="schduleSocialMedia">
      <div className="schduleSocialMedia__heading">
        <h1>Schedule to social media.</h1>
      </div>
      <div className="schduleSocialMedia__img">
        <img src={image} alt="schedule" />
      </div>
      <p className="schduleSocialMedia__text">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
};

export default SchduleSocialMedia;
