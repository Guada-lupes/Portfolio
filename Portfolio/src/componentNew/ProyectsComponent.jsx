import React from 'react'
import { proyectosData } from '../service/proyectos'
import { CardsComponent } from './CardsComponent';

export const ProyectsComponent = () => {
    const data = proyectosData();
    
    return (
    <CardsComponent data={data}/>
  )
}
