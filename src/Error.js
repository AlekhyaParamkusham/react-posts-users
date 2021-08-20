import react from "react";
import error from "./images/error.jpg";
const Error = () => {
  return (
    <>
      <div className="errorDiv">
        <img src={error} className="errorImage"></img>
      </div>
      <p className="errorP">
        Snap! It's an invalid page. Please use a valid URL.
      </p>
    </>
  );
};

export default Error;
