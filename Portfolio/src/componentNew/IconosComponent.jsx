import React from 'react'
import foto1 from "../assets/obrera.png"
import foto2 from "../assets/ordenador.png"
import foto3 from "../assets/caja.png"
import foto4 from "../assets/libro.png"
import foto5 from "../assets/herramientas.png"
import { Link } from 'react-router-dom'
import "../styleNew/IconosComponentStyle.css"

export const IconosComponent = () => {
  return (
    <section className='home-iconos-section'>
        <div className='iconos-container'>
            <div className='icono-item'>
                <Link className='item-img' to="/proyects"><img src={foto2} alt="icono de un ordenador retro" /></Link>
                <Link className='item-p' to="/proyects"><p>Proyectos Web-Dev</p></Link> 
                
            </div>
            <div className='icono-item'>
                <Link className='item-img' to="/studies"><img src={foto4} alt="icono de un libro"/></Link>
                <Link to="/studies" className='item-p'><p>Formación</p></Link> 
            </div>
            <div className='icono-item'>
                <Link className='item-img' to="/tech"><img src={foto5} alt="icono de una caja de herramientas" /></Link>
                <Link to="/work" className='item-p'><p>Tecnologías</p></Link>
            </div>
            <div className='icono-item'>
                <Link className='item-img' to="/work"><img src={foto1} alt="icono de una mujer obrera" /></Link>
                <Link to="/work" className='item-p'><p>Experiencia Profesional</p></Link>
            </div>
            <div className='icono-item'>
                <Link className='item-img' to="/others"><img src={foto3} alt="icono de una caja de sorpresa" /></Link>
                <Link to="/others" className='item-p'><p>Otros proyectos</p></Link>
            </div>
        </div>
    </section>
  )
}
