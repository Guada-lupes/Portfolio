import React from "react";
import { technologiesData } from "../service/tecnnologies";
import "../styleNew/TechnologiesComponentStyle.css";

export const TechnologiesComponent = () => {
  const data = technologiesData();

  return (
    <section className="technologies-section">
      <h3 className="technologies-title">Tecnologías y herramientas</h3>
      <div className="technologies-container">
          {data.map((elemento, index) => (
            <div className="technologies-item" key={index}>
              <div className="technologies-icon">{elemento.icon}</div>
              <p className="technologies-name">{elemento.name}</p>
            </div>
          ))}
        </div>
    </section>
  );
};
