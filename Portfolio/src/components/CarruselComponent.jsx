import React from 'react'
import "../styles/CarruselComponentStyle.css"

export const CarruselComponent = ({children}) => {

  return (
    <div className='carrusel-container'>
        <div className='carrusel-pista'>
            {children}
        </div>
    </div>
  )
}
