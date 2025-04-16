import React from 'react'
import "../styleNew/ContactComponentStyle.css"

export const ContactComponent = () => {
  return (
    <section className='contact-section'>
        <div className='contact-container'>
            <div className='contac-text-container'>
            <h2>Contáctame</h2>
            <p>Si estas buscando una <span>Desarrolladora Web Front-End</span> para tu equipo o una colaboradora para un proyecto comunitario emocionante, puedes enviarme un email a <a className='contact-email' target="_blank" href="mailto:educa.maravila@gmail.com">educa.maravila@gmail.com</a> o contactarme a través del siguiente formulario.</p>
            </div>
            <iframe className='contact-form' src="https://docs.google.com/forms/d/e/1FAIpQLSd8xFYNLgOBwnAvG_aWfUtpHf7MsS2ekGwwimlOp7hMYjBhVw/viewform?embedded=true" width="640" height="822" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div></section>
  )
}
