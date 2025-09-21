import React from "react";
import { formacionData } from "../service/formacion";
import { formacionEspecificaData } from "../service/formacion";
import TitlesComponent from "./TitlesComponenet";
import "../styleNew/StudiesComponentStyle.css";

export const StudiesComponent = () => {
  const data1 = formacionData();
  const data2 = formacionEspecificaData();
  return (
    <>
      <section className="cards-section">
        <TitlesComponent texto={"Formación específica"} class_name={"studies_title"}/>
            <div className="card-especific-container">
            {data2.map((objeto, index) => (
              <div className="card-especific-item" key={objeto.id}>
                <div className="card-img-especific">
                  <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
                </div>
                <div className="car-especific-content">
                <p className="car-especific-title">{objeto.titulo}</p>
                <p className="car-especific-aprendizajes">{objeto.aprendizajes}</p>
                <p className="car-especific-fecha">{objeto.descripcion}</p>
                </div>
              </div>
            ))}
            </div>
        <h2>Formación académica</h2>
        <div className="cards-container">
          {data1.map((objeto) => (
            <div className="card-item-container" key={objeto.id}>
              <div className="card-img-container">
                <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
              </div>
              <div className="card-title-container">
                <p>{objeto.titulo}</p>
              </div>
              <div className="card-info-container">
                <p>{objeto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
