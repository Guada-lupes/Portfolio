import React from "react";
import { formacionData } from "../service/formacion";
import { formacionEspecificaData } from "../service/formacion";
import { useTheme } from "../contex/ThemeProvider";
import TitlesComponent from "./TitlesComponenet";
import "../styleNew/StudiesComponentStyle.css";
import BackButton from "./BackButton";

export const StudiesComponent = () => {
  const { language } = useTheme();
  const data1 = formacionData();
  const data2 = formacionEspecificaData();
  const data1L = language ? data1.es : data1.en;
  const data2L = language ? data2.es : data2.en;
  return (
    <>
      <section className="cards-section">
        <TitlesComponent
          texto={language ? "Formación específica" : "Specific Training"}
          class_name={"studies_title"}
        />
        <div className="card-especific-container">
          {data2L.map((objeto, index) => (
            <div className="card-especific-item" key={objeto.id}>
              <div className="card-img-especific">
                <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
              </div>
              <div className="car-especific-content">
                <p className="car-especific-title">{objeto.titulo}</p>
                <p className="car-especific-aprendizajes">
                  {objeto.descripcion}
                </p>
                <ul className="studies_ul">
                  {objeto.aprendizajes.map((e, i) => (
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
          texto={language ? "Formación académica" : "Academic Education"}
          class_name={"studies_title"}
        />
        <div className="card-especific-container">
          <div className="cards-container">
            {data1L.map((objeto) => (
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
        </div>
        <BackButton />
      </section>
    </>
  );
};
