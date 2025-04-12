import React from 'react'
import { proyectosData } from '../service/proyectos'
import { CardsComponent } from './CardsComponent';
import { CarruselComponent } from './CarruselComponent';

export const ProyectsComponent = () => {
    const data = proyectosData();
    
    return (
      <CarruselComponent/>
  )
}
