import React from "react";
import Icon from "../../assets/images/illustration-multiple-platforms.webp";
import "./ManageAccounts.scss";

const ManageAccounts = () => {
  return (
    <div className="manageAccounts">
      <section className="manageAccounts__socialmedia">
        <img
          className="manageAccounts__socialmedia--img"
          src={Icon}
          alt="platforms"
        />
      </section>
      <h1 className="manageAccounts__text">
        Manage multiple accounts and platforms.
      </h1>
    </div>
  );
};

export default ManageAccounts;
