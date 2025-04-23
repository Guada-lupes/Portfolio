import React from 'react'
import { proyectosData } from '../service/proyectos'
import { CarruselComponent } from './CarruselComponent';
import { ResponsiveProyectsComponent } from './ResponsiveProyectsComponent';
import { CarruselComponent2 } from "./CarruselComponent2"

export const ProyectsComponent = () => {
    const data = proyectosData();
    
    return (
      <>
            <CarruselComponent/>
            <ResponsiveProyectsComponent/>
      </>
  )
}
