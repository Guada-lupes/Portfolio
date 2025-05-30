import React from "react";
import { useState, useRef } from "react";
import { GitHubLogoPath } from "./GitHubLogoPath";
import { proyectosData } from "../service/proyectos";
import "../styleNew/CarruselComponentStyle.css";

export const CarruselComponent = () => {
  const data = proyectosData();
  const [slideDirection, setSlideDirection] = useState(null);
  const [slideNext, setSlideNext] = useState(null);
  const [currentProyect, setCurrentProyect] = useState(0);
  const proyectsAmount = data.length;
  const pistaRef = useRef(null);


  function handleNext() {
    if (pistaRef.current) {
      pistaRef.current.scrollBy({
        left: pistaRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
    console.log("hola")
  }
  function handleBefore() {
    if (pistaRef.current) {
      pistaRef.current.scrollBy({
        left: -pistaRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="carrusel-container">
      <button
          className="carrusel-button-before"
          onClick={(e) => handleBefore(e)}
        >
          ◀
        </button>
      <div className="carrusel-pista" ref={pistaRef}>
        {data.map((objeto, index) => (
          <div
            className={"carrusel-item-container"}
            key={index}
          >
              <div className="carrusel-item">
                <div className="carrusel-img-container">
                  <img src={objeto.imagen} alt={objeto.alt} />
                </div>
                <div className="carrusel-info-container">
                  <p>{objeto.descripcion}</p>
                </div>
                <GitHubLogoPath path={objeto.em} />
              </div>
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
