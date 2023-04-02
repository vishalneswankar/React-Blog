import React from "react";
import Logo from "../images/Logo.png";

function Header() {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-4 logo pt-5 pb-5">
          <img src={Logo} alt="Logo" /> React Blog
        </div>
      </div>
    </div>
  );
}

export default Header;
