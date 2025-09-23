import React from "react";
import { technologiesData } from "../service/tecnnologies";
import TitlesComponent from "./TitlesComponenet";
import "../styleNew/TechnologiesComponentStyle.css";
import BackButton from "./BackButton";

export const TechnologiesComponent = () => {
  const data = technologiesData();

  return (
    <section className="technologies-section">
      <TitlesComponent texto={"Tecnologías y herramientas"} class_name={"technologies-title"}/>
      <div className="technologies-container">
          {data.map((elemento, index) => (
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
