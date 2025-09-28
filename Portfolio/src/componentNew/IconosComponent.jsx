import React, { useEffect } from "react";
import foto1 from "../assets/obrera.avif";
import foto2 from "../assets/ordenador.avif";
import foto3 from "../assets/caja.avif";
import foto4 from "../assets/libro.avif";
import foto5 from "../assets/herramientas.avif";
import ordenadorResponsive from "../assets/ordenador_300.avif";
import obreraResponsive from "../assets/obrera_300.avif";
import libroResponsive from "../assets/libro_300.avif";
import cajaResponsive from "../assets/caja_300.avif";
import herramientasResponsive from "../assets/herramientas_300.avif";
import ordenador600 from "../assets/ordenador_600.avif"
import obrera600 from "../assets/obrera_600.avif"
import libro600 from "../assets/libro_600.avif"
import caja600 from "../assets/caja_600.avif"
import herramientas600 from "../assets/herramientas_600.avif"
import { Link } from "react-router-dom";
import "../styleNew/IconosComponentStyle.css";
import { gsap } from "gsap";

export const IconosComponent = () => {

  useEffect(() => {
    gsap.to(".imagen", {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "circ.out",
    });
  }, []);

  return (
    <section className="home-iconos-section">
      <div className="iconos-container">
        <div className="icono-item">
          <Link className="item-img" to="/proyects">
            <img
              className="imagen"
              src={ordenadorResponsive}
              alt="icono de un ordenador retro"
              srcSet={`${ordenadorResponsive} 300w, ${ordenador600} 600w, ${foto2} 1024w`}
              sizes="(max-width: 800px) 140px, (min-width: 1000px) 160px, 14vw"
              width="200"
              height="200"
            />
          </Link>
          <Link className="item-p" to="/proyects">
            <p>Proyectos Web-Dev</p>
          </Link>
        </div>
        <div className="icono-item">
          <Link className="item-img" to="/studies">
            <img
              className="imagen"
              src={libroResponsive}
              alt="icono de un libro"
              srcSet={`${libroResponsive} 300w, ${libro600} 600w,  ${foto4} 1024w`}
              sizes="(max-width: 800px) 140px, (min-width: 1000px) 160px, 14vw"
              width="200"
              height="200"
            />
          </Link>
          <Link to="/studies" className="item-p">
            <p>Formación</p>
          </Link>
        </div>
        <div className="icono-item">
          <Link className="item-img" to="/tech">
            <img
              className="imagen"
              src={herramientasResponsive}
              alt="icono de una caja de herramientas"
              srcSet={`${herramientasResponsive} 300w, ${herramientas600} 600w,  ${foto5} 1024w`}
              sizes="(max-width: 800px) 140px, (min-width: 1000px) 160px, 14vw"
              width="200"
              height="200"
            />
          </Link>
          <Link to="/work" className="item-p">
            <p>Tecnologías</p>
          </Link>
        </div>
        <div className="icono-item">
          <Link className="item-img" to="/work">
            <img
              className="imagen"
              src={obreraResponsive}
              alt="icono de una mujer obrera"
              srcSet={`${obreraResponsive} 300w, ${obrera600} 600w,  ${foto1} 1024w`}
              sizes="(max-width: 800px) 140px, (min-width: 1000px) 160px, 14vw"
              width="200"
              height="200"
            />
          </Link>
          <Link to="/work" className="item-p">
            <p>Experiencia Profesional</p>
          </Link>
        </div>
        <div className="icono-item">
          <Link className="item-img" to="/others">
            <img
              className="imagen"
              src={cajaResponsive}
              alt="icono de una caja de sorpresa"
              srcSet={`${cajaResponsive} 300w, ${caja600} 600w,  ${foto3} 1024w`}
              sizes="(max-width: 800px) 140px, (min-width: 1000px) 160px, 14vw"
              width="200"
              height="200"
            />
          </Link>
          <Link to="/others" className="item-p">
            <p>Otros proyectos</p>
          </Link>
        </div>
      </div>
    </section>
  );
};
