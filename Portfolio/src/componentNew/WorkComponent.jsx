import React from "react";
import { experienciaData } from "../service/experiencia";
import "../styleNew/WorkComponentStyle.css";
import { useTheme } from "../contex/ThemeProvider";
import TitlesComponent from "./TitlesComponenet";
import BackButton from "./BackButton";

export const WorkComponent = () => {
    const {language} = useTheme();
  const data = language ? experienciaData().es : experienciaData().en;

  return (
    <section className="work-cards-section">
      <TitlesComponent
        texto={language ? "Experiencia laboral" : "Professional Experience"}
        class_name={"work_title"}
      />
      <div className="work-cards-container">
        {data.map((objeto) => (
          <div className="work-card-item-container" key={objeto.id}>
            <div className="work-card-img-container">
              <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
            </div>
            <div className="work-card-title-container">
              <p>{objeto.titulo}</p>
            </div>
            <div className="work-card-info-container">
              <p className="work_p">{objeto.descripcion}</p>
              {objeto.descripcion_2 ? (
                <ul className="work_ul">
                  {objeto.descripcion_2.map((e, i) => (
                    <li key={i}>
                      <p>{e}</p>
                    </li>
                  ))}{" "}
                </ul>
              ) : (
                ""
              )}
              {objeto.descripcion_3 ? <p className="work_p">{objeto.descripcion_3}</p> : ""}
              <p className="work_p">{objeto.fecha}</p>
            </div>
          </div>
        ))}
      </div>
      <BackButton />
    </section>
  );
};
