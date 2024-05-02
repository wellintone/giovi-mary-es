import React from "react";
import Logo from "../Logo/LogoWellintone";
import Image from "next/image";
/* import WhatsApp from "/public/icons/whatsapp.png";
import Linkedin from "/public/icons/linkedin.png";
import Instagram from "/public/icons/Instagram.png"; */
import Link from "next/link";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <div className="footer__logo-wrapper">
          <Logo />
        </div>
        <div className="footer__logo-slogan">
          Siamo Digitalmente unici ma Intonati con le vostre esigenze
        </div>
      </div>
      {/* <Socials>
        <Image src={WhatsApp} alt="whats app" fill />
        <Image src={Linkedin} alt="linkedin" fill />
        <Image src={Instagram} alt="instagram" fill />
      </Socials> */}

      <div className="footer__quicklinks">
        <div className="footer__quicklinks-title">Quick Links</div>
        <ul className="footer__quicklinks-list">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Works</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="footer__contactInfo">
        <div className="footer__contactInfo-title">Contact Info</div>
        <div className="footer__contactInfo-phone">347-0509507</div>
        <Link href="/" className="footer__contactInfo-email">
          wellintone.creative@gmail.com
        </Link>
      </div>
      <div className="footer__subfooter">
        <div className="footer__subfooter-policy">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Legal Notice</Link>
          <Link href="/">Terms Of Service</Link>
        </div>
        <span className="footer__subfooter-allreserved">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
