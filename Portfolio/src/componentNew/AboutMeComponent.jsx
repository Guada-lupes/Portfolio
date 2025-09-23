import TitlesComponent from "./TitlesComponenet";
import foto1 from "../assets/FotoPortfolio.png";
import "../styleNew/AboutMeComponentStyle.css";
import BackButton from "./BackButton";

export const AboutMeComponent = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-img-container">
          <img loading="lazy" src={foto1} alt="imagen de perfil" />
        </div>
        <article className="about-article">
          <TitlesComponent
            texto={"Hola, soy Guadalupe Marándola"}
            class_name={"article-h2"}
          />
          <p className="article-p">
            En 2024 me he embarcado en un nuevo proyecto profesional,
            convertirme en <span>Desarroladora Web Front-End</span>. Siempre me
            ha gustado la tecnología y como pedagoga integro en mi práctica
            numerosas herramientas digitales que facilitan y dinamizan el
            trabajo. Mi sorpresa fué descubrir que ser desarroladora web
            encajaba perfectamente con mi persona: la necesidad de resolver de
            problemas, de ser perseverante, de tolerar la frustración y la
            incertidumbre, incluso, el tener que gestionar un aprendizaje
            contínuo o convertirme un poquito en investigadora.
          </p>
          <p className="article-p">
            Sumado a todo ello, la posibilidad de ser creativa y la libertad de
            diseñar y crear proyectos personales, aumentaron mi fascinación por
            el mundo del desarrollo. Aqui es donde me quiero quedar y crecer
            profesionalmente, por supuesto, trayendo conmigo, mis conocimientos
            y habilidades desarrolladas como pedagoga.
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
      <BackButton/>
    </section>
  );
};
