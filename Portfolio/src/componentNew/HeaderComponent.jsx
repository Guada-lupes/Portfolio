import React from "react";
import { Link } from "react-router-dom";
import "../styleNew/HeaderComponentStyle.css";

export const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-info">
        <h1>
          <span>Guadalupe Marándola</span>
        </h1>
        <p>Desarrollo Web + Educación</p>
      </div>
      {/* navegador para escritorio */}
      <div className="header-nav-container">
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/aboutme">Sobre mi</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
        {/* navegador para mobile */}
        {/* <div className='header-nav-mobile'>
<select name="" id="">
  <option value="">Inicio</option>
  <option value="">Sobre mi</option>
  <option value="">Contacto</option>
</select>
        </div> */}
      </div>
    </header>
  );
};
