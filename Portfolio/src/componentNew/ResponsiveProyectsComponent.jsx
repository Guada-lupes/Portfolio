import { GitHubLogoPath } from "./GitHubLogoPath";
import { proyectosData } from "../service/proyectos";
import { VideoComponent } from "./VideoComponent";
import { useTheme } from "../contex/ThemeProvider";
import "../styleNew/ResponsiveProyectsComponentStyle.css";

import React, { useEffect } from "react";

export const ResponsiveProyectsComponent = () => {
  const {language} = useTheme();
  const data = proyectosData();
  const dataL = language ? data.es : data.en;
  const isVideo = (src) => {
    if (!src) return false;
    const videoExtensions = ["mp4", "webm", "ogg", "avi", "mov"];
    const extension = src.split(".").pop().toLowerCase();
    return videoExtensions.includes(extension);
  };
  return (
    <section className="responsive-carrusel-container">
      <div className="responsive-carrusel-pista">
        {dataL.map((objeto, i) => (
          <div className="responsive-carrusel-item-container" key={i}>
            <div className="responsive-carrusel-item">
              <div className="responsive-carrusel-img-container">
                {isVideo(objeto.imagen) ? (
                  <VideoComponent videoId={objeto.video_id} />
                ) : (
                  <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
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
