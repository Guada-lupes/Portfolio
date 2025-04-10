import React from 'react'

export const CardsComponent = ({data}) => {

  return (
    <>
    <section className='cards-section'>
    {data.map((objeto)=>
    (<div className='cards-container' id={objeto.id}>
      <div className='card-img-container'><img src={objeto.imagen} alt={objeto.alt} /></div>
        <div className='card-title-container'><h2>{objeto.title}</h2>
          </div>
            <div className='card-info-container'>
                <p>{objeto.descripcion}</p>
            </div>
            <div className='card-extra-container'><p>{objeto.em}</p></div>
        </div>
    ))}
    </section>
        
    </>

    
  )
}
