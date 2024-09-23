import React from "react";
import Image from 'next/image'
import Logo from '../../Assets/logo.svg';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <Image src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Blog</span>
          <span>Ajuda</span>
          <span>Sobre</span>
          <span>Entrar</span>
          <span>Home</span>
          <span>Como funciona?</span>
        </div>
        <div className="footer-section-columns">
          <span>(xx)xxxxx-xxxx</span>
          <span>contato@colormatch.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;