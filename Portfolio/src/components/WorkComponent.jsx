import React from "react";
import "../styles/WorkComponentStyle.css";

export const WorkComponent = () => {
  return (
    <section className="work-section">
      <h3 className="work-title">Proyectos realizados</h3>
      <div className="home-work-container">
        <div className="work-item">
          <h4>BookSpace</h4>
          <img src="" alt="" />
          <p>enlace</p>
          <p>descripción</p>
        </div>
        <div className="work-item">
          <h4>Asistente de Cata</h4>
          <img src="" alt="" />
          <p>enlace</p>
          <p>descripción</p>
        </div>
        <div className="work-item">
          <h4>Shop</h4>
          <img src="" alt="" />
          <p>enlace</p>
          <p>descripción</p>
        </div>
      </div>
    </section>
  );
};
