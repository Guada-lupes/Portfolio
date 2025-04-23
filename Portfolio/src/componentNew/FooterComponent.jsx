import React, { useState } from "react";
import "../styleNew/FooterComponentStyle.css";

export const FooterComponent = () => {
  const [open, setOpen] = useState(false);
  function openPolicy(params) {
    setOpen(true);
  }
  return (
    <footer className="footer">
      <div className="footer-iconos">
        <a target="_blank" href="https://www.linkedin.com/in/guadalupe-mar%C3%A1ndola-avila-webdev-pedagoga/">
          <div className="footer-icon">Linkedin</div>
        </a>
        <a target="_blank" href="https://github.com/Guada-lupes">
          <div className="footer-icon">Github</div>
        </a>
      </div>
      <div onClick={openPolicy} className="footer-privacy footer-icon">
        Politica de privacidad
      </div>
      <div className="mi-creacion">Web creada por Guadalupe Marándola</div>
      {open && (
        <div className="privacy-container" onClick={() => setOpen(false)}>
          <div className="privacy-content" onClick={(e) => e.stopPropagation()}>
            <h2>Política de Privacidad</h2>
            <p>
              Este sitio web recopila información personal únicamente a través
              del formulario de contacto, con el único fin de responder a las
              consultas recibidas. - Datos recopilados: nombre, correo
              electrónico y cualquier mensaje que decidas incluir. - Finalidad:
              utilizar estos datos exclusivamente para responder a tu consulta.
              - No se comparten datos con terceros, ni se utilizan para fines
              comerciales o publicitarios. - Google Forms: el formulario está
              gestionado mediante la plataforma Google Forms, que puede
              recopilar información adicional según sus propias políticas de
              privacidad. - Conservación: los datos se conservarán solo el
              tiempo necesario para atender la consulta. - Derechos: puedes
              solicitar la eliminación de tus datos escribiéndome directamente
              al correo proporcionado en este sitio.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};
