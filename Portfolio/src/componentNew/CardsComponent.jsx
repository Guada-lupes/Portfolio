import React from "react";

export const CardsComponent = ({ data }) => {
  return (
    <>
      {/* <section className="cards-section"> */}
        {data.map((objeto) => (
          <div className="card-item-container" key={objeto.id}>
            <div className="card-img-container">
              <img src={objeto.imagen} alt={objeto.alt} />
            </div>
            <div className="card-title-container">
              <h2>{objeto.titulo}</h2>
            </div>
            <div className="card-info-container">
              <p>{objeto.descripcion}</p>
            </div>
          </div>
        ))}
      {/* </section> */}
    </>
  );
};
