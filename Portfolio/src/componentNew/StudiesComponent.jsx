import React from 'react'
import { formacionData } from "../service/formacion"
import { CardsComponent } from './CardsComponent';

export const StudiesComponent = () => {
    const data = formacionData();

  return (
    <CardsComponent data={data}/>
  )
}
