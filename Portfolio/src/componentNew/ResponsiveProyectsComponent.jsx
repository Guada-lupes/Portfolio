import { GitHubLogoPath } from "./GitHubLogoPath";
import { proyectosData } from "../service/proyectos";
import "../styleNew/ResponsiveProyectsComponentStyle.css";

import React, { useEffect } from "react";

export const ResponsiveProyectsComponent = () => {
  const data = proyectosData();
return (
    <section className="responsive-carrusel-container">
      <div className="responsive-carrusel-pista">
        {data.map((objeto) => (
          <div className="responsive-carrusel-item-container" key={objeto.id}>
            <div className="responsive-carrusel-item">
              <div className="responsive-carrusel-img-container">
                <img src={objeto.imagen} alt={objeto.alt} />
              </div>
              <div className="responsive-carrusel-info-container">
                <p>{objeto.descripcion}</p>
              </div>
              <GitHubLogoPath path={objeto.em} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
