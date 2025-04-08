import React from "react";
import foto from "../assets/FotoPortfolio.png"
import "../styles/PresentationComponentStyle.css"

export const PresentationComponent = () => {
  return (
    <section className="presentation-section">
      <hgroup className="presentation-name">
      <h1>Guadalupe Marándola</h1>
      <p>Desarrolladora Web Front End</p>
      </hgroup>
      <div className="presentation-image">
        <img src={foto} alt="Imagen de perfil" />
      </div>
    </section>
  );
};
