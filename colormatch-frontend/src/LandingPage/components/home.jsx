import React from "react";
import Navbar from "./navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          colocar imagem
        </div>
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
          colocar imagem
        </div>
      </div>
    </div>
  );
};

export default Home;