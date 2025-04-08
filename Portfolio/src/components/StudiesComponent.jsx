import React from "react";
import "../styles/StudiesComponentStyle.css"

export const StudiesComponent = () => {
  return (
    <section className="studies-section">
      <details className="studies-details" name="acordeon">
        <summary className="studies-summary">
          <h2>Formación Específica</h2>
        </summary>
        <div className="studies-item">
          <hgroup className="study-data">
          <h3>Desarrollo Web Front-End (350hs)</h3>
          <p>2025</p>
          <p>Code Space</p>
          </hgroup>
          <p>Formación intensiva y práctica en HTML, CSS, JavaScript, React, Git, GitHub, Node.js, Vite</p>
        </div>
      </details>
      <details className="studies-details" name="acordeon">
        <summary className="studies-summary">
          <h2 >Formación Académica</h2>
        </summary>
        <div className="studies-item">
          <h3>Grado en Pedagogía</h3>
          <p>2020</p>
          <p>UNED</p>
        </div>
        <div className="studies-item">
          <h3>Máster en Formación del Profesorado</h3>
          <p>2023</p>
          <p>UNED</p>
        </div>
        <div className="studies-item">
          <h3>Postgrado en Educación Emocional</h3>
          <p>2024</p>
          <p>Universitat de Barcelona</p>
        </div>
      </details>
    </section>
  );
};
