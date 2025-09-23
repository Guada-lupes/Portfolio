import React from 'react'
import { experienciaData } from "../service/experiencia"
import "../styleNew/WorkComponentStyle.css"
import TitlesComponent from './TitlesComponenet'
import BackButton from './BackButton'

export const WorkComponent = () => {
    const data = experienciaData();

  return (
          <section className="work-cards-section">
            <TitlesComponent texto={"Experiencia laboral"} class_name={"work_title"}/>
            <div className='work-cards-container'>
            {data.map((objeto) => (
          <div className="work-card-item-container" key={objeto.id}>
            <div className="work-card-img-container">
              <img loading='lazy' src={objeto.imagen} alt={objeto.alt} />
            </div>
            <div className="work-card-title-container">
              <p>{objeto.titulo}</p>
            </div>
            <div className="work-card-info-container">
              <p>{objeto.descripcion}</p>
            </div>
          </div>
        ))}
              </div> 
              <BackButton/>
      </section>
  )
}
