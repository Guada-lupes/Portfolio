import TitlesComponent from "./TitlesComponenet";
import foto1 from "../assets/FotoPortfolio.avif";
import foto300 from "../assets/FotoPortfolio_300.avif";
import foto600 from "../assets/FotoPortfolio_600.avif";
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
            Tras una formación intensiva en desarrollo web continué aprendiendo
            de forma autónoma, diseñando y creando mis propios proyectos. Esto
            me ha permitido consolidar una base sólida en{" "}
            <span>JavaScript</span>, <span>ES6</span>, <span>CSS moderno</span>{" "}
            y <span>React</span>. Actualmente estoy profundizando en testing con <span>Jest</span>,
              explorando <span>Next.js</span> para la creación
            de páginas estáticas de alto rendimiento y utilizando{" "}
            <span>TypeScript</span> para escribir un código más claro y
            mantenible.
          </p>
          <p className="article-p">
            Mi trayectoria en el sector educativo me ha brindado habilidades
            transferibles muy valiosas para el desarrollo web: la capacidad de
            comunicar con claridad, planificar con eficacia y diseñar
            experiencias accesibles e intuitivas. Además, me caracterizo por mi
            creatividad, mi interés en la usabilidad y mi compromiso con el
            aprendizaje continuo.
          </p>
        </article>
      </div>
      <BackButton />
    </section>
  );
};
