import React from "react";
import "../styles/ExperienceComponentStyle.css"

export const ExperienceComponent = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experiencia profesional</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3 className="experience-item-job">Docente</h3>
          <h4>2023-actualmente</h4>
          <p>Imparto formación para mejorar la búsqueda de empleo, establecer un objetivo profesional, diseñar un plan de acción, mejorar las competencias blandas, explorar el mercado de trabajo, etc.</p>
        </div>
        <div className="experience-item">
          <h3 className="experience-item-job">Coordinadora / Orientadora Laboral</h3>
          <h4>2020-2023</h4>
          <p>Diseño, planifico y ejecuto proyectos de orientación laboral, gestiono equipos, elaboro memorias técnicas, redacto proyectos.</p>
        </div>
      </div>
    </section>
  );
};
