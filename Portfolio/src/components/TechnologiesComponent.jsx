import React from "react";
import "../styles/TechnologiesComponentStyle.css";

export const TechnologiesComponent = () => {
  return (
    <section className="technologies-section">
    <h2 className="technologies-title">Tecnologías</h2>
    <div className="technologies-container">
      
      <div className="technologies-logo">
        <p>HTML</p>
      </div>
      <div className="technologies-logo">
        <p>CSS</p>
      </div>
      <div className="technologies-logo">
        <p>Sass</p>
      </div>
      <div className="technologies-logo">
        <p>JavaScript</p>
      </div>
      <div className="technologies-logo">
        <p>React</p>
      </div>
      <div className="technologies-logo">
        <p>Git</p>
      </div>
      <div className="technologies-logo">
        <p>GitHub</p>
      </div>
      <div className="technologies-logo">
        <p>Vite</p>
      </div>
      <div className="technologies-logo">
        <p>Node.js</p>
      </div>
    </div>
    </section>
  );
};
