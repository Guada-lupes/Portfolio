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
        <a
          target="_blank"
          href="https://www.linkedin.com/in/guadalupe-mar%C3%A1ndola-avila-webdev-pedagoga/"
        >
          <div className="footer-icon">Linkedin</div>
        </a>
        <a target="_blank" href="https://github.com/Guada-lupes">
          <div className="footer-icon">Github</div>
        </a>
      </div>
      <div onClick={openPolicy} className="footer-privacy footer-icon">
        {true ? "Politica de privacidad" : "Privacy policy"}
      </div>
      <div className="mi-creacion">
        {true
          ? "Web creada por Guadalupe Marándola"
          : "Created by Guadalupe Marándola"}
      </div>
      {open && (
        <div className="privacy-container" onClick={() => setOpen(false)}>
          <div className="privacy-content" onClick={(e) => e.stopPropagation()}>
            <h2>{true ? "Politica de privacidad" : "Privacy policy"}</h2>({" "}
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
            ) (
            <p>
              This website collects personal information only through the
              contact form, solely for the purpose of responding to inquiries
              received. - Data collected: name, email address, and any message
              you choose to include. - Purpose: to use this data exclusively to
              respond to your inquiry. - No data is shared with third parties,
              nor is it used for commercial or advertising purposes. - Google
              Forms: the form is managed through the Google Forms platform,
              which may collect additional information according to its own
              privacy policies. - Retention: data will be kept only for as long
              as necessary to handle the inquiry. - Rights: you may request the
              deletion of your data by writing directly to the email provided on
              this site.
            </p>
            )
          </div>
        </div>
      )}
    </footer>
  );
};
