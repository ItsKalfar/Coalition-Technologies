import React from "react";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
          <p>
            Losageles <span>mountains</span>
          </p>
        </div>
        <p className="copyright">Copyright 2016. All rights reserved</p>
      </div>
    </footer>
  );
}
