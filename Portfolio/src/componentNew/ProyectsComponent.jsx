import React from 'react'
import { proyectosData } from '../service/proyectos'
import { CarruselComponent } from './CarruselComponent';
import { ResponsiveProyectsComponent } from './ResponsiveProyectsComponent';

export const ProyectsComponent = () => {
    const data = proyectosData();
    
    return (
      <>
            <CarruselComponent/>
            <ResponsiveProyectsComponent/>
      </>
  )
}
