import { GitHubLogoPath } from "./GitHubLogoPath";
import { proyectosData } from "../service/proyectos";
import "../styleNew/ResponsiveProyectsComponentStyle.css";

import React, { useEffect } from "react";

export const ResponsiveProyectsComponent = () => {
  const data = proyectosData();
  const isVideo = (src) => {
    const videoExtensions = ["mp4", "webm", "ogg", "avi", "mov"];
    const extension = src.split(".").pop().toLowerCase();
    return videoExtensions.includes(extension);
  };
  return (
    <section className="responsive-carrusel-container">
      <div className="responsive-carrusel-pista">
        {data.map((objeto) => (
          <div className="responsive-carrusel-item-container" key={objeto.id}>
            <div className="responsive-carrusel-item">
              <div className="responsive-carrusel-img-container">
                {isVideo(objeto.imagen) ? (
                  <video controls muted src={objeto.imagen} />
                ) : (
                  <img src={objeto.imagen} alt={objeto.alt} />
                )}
              </div>
              <div className="responsive-carrusel-info-container">
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
    </section>
  );
};
