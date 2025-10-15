import React from "react";
import { formacionData } from "../service/formacion";
import { formacionEspecificaData } from "../service/formacion";
import TitlesComponent from "./TitlesComponenet";
import "../styleNew/StudiesComponentStyle.css";
import BackButton from "./BackButton";

export const StudiesComponent = () => {
  const data1 = formacionData();
  const data2 = formacionEspecificaData();
  return (
    <>
      <section className="cards-section">
        <TitlesComponent
          texto={"Formación específica"}
          class_name={"studies_title"}
        />
        <div className="card-especific-container">
          {data2.map((objeto, index) => (
            <div className="card-especific-item" key={objeto.id}>
              <div className="card-img-especific">
                <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
              </div>
              <div className="car-especific-content">
                <p className="car-especific-title">{objeto.titulo_es}</p>
                <p className="car-especific-aprendizajes">
                  {objeto.descripcion_es}
                </p>
                    <ul className="studies_ul">
                      {objeto.aprendizajes_es.map((e, i) => (
                        <li key={i}>
                          <p>{e}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="car_date">{objeto.fecha}</p>
              </div>
            </div>
          ))}
        </div>
        <TitlesComponent
          texto={"Formación académica"}
          class_name={"studies_title"}
        />
        <div className="card-especific-container">
          <div className="cards-container">
            {data1.map((objeto) => (
              <div className="card-item-container" key={objeto.id}>
                <div className="card-img-container">
                  <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
                </div>
                <div className="card-title-container">
                  <p>{objeto.titulo_es}</p>
                </div>
                <div className="card-info-container">
                  <p>{objeto.descripcion_es}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BackButton />
      </section>
    </>
  );
};
