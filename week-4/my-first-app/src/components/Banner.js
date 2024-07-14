import React, { useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState("Welcome Message");

  const changeText = () => {
    setBanner("Have a Good Time!");
  };

  return (
    <div className="banner" onClick={() => changeText()}>
      <h1 className="banner-content">{banner}</h1>
    </div>
  );
};

export default Banner;
