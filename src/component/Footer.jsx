import React from "react";

const Footer = () => {
  return (
    <div
      style={{ minHeight: "10vh" }}
      className=" text-center d-flex flex-column  align-items-center mt-5 "
    >
      <p className="fs-5 text-light">
        ©2023 <span className="text-primary fs-2 ">React Movies</span>, All
        Rights Reserved
      </p>
      <span className="d-flex justify-content-between text-danger w-75 mb-3 mb-lg-5   ">
        <span> About Us</span>
        <span>Terms of Use</span>
        <span>Privacy</span>{" "}
      </span>
    </div>
  );
};

export default Footer;
