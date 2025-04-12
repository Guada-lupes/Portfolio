import React from "react";
import { otrosData } from "../service/otros";
import "../styleNew/OthersComponentStyle.css";

export const OthersComponent = () => {
  const data = otrosData();

  return (
    <>
    <section className="others-cards-section">
      <div className='others-cards-container'>
      {data.map((objeto) => (
        <div className="others-card-item-container" key={objeto.id}>
          <div className="others-card-img-container">
            <img src={objeto.imagen} alt={objeto.alt} />
          </div>
          <div className="others-card-title-container">
            <p>{objeto.titulo}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  </>
  );
};
