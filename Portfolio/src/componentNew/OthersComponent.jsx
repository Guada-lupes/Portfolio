import React from "react";
import { otrosData } from "../service/otros";
import TitlesComponent from "./TitlesComponenet";
import "../styleNew/OthersComponentStyle.css";
import BackButton from "./BackButton";

export const OthersComponent = () => {
  const data = otrosData();

  return (
    <>
      <section className="others-cards-section">
        <TitlesComponent texto={"Arte y mixmedia"} class_name={"art_title"} />({" "}
        <p className="art_p">
          Disfruto creando todo tipo de artefactos: cuadros, álbumes de fotos,
          itinerarios de viaje, juegos educativos, entre otros. Me apasiona todo
          el proceso: imaginar la pieza, elegir la paleta de colores y los
          materiales, planificar la composición, enfrentar los momentos de
          bloqueo y, finalmente, dejarme llevar por los sentidos hasta alcanzar
          el resultado deseado.
        </p>{" "}
        <p className="art_p">
          Aquí muestro una selección de mis cuadros. Suelo partir de una idea o
          de un material y emprender un proceso de transformación. Trabajo con
          acrílicos, telas, plantas, objetos en desuso, moldes, pastas y tintes,
          experimentando con texturas y combinaciones que den vida a nuevas
          formas.
        </p>
        ) (
        <p className="art_p">
          I enjoy creating all kinds of artifacts: paintings, photo albums,
          travel itineraries, educational games, and more. I’m passionate about
          the entire process — imagining the piece, choosing the color palette
          and materials, planning the composition, facing creative blocks, and
          finally letting my senses guide me to the desired result.
        </p>{" "}
        <p className="art_p">
          Here I showcase a selection of my paintings. I usually start from an
          idea or a material and embark on a process of transformation. I work
          with acrylics, fabrics, plants, discarded objects, molds, pastes, and
          dyes, experimenting with textures and combinations that bring new
          forms to life.
        </p>
        )
        <div className="others-cards-container">
          {data.map((objeto) => (
            <div className="others-card-item-container" key={objeto.id}>
              <div className="others-card-img-container">
                <img loading="lazy" src={objeto.imagen} alt={objeto.alt} />
              </div>
              <div className="others-card-title-container">
                <p>{objeto.titulo}</p>
              </div>
            </div>
          ))}
        </div>
        <BackButton />
      </section>
    </>
  );
};
