import React from 'react'
import foto1 from "../assets/FotoPortfolio.png";
import "../styleNew/AboutMeComponentStyle.css"

export const AboutMeComponent = () => {
  return (
    <section className='about-section'>
        <div className='about-container'>
        <div className='about-img-container'>
            <img src={foto1} alt="imagen de perfil" />
        </div>
        <article className='about-article'>
            <h2>Hola, Soy Guadalupe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi aliquam officiis ea, ex expedita recusandae porro, quis veniam nostrum reprehenderit laborum ab aspernatur. Numquam exercitationem et odit aut sit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quasi quod odio est expedita optio excepturi ut, pariatur totam voluptatum enim atque temporibus id repudiandae exercitationem! Reiciendis, odit? Nostrum, iure.
            </p>
        </article>
        </div>
    </section>
  )
}
