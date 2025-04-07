import React from "react";
import foto from "../assets/FotoPortfolio.png"
import "../styles/PresentationComponentStyle.css"

export const PresentationComponent = () => {
  return (
    <section className="presentation-section">
      <div className="presentation-name">
      <h1>Guadalupe Marándola</h1>
      <h3>Desarrolladora Web Front End</h3>
      </div>
      <div className="presentation-image">
        <img src={foto} alt="Imagen de perfil" />
      </div>
    </section>
  );
};
