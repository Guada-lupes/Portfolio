import React from 'react'
import { formacionData } from "../service/formacion"
import "../styleNew/StudiesComponentStyle.css";

export const StudiesComponent = () => {
    const data = formacionData();

  return (
      <>
        <section className="cards-section">
          <div className='cards-container'>
          {data.map((objeto) => (
            <div className="card-item-container" key={objeto.id}>
              <div className="card-img-container">
                <img src={objeto.imagen} alt={objeto.alt} />
              </div>
              <div className="card-title-container">
                <p>{objeto.titulo}</p>
              </div>
              <div className="card-info-container">
                <p>{objeto.descripcion}</p>
              </div>
            </div>
          ))}
          </div>
        </section>
      </>
    );
}
