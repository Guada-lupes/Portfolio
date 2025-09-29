import TitlesComponent from "./TitlesComponenet";
import foto1 from "../assets/FotoPortfolio.avif";
import foto300 from "../assets/FotoPortfolio_300.avif"
import foto600 from "../assets/FotoPortfolio_600.avif"
import "../styleNew/AboutMeComponentStyle.css";
import BackButton from "./BackButton";

export const AboutMeComponent = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-img-container">
          <img
          className="about_img"
            loading="lazy"
            src={foto600}
            alt="imagen de perfil"
            srcSet={`${foto300} 300w, ${foto600} 600w, ${foto1} 1024w`}
            sizes="(max-width: 800px) 25vw, (min-width: 1000px) 10rem, 15rem"
            width="200"
            height="200"
          />
        </div>
        <article className="about-article">
          <TitlesComponent
            texto={"Hola, soy Guadalupe Marándola"}
            class_name={"article-h2"}
          />
          <p className="article-p">
            En 2024 me he embarcado en un nuevo proyecto profesional,
            convertirme en <span>Desarroladora Web Front-End</span>. 
          </p>
          <p className="article-p">

          </p>
          <p className="article-p">
            Actualmente utilizo las siguientes tecnologías: <span>HTML</span>,{" "}
            <span>CSS</span>, <span>JavaScript</span>, <span>React</span>,{" "}
            <span>Vite</span>, <span>Node.js</span>, <span>Sass</span>. Estoy
            trabajando en mejorar mi dominio y en crear código más{" "}
            <span>limpio</span>, <span>eficiente</span> y <span>escalable</span>
            .
          </p>
        </article>
      </div>
      <BackButton />
    </section>
  );
};
