import React from "react";
import { experienciaData } from "../service/experiencia";
import "../styleNew/WorkComponentStyle.css";
import TitlesComponent from "./TitlesComponenet";
import BackButton from "./BackButton";

export const WorkComponent = () => {
  const data = experienciaData();

  return (
    <section className="work-cards-section">
      <TitlesComponent
        texto={"Experiencia laboral"}
        class_name={"work_title"}
      />
      <div className="work-cards-container">
        {data.map((objeto) => (
          <div className="work-card-item-container" key={objeto.id}>
            <div className="work-card-img-container">
              <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
            </div>
            <div className="work-card-title-container">
              <p>{objeto.titulo_es}</p>
            </div>
            <div className="work-card-info-container">
              <p className="work_p">{objeto.descripcion_es}</p>
              {objeto.descripcion_2_es ? (
                <ul className="work_ul">
                  {objeto.descripcion_2_es.map((e, i) => (
                    <li key={i}>
                      <p>{e}</p>
                    </li>
                  ))}{" "}
                </ul>
              ) : (
                ""
              )}
              {objeto.descripcion_3_es ? <p className="work_p">{objeto.descripcion_3_es}</p> : ""}
              <p className="work_p">{objeto.fecha}</p>
            </div>
          </div>
        ))}
      </div>
      <BackButton />
    </section>
  );
};
