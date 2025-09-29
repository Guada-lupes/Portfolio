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
      <p className="art_p">Me encanta crear. Disfruto creando todo tipo de artefactos: cuadros, albumnes de fotos, itinerarios de viajes, juegos educativos... etc. Disfruto muchísimo el proceso de imaginar el artefacto, elegir la paleta de colores, los materiales, planificar la composición, atascarme porque no me cuadra el resultado, dejarme llevar por los sentidos y conseguir el resultado deseado</p>
      <p>Aquí dejo una muestra de mis cuadros. Parto de una idea o de un material e inicio el proceso de transformación. Utilizo acrílicos, telas, plantas, objetos en deshuso, moldes, pastas, tintes ...</p>
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
