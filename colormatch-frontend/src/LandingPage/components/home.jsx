import React from "react";
import Image from 'next/image'
import Base from "../../Assets/base.png"
import Navbar from "./navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">      
        <div className="home-text-section">
          <h1 className="primary-heading">
            Não erre mais o seu tom!
          </h1>
          <p className="primary-text">
            Com o ColorMatch fica muito mais fácil encontrar o seu tom perfeito de base.
          </p>
          <button className="secondary-button">
            Teste agora <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <Image src={Base} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;