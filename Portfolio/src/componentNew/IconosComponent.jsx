import React from 'react'
import foto1 from "../assets/obrera.png"
import foto2 from "../assets/ordenador.png"
import foto3 from "../assets/caja.png"
import foto4 from "../assets/libro.png"
import { Link } from 'react-router-dom'
import "../styles/IconosComponentStyle.css"

export const IconosComponent = () => {
  return (
    <section className='home-iconos-section'>
        <div className='iconos-container'>
            <div className='icono-item'>
                <Link to="/proyects"><img src={foto2} alt="" /></Link>
                <Link to="/proyects"><p>Proyectos Web-Dev</p></Link> 
                
            </div>
            <div className='icono-item'>
                <Link to="/studies"><img src={foto4} alt=""/></Link>
                <Link to="/studies"><p>Formación</p></Link> 
            </div>
            <div className='icono-item'>
                <Link to="/work"><img src={foto1} alt="" /></Link>
                <Link to="/work"><p>Experiencia Profesional</p></Link>
            </div>
            <div className='icono-item'>
                <Link to="/others"><img src={foto3} alt="" /></Link>
                <Link to="/others"><p>Otros proyectos</p></Link>
            </div>
        </div>
    </section>
  )
}
