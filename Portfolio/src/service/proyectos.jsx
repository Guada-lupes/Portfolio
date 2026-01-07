import planeta2 from "../assets/planeta_profesiones.webm";
import planeta1 from "../assets/planeta.mp4";
import catalogo1 from "../assets/catalogo.mp4";
import catalogo2 from "../assets/catalogo.webm";
import foto3 from "../assets/BookSpace.png";
import asistente1 from "../assets/asistente.webp";
import asistente2   from "../assets/asistente.png";


const proyectos = {
  es: [
        {
      // video_id: "5WGMRXzbcUA",
      imagen: asistente2,
      imagen_dos: asistente1,
      id: 1,
      alt: "imagen del proyecto",
      titulo: "Asistente Virtual CloudNote Pro",
      descripcion:
        "Asistente virtual inteligente de soporte técnico construido con React, TypeScript y LangChain. Este proyecto es una práctica educativa que simula un sistema de soporte automatizado para CloudNote Pro, una aplicación ficticia de toma de notas:",
      funcionalidades: [
        "Clasificación híbrida (reglas + LLM) para filtrar consultas fuera de dominio y redirigir a recursos adecuados.",
        "Memoria conversacional que mantiene el contexto de la interacción del usuario para respuestas coherentes.",
        "Integración con Groq (modelo llama-3.1-8b-instant) para generación de respuestas naturales y precisas.",
        "Respuestas contextualizadas basadas en el historial de conversación",
      ],
      stack: "",
      em: "https://github.com/Guada-lupes/Chatbot",
    },
    {
      video_id: "5WGMRXzbcUA",
      imagen: planeta2,
      imagen_dos: planeta1,
      id: 1,
      alt: "imagen del proyecto",
      titulo: "El Planeta de las Profesiones",
      descripcion:
        "El Planeta de las Profesiones es una Single Page Application (SPA) educativa que ofrece una experiencia gamificada para explorar el mercado laboral. Funcionalidades principales:",
      funcionalidades: [
        "Gestión de usuario: login/logout, progreso en el juego, desbloqueo de tribus y ocupaciones favoritas, implementado con useContext y useReducer",
        "Persistencia de datos: almacenamiento en localStorage para mantener la sesión y el avance del jugador",
        "Estructura de contenidos dinámica: un objeto-árbol con fases, retos y descripciones que se renderiza automáticamente según el progreso.",
        "Interacciones enriquecidas: integración de la librería 'hello pangea/dnd' para el drag and drop en retos de clasificación y ordenamiento.",
        "Datos reales: contenidos extraídos de informes del SEPE, con enlaces a fichas profesionales descargables.",
      ],
      stack: "",
      em: "https://github.com/Guada-lupes/OccupationsGame",
    },
    {
      video_id: "L5eIWGDVuHw",
      imagen: catalogo2,
      imagen_dos: catalogo1,
      id: 1,
      alt: "imagen del proyecto",
      titulo: "Catálogo Digital",
      descripcion:
        "Catálogo digital inmobiliario personalizable. Funcionalidades principales:",
      funcionalidades: [
        "Formulario de configuración: selección de agencia (logo y color corporativo), idioma (ES/EN), publicidad opcional y zonas.",
        "Modo FlippedBook online: virtualización dinámica que carga 5 páginas a la vez según la posición, para catálogos de hasta 450 viviendas sin reducir rendimiento",
        "Versión PDF imprimible: generación automática de revista digital usando React-PDF.",
        "Integración con la API de ZODDAK mediante peticiones asíncronas y token",
      ],
      stack: "",
      em: "",
    },
    {
      imagen: foto3,
      imagen_dos: foto3,
      id: 1,
      alt: "imagen del proyecto",
      titulo: "BookSpace",
      descripcion:
        "Plataforma de gestión de libros y usuarios desarrollada con Vite y React. Permite a los usuarios explorar libros, gestionar favoritos, gestionar tareas administrativas (para administradores) y realizar operaciones CRUD tanto para libros como para perfiles de usuario. La aplicación utiliza React Context para la gestión global del estado y los servicios, gracias a la interacción con una matriz de objetos de datos simulados.",
      funcionalidades: [],
      stack: "",
      em: "https://github.com/Guada-lupes/Proyecto-Final--Grupo-1.git",
    },
  ],
  en: [
    {
      video_id: "5WGMRXzbcUA",
      imagen: planeta2,
      imagen_dos: planeta1,
      id: 1,
      alt: "imagen del proyecto",
      titulo: "The Planet of Professions",
      descripcion:
        "The Planet of Professions is an educational Single Page Application (SPA) that offers a gamified experience to explore the job market. Main features:",
      funcionalidades: [
        "User management: login/logout, game progress, tribe unlocking, and favorite occupations, implemented with useContext and useReducer.",
        "Data persistence: stored in localStorage to maintain user session and progress.",
        "Dynamic content structure: a tree-shaped data object with stages, challenges, and descriptions that renders automatically based on user progress.",
        "Enhanced interactions: integration of the 'hello pangea/dnd' library for drag-and-drop features in sorting and classification challenges.",
        "Real-world data: content extracted from SEPE reports, including links to downloadable professional profiles.",
      ],
      stack: "",
      em: "https://github.com/Guada-lupes/OccupationsGame",
    },
    {
      video_id: "L5eIWGDVuHw",
      imagen: catalogo2,
      imagen_dos: catalogo1,
      id: 1,
      alt: "imagen del proyecto",
      titulo: "Digital Catalog",
      descripcion:
        "Customizable real estate digital catalog. Main features:",
      funcionalidades: [
        "Configuration form: choose agency (logo and corporate color), language (ES/EN), optional advertising, and zones.",
        "Online FlippedBook mode: dynamic virtualization that loads 5 pages at a time based on user position, allowing catalogs with up to 450 properties without performance loss.",
        "Printable PDF version: automatic digital magazine generation using React-PDF.",
        "Integration with the ZODDAK API through asynchronous requests and token authentication.",
      ],
      stack: "",
      em: "",
    },
    {
      imagen: foto3,
      imagen_dos: foto3,
      id: 1,
      alt: "imagen del proyecto",
      titulo: "BookSpace",
      descripcion:
        "Book and user management platform built with Vite and React. It allows users to explore books, manage favorites, perform administrative tasks (for admins), and carry out CRUD operations for both books and user profiles. The application uses React Context for global state and service management, interacting with a simulated dataset.",
      funcionalidades: [],
      stack: "",
      em: "https://github.com/Guada-lupes/Proyecto-Final--Grupo-1.git",
    },
  ],
};

export function proyectosData() {
  return proyectos;
}
