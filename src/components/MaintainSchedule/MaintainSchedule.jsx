import React from "react";
import images from "../../assets/images/illustration-consistent-schedule.webp";
import "./MaintainSchedule.scss";

const MaintainSchedule = () => {
  return (
    <div className="maintainSchedule">
      <div className="maintainSchedule__heading">
        <h1> Maintain a consistent posting schedule</h1>
      </div>
      <div className="maintainSchedule__content">
        <img className="maintainSchedule__img" src={images} alt="maintain" />
      </div>
    </div>
  );
};

export default MaintainSchedule;
