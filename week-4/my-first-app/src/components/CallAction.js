import React from "react";

const CallAction = ({ isCallAction }) => {
  return (
    <div
      className="container hidcon"
      style={{ display: isCallAction ? "flex" : "none" }}
    >
      <div className="box">
        <p>Content Box 5</p>
      </div>
      <div className="box">
        <p>Content Box 6</p>
      </div>
      <div className="box">
        <p>Content Box 7</p>
      </div>
      <div className="box">
        <p>Content Box 8</p>
      </div>
    </div>
  );
};

export default CallAction;
