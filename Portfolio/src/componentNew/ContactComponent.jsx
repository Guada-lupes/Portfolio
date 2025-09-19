import React from 'react'
import { useLayoutEffect } from "react";
import "../styleNew/ContactComponentStyle.css"
import { gsap } from "gsap";
import { SplitText } from "gsap/all";

export const ContactComponent = () => {

  useLayoutEffect(()=>{
    document.fonts.ready.then(() => {
    gsap.registerPlugin(SplitText);
      let split = SplitText.create(".contact-h2", {
        type: "words, chars",
        onSplit: (self) => {
          gsap.from(self.chars, {
            duration: 1,
            ease: "back.out",
            rotation: "random(-30, 30)",
            yPercent: "random([-100, 100])",
            autoAlpha: 0,
            stagger: {
              from: "random",
              amount: 0.03,
            },
          });
        },
      });
    });
  }, [])
  return (
    <section className='contact-section'>
        <div className='contact-container'>
            <div className='contac-text-container'>
            <h2 className='contact-h2'>Contáctame</h2>
            <p>Si estas buscando una <span>Desarrolladora Web Front-End</span> para tu equipo o una colaboradora para un proyecto comunitario emocionante, puedes enviarme un email a <a className='contact-email' target="_blank" href="mailto:educa.maravila@gmail.com">educa.maravila@gmail.com</a> o contactarme a través del siguiente formulario.</p>
            </div>
            <iframe className='contact-form' src="https://docs.google.com/forms/d/e/1FAIpQLSd8xFYNLgOBwnAvG_aWfUtpHf7MsS2ekGwwimlOp7hMYjBhVw/viewform?embedded=true" width="640" height="822" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div></section>
  )
}
