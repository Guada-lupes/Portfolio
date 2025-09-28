import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { GitHubLogoPath } from "./GitHubLogoPath";
import { proyectosData } from "../service/proyectos";
import { VideoComponent } from "./VideoComponent";
import "../styleNew/CarruselComponentStyle.css";

export const CarruselComponent = () => {
  const data = proyectosData();
  const [currentPosition, setCurrentPosition] = useState(1);
  const [translate, setTranslate] = useState(0);
  const [measure, setMeasure] = useState({ left: 0, right: 0, width: 0 });
  const lastPage = data.length;
  const sizeContainer = useRef(null);
  //lógica para posición de los botones
  useEffect(() => {
    calculatePositions();
  }, []);
  window.onresize = calculatePositions;
  function calculatePositions() {
    const containerWidth = sizeContainer.current.offsetWidth;
    const distance = containerWidth * 0.5;
    const buttonSize = containerWidth * 0.05;
    const margin = containerWidth * 0.25;
    setMeasure({
      before: margin - buttonSize,
      after: containerWidth - (buttonSize + margin + distance),
      width: buttonSize,
    });
  }
  //handles de los botones
  function handleNext() {
    if (currentPosition < data.length) {
      const actualized = currentPosition + 1;
      const actualizedT = translate + 100 / lastPage;
      setCurrentPosition(actualized);
      setTranslate(actualizedT);
    }
  }
  function handleBefore() {
    if (currentPosition > 1) {
      const actualized = currentPosition - 1;
      const actualizedT = translate - 100 / lastPage;
      setCurrentPosition(actualized);
      setTranslate(actualizedT);
    }
  }
  const isVideo = (src) => {
    if (!src) return false;
    const videoExtensions = ["mp4", "webm", "ogg", "avi", "mov"];
    const extension = src.split(".").pop().toLowerCase();
    return videoExtensions.includes(extension);
  };

  return (
    <section className="carrusel-container">
      <div ref={sizeContainer} className="buttons_container">
        {currentPosition > 1 && (
          <div
            style={{ top: measure.before, width: measure.width }}
            className="carrusel-button before"
            onClick={handleBefore}
          >
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
            width: `${lastPage * 100}%`,
            transition: "transform 0.3s ease",
            transform: `translateX(-${translate}%)`,
          }}
        >
          {data.map((objeto, index) => (
            <div
              className={"carrusel-item-container"}
              key={index}
              style={{ width: `${Math.floor(100 / lastPage)}%` }}
            >
              <div className="carrusel-item">
                <div className="carrusel-img-container">
                  {isVideo(objeto.imagen) ? (
                    <VideoComponent videoId={objeto.video_id}/>
                  ) : (
                    <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
                  )}
                </div>
                <div className="carrusel-info-container">
                  <p>{objeto.descripcion}</p>
                  {objeto.funcionalidades ? (
                    <ul className="carrusel_ul">
                      {objeto.funcionalidades.map((e, i) => (
                        <li key={i}>
                          <p>{e}</p>
                        </li>
                      ))}{" "}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
                {objeto.em ? <GitHubLogoPath path={objeto.em} /> : ""}
              </div>
            </div>
          ))}
        </div>
        {currentPosition < lastPage && (
          <div
            style={{ top: measure.after, width: measure.width }}
            className="carrusel-button after"
            onClick={handleNext}
          >
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
