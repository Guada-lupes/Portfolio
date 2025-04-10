import React from 'react'
import { experienciaData } from "../service/experiencia"
import { CardsComponent } from './CardsComponent';

export const WorkComponent = () => {
    const data = experienciaData();
  return (
    <CardsComponent data={data}/>
  )
}
