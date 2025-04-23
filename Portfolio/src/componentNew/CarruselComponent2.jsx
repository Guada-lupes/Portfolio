import React from "react";
import { useState } from "react";
import { GitHubLogoPath } from "./GitHubLogoPath";
import { proyectosData } from "../service/proyectos";
import "../styleNew/CarruselComponentStyle.css";

export const CarruselComponent2 = () => {
  const data = proyectosData();
  const [slideDirection, setSlideDirection] = useState(null);
  const [slideNext, setSlideNext] = useState(null);
  const [currentProyect, setCurrentProyect] = useState(0);
  const proyectsAmount = data.length;

  function handleNext(e) {
    e.preventDefault();
    setCurrentProyect((prev) => (prev === proyectsAmount - 1 ? 0 : prev + 1));
    setSlideDirection("right");

  }

  function handleBefore(e) {
    e.preventDefault();
    setCurrentProyect((prev) => (prev === 0 ? proyectsAmount - 1 : prev - 1));
    setSlideDirection("left")
  }

  return (
    <section className="carrusel-container">
      <button
          className="carrusel-button-before"
          onClick={(e) => handleBefore(e)}
        >
          ◀
        </button>
      <div className="carrusel-pista">
        {data.map((objeto, index) => (
          <div
            className={`carrusel-item-container 
              ${index === currentProyect ? `active ${slideDirection}` : ''} 
              ${index === currentProyect + 1 ? 'next' : ''}`}
            key={objeto.id}
          >
            {index === currentProyect && (
              <div className="carrusel-item">
                <div className="carrusel-img-container">
                  <img src={objeto.imagen} alt={objeto.alt} />
                </div>
                <div className="carrusel-info-container">
                  <p>{objeto.descripcion}</p>
                </div>
                <GitHubLogoPath path={objeto.em} />
              </div>
            )}
          </div>
        ))}
      </div>
      <button
          className="carrusel-button-after"
          onClick={(e) => handleNext(e)}
        >
          ▶
        </button>
    </section>
  );
};