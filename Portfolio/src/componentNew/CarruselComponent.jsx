import React from "react";
import { useState, useRef } from "react";
import { GitHubLogoPath } from "./GitHubLogoPath";
import { proyectosData } from "../service/proyectos";
import "../styleNew/CarruselComponentStyle.css";

export const CarruselComponent = () => {
  const data = proyectosData();
  const [currentPosition, setCurrentPosition] = useState(1);
  const [translate, setTranslate] = useState(0);
  const lastPage = data.length;
  function handleNext() {
    if (currentPosition < data.length) {
      const actualized = currentPosition + 1;
      const actualizedT = translate + 25;
      setCurrentPosition(actualized);
      setTranslate(actualizedT);
    }

    console.log("next", currentPosition, translate);
  }
  function handleBefore() {
    console.log("before", currentPosition, translate);
    if (currentPosition > 1) {
      const actualized = currentPosition - 1;
      const actualizedT = translate - 25;
      setCurrentPosition(actualized);
      setTranslate(actualizedT);
    }

    console.log("before", currentPosition, translate);
  }

  return (
    <section className="carrusel-container">
      <div className="buttons_container">
        {currentPosition > 1 && (
          <div className="carrusel-button before" onClick={handleBefore}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="grey"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        )}

        <div
          className="carrusel-pista"
          style={{
            transition: "transform 0.3s ease",
            transform: `translateX(-${translate}%)`,
          }}
        >
          {data.map((objeto, index) => (
            <div className={"carrusel-item-container"} key={index}>
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
        {currentPosition < lastPage && (
          <div className="carrusel-button after" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="grey"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
};
