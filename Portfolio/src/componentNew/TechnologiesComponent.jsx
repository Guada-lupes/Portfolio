import React from "react";
import { technologiesData } from "../service/tecnnologies";
import TitlesComponent from "./TitlesComponenet";
import "../styleNew/TechnologiesComponentStyle.css";
import BackButton from "./BackButton";

export const TechnologiesComponent = () => {
  const data = technologiesData();

  return (
    <section className="technologies-section">
      <TitlesComponent texto={true ? "Tecnologías y herramientas" : "Technologies and Tools"} class_name={"technologies-title"}/>
      <div className="technologies-container">
          {data.tecnologias.map((elemento, index) => (
            <div className="technologies-item" key={index}>
              <div className="technologies-icon">{elemento.icon}</div>
              <p className="technologies-name">{elemento.name}</p>
            </div>
          ))}
        </div>
        <TitlesComponent texto={true ? "Conocimientos" : "Knowledge"} class_name={"technologies-title"}/>
              <div className="technologies-container">
          {data.conocimientos.map((elemento, index) => (
            <div className="technologies-item" key={index}>
              <div className="technologies-icon">{elemento.icon}</div>
              <p className="technologies-name">{elemento.name}</p>
            </div>
          ))}
        </div>
        <BackButton/>
    </section>
  );
};
