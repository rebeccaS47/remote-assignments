import React, { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState("none");

  const showDropdown = () => {
    console.log("show");
    setDropdown("block");
  };
  const closeDropdown = () => {
    setDropdown("none");
  };

  return (
    <header className="main-header">
      <h1>Website Title/Logo</h1>

      <ul className="main-nav">
        <li>
          <a href="#">Item1</a>
        </li>
        <li>
          <a href="#">Item2</a>
        </li>
        <li>
          <a href="#">Item3</a>
        </li>
        <li>
          <a href="#">Item4</a>
        </li>
      </ul>

      <div className="dropdown">
        <i className="fa fa-bars dropbtn" onClick={() => showDropdown()}></i>
        <div className="dropdown-content" style={{ display: dropdown }}>
          <i
            className="fa fa-times fa-2x closebtn"
            aria-hidden="true"
            onClick={() => closeDropdown()}
          ></i>
          <a href="#">Item1</a>
          <a href="#">Item2</a>
          <a href="#">Item3</a>
          <a href="#">Item4</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
