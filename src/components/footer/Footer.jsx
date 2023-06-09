import React, { useState, useEffect } from "react";
import "./Footer.css";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      setShowFooter(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer-container ${showFooter ? "show-footer" : ""}`}>
      <div className="newsletter">
        <span>Newsletter</span>
        <div className="email">
          <input type="email" placeholder="Your email" />
          <FontAwesomeIcon className="icon-style" icon={faPaperPlane} />
        </div>
      </div>
      <div className="social-links">
        <div className="link">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className="link">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <div className="link">
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} - Boston University</p>
      </div>
    </footer>
  );
};
