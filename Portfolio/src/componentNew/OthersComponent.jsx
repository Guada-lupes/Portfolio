import React from "react";
import { otrosData } from "../service/otros";
import TitlesComponent from "./TitlesComponenet";
import "../styleNew/OthersComponentStyle.css";
import BackButton from "./BackButton";

export const OthersComponent = () => {
  const data = otrosData();

  return (
    <>
    <section className="others-cards-section">
      <TitlesComponent texto={"Arte y mixmedia"} class_name={"art_title"}/>
      <div className='others-cards-container'>
      {data.map((objeto) => (
        <div className="others-card-item-container" key={objeto.id}>
          <div className="others-card-img-container">
            <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
          </div>
          <div className="others-card-title-container">
            <p>{objeto.titulo}</p>
          </div>
        </div>
      ))}
      </div>
      <BackButton/>
    </section>
  </>
  );
};
