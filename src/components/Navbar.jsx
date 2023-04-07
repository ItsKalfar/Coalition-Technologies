import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > window.innerHeight - 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={scroll ? "active" : ""}>
      <div className="container">
        <a href="#home" className="logo">
          <img src={logo} alt="logo" />
          <p>
            Losageles <span>mountains</span>
          </p>
        </a>
        <ul>
          <li>
            <a href="#history">
              01. <span>history</span>
            </a>
          </li>
          <li>
            <a href="#team">
              02. <span>team</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
