import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styleNew/HeaderComponentStyle.css";
import { useLocation } from "react-router-dom";
import { ToggleThemeComponent } from "./ToggleThemeComponent";

export const HeaderComponent = () => {
  const location = useLocation();
  const url = location.pathname;

useEffect(()=>{

}, [url])


  return (
    <header className="header">
<ToggleThemeComponent/>
      <div className="header-info">
        <h1>
          <Link to="/">Guadalupe Marándola</Link>
        </h1>
        <p>Desarrollo Web + Educación</p>
      </div>
      {/* navegador para escritorio */}
      <div className="header-nav-container">
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li>
              <Link to="/" className={url === "/" ? "titles-checked" :""}>Inicio</Link>
            </li>
            <li>
              <Link to="/aboutme" className={url === "/aboutme" ? "titles-checked" : ""}>Sobre mi</Link>
            </li>
            <li>
              <Link to="/contact" className={url === "/contact" ? "titles-checked" : ""}>Contacto</Link>
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
