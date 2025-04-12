import React from 'react'
import "../styleNew/ContactComponentStyle.css"

export const ContactComponent = () => {
  return (
    <section className='contact-section'>
        <div className='contact-container'>
            <div className='contac-text-container'>
            <h2>Contáctame</h2>
            <p>Puedes contactarme por aqui o enviarme un email a <a href="mailto:educa.maravila@gmail.com">educa.maravila@gmail.com</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cum ab nesciunt. Laboriosam autem, dolore maxime reiciendis, totam ea vel ipsum eos, iure magni obcaecati. Fugiat a labore illum voluptas.</p>
            </div>
            <iframe className='contact-form' src="https://docs.google.com/forms/d/e/1FAIpQLSd8xFYNLgOBwnAvG_aWfUtpHf7MsS2ekGwwimlOp7hMYjBhVw/viewform?embedded=true" width="640" height="822" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div></section>
  )
}
