import React from "react";
import TitlesComponent from "../componentNew/TitlesComponenet";
import { proyectosData } from "../service/proyectos";
import { CarruselComponent } from "./CarruselComponent";
import { ResponsiveProyectsComponent } from "./ResponsiveProyectsComponent";
import BackButton from "./BackButton";

export const ProyectsComponent = () => {
  const data = proyectosData();
  const titulo = true ? "Desarrollos Web" : "Web Developments"

  return (
    <>
      <TitlesComponent
        texto={titulo}
        class_name={"desarrollos_title"}
      />
      <CarruselComponent />
      <ResponsiveProyectsComponent />
<BackButton/>
    </>
  );
};
