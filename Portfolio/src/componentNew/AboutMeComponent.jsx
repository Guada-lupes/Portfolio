import TitlesComponent from "./TitlesComponenet";
import { useTheme } from "../contex/ThemeProvider";
import foto1 from "../assets/FotoPortfolio.avif";
import foto300 from "../assets/FotoPortfolio_300.avif";
import foto600 from "../assets/FotoPortfolio_600.avif";
import "../styleNew/AboutMeComponentStyle.css";
import BackButton from "./BackButton";

export const AboutMeComponent = () => {
  const { language } = useTheme();
  const titulo = language
    ? "Hola, soy Guadalupe Marándola"
    : "Hello, I'm Guadalupe Marándola";
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
          <TitlesComponent texto={titulo} class_name={"article-h2"} />
          {language ? (
            <>
              <p className="article-p">
                Tras una formación intensiva en desarrollo web continué
                aprendiendo de forma autónoma, diseñando y creando mis propios
                proyectos. Esto me ha permitido consolidar una base sólida en{" "}
                <span>JavaScript</span>, <span>ES6</span>,{" "}
                <span>CSS moderno</span> y <span>React</span>. Actualmente estoy
                profundizando en testing con <span>Jest</span>, explorando{" "}
                <span>Next.js</span> para la creación de páginas estáticas de
                alto rendimiento y utilizando <span>TypeScript</span> para
                escribir un código más claro y mantenible.
              </p>
              <p className="article-p">
                Mi objetivo profesional es ntegrar mi experiencia pedagógica y
                tecnológica en proyectos de tecnología educativa, diseño
                instruccional, desarrollo de contenidos digitales o formación
                corporativa, contribuyendo a la creación de experiencias de
                aprendizaje significativas, inclusivas y atractivas.
              </p>
            </>
          ) : (
            <>
              <p className="article-p">
                After intensive training in web development, I continued
                learning independently, designing and creating my own projects.
                This has allowed me to build a solid foundation in{" "}
                <span>JavaScript</span>, <span>ES6</span>,{" "}
                <span>modern CSS</span>, and <span>React</span>. I’m currently
                deepening my knowledge of testing with <span>Jest</span>,
                exploring <span>Next.js</span> for building high-performance
                static pages, and using <span>TypeScript</span> to write clearer
                and more maintainable code.
              </p>
              <p className="article-p">
                My professional goal is to integrate my pedagogical and
                technological experience into projects in educational
                technology, instructional design, digital content development,
                or corporate training, contributing to the creation of
                meaningful, inclusive, and engaging learning experiences.
              </p>
            </>
          )}
        </article>
      </div>
      <BackButton />
    </section>
  );
};
