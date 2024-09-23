import React from "react";

const Work = () => {
  const workInfoData = [
    {
      title: "Escolha sua marca atual",
      text: "Selecione a marca de base que você utiliza atualmente.",
    },
    {
      title: "Escolha sua cor atual",
      text: "Selecione a cor que você utiliza desse produto.",
    },
    {
      title: "Prontinho!",
      text: "Agora você já tem sua cor correspondente em outras marcas e pode comprar seu produto sem preocupações!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionamento</p>
        <h1 className="primary-heading">Como funciona?</h1>
        <p className="primary-text">
          O ColorMatch te ajuda a encontrar o seu tom ideal de base de uma maneira muito simples e rápida, basta seguir os passos: 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;