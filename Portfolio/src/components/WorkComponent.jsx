import React from "react";
import { GitHubLogoPath } from "./GitHubLogoPath";
import "../styles/WorkComponentStyle.css";
import foto1 from "../assets/BookSpace.png"
import foto2 from "../assets/TiendaReact.png"
import foto3 from "../assets/TiendaJavaScript.png"
import foto4 from "../assets/RockstarReplica.png"
import { DescriptionComponent } from "./DescriptionComponent";
import { CarruselComponent } from "./CarruselComponent";

export const WorkComponent = () => {
  return (
    <section className="work-section">
      <CarruselComponent>
      <div className="work-item">
          <h3>BookSpace</h3>
          <div className="work-item-img">
          <img src={foto1} alt="imagen de proyecto BookSpaceApp" />
          </div>
          <GitHubLogoPath path="https://github.com/Guada-lupes/Proyecto-Final--Grupo-1.git"/>
          <DescriptionComponent text="holahola"/> 
        </div>
        <div className="work-item">
          <h3>Tienda React</h3>
          <div className="work-item-img">
          <img src={foto2} alt="imagen de proyecto Tienda REact" />
          </div>
          <GitHubLogoPath path="https://github.com/Guada-lupes/Carrito-tecnol-gico.git"/>
          <DescriptionComponent text=""/>
        </div>
        <div className="work-item">
          <h3>Tienda JavaScript</h3>
          <div className="work-item-img">
          <img src={foto3} alt="imagen de proyecto Tienda Javascript" />
          </div>
          <GitHubLogoPath path="https://github.com/Guada-lupes/Proyecto-Final-M-dulo-3.git"/>
          <DescriptionComponent text=""/>
        </div>
        <div className="work-item">
          <h3>Rockstar réplica</h3>
          <div className="work-item-img">
          <img src={foto4} alt="imagen de proyecto Rockstar replica" />
          </div>
          <GitHubLogoPath path="https://github.com/Guada-lupes/Rockstars-replica.git"/>
          <DescriptionComponent text=""/>
        </div>
      </CarruselComponent>
    </section>
  );
};
