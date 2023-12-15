import React from "react";
import { BiSolidError } from "react-icons/bi";
const ErrorPage = () => {
  return (
    <div
      className="error-page bg-black text-light text-center d-flex justify-content-center flex-column"
      style={{ minHeight: "100vh" }}
    >
      <h1>Oops! Something went wrong.</h1>
      <div>
        We're sorry, but an error occurred while processing your request.{" "}
        <BiSolidError className="fs-4 text-danger" />
      </div>
    </div>
  );
};

export default ErrorPage;
