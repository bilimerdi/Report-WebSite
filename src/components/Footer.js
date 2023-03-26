import React from "react";
import "./Footer.css";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footer-border">
      <div className="footer-text">
        Sitemizi ziyaret ettiğiniz için teşekkürler. Şikayet ve dilekler için
        geliştiriciye ulaşın.
      </div>
      <a href="https://twitter.com/erdiorun">
        <TiSocialTwitter />
      </a>
    </div>
  );
};

export default Footer;
