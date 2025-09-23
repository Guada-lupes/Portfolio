import React from "react";
import TitlesComponent from "../componentNew/TitlesComponenet";
import { proyectosData } from "../service/proyectos";
import { CarruselComponent } from "./CarruselComponent";
import { ResponsiveProyectsComponent } from "./ResponsiveProyectsComponent";
import BackButton from "./BackButton";

export const ProyectsComponent = () => {
  const data = proyectosData();

  return (
    <>
      <TitlesComponent
        texto={"Desarrollos Web"}
        class_name={"desarrollos_title"}
      />
      <CarruselComponent />
      <ResponsiveProyectsComponent />
<BackButton/>
    </>
  );
};
