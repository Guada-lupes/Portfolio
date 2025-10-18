import React from "react";
import { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "../styleNew/HeaderComponentStyle.css";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import LanguageComponent from "./LanguageComponent";

export const HeaderComponent = () => {
  const location = useLocation();
  const url = location.pathname;
  const subtitle = true ? "Desarrollo Web + Educación" : "Web Development and Education"
  const index_es = ["Inicio", "Sobre mi", "Contacto"]
  const index_en = ["Home", "About Me", "Contact"]

  useLayoutEffect(() => {
    document.fonts.ready.then(() => {
      gsap.registerPlugin(SplitText);

      const split = new SplitText("#compatibility", { type: "words, chars" });
      const tl = gsap.timeline();

      tl.set("#compatibility", { autoAlpha: 1 });

      split.chars.forEach((char, i) => {
        tl.fromTo(
          char,
          {
            transformOrigin: "center -160px",
            z: 0.1,
            rotation: Math.random() < 0.5 ? 90 : -90,
          },
          {
            rotation: 0,
            ease: "elastic.out",
            duration: 2.4,
          },
          0.3 + i * 0.06
        );
      });
    });
  }, []);

  useEffect(() => {}, [url]);

  return (
    <header className="header">
      <LanguageComponent />
      <div className="header-info">
        <Link to="/">
          <h1 id="compatibility" className="name_title">
            {" "}
            Guadalupe Marándola
          </h1>
        </Link>
        <p>{subtitle}</p>
      </div>
      {/* navegador para escritorio */}
      <div className="header-nav-container">
        <nav className="header-nav">
          <ul className="header-nav-ul">
            <li>
              <Link to="/" className={url === "/" ? "titles-checked" : ""}>
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/aboutme"
                className={url === "/aboutme" ? "titles-checked" : ""}
              >
                Sobre mi
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={url === "/contact" ? "titles-checked" : ""}
              >
                Contacto
              </Link>
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
