import foto1 from "../assets/BookSpace.png"
import foto2 from "../assets/TiendaReact.png"
import foto3 from "../assets/TiendaJavaScript.png"
import foto4 from "../assets/RockstarReplica.png"

const proyectos = [
            {
        imagen: foto1,
        id:1,
        alt: "imagen del proyecto",
        titulo: "El Planeta de las Profesiones",
        descripcion: "El Planeta de las Profesiones es una Single Page Application (SPA) educativa que ofrece una experiencia gamificada para explorar el mercado laboral. Funcionalidades principales:",
        funcionalidades: ["Gestión de usuario: login/logout, progreso en el juego, desbloqueo de tribus y ocupaciones favoritas, implementado con useContext y useReducer", "Persistencia de datos: almacenamiento en localStorage para mantener la sesión y el avance del jugador", "Estructura de contenidos dinámica: un objeto-árbol con fases, retos y descripciones que se renderiza automáticamente según el progreso.", "Interacciones enriquecidas: integración de librerías de Drag & Drop para retos de clasificación y ordenamiento", "Datos reales: contenidos extraídos de informes del SEPE, con enlaces a fichas profesionales descargables."],
        em: "https://github.com/Guada-lupes",
    },
        {
        imagen: foto1,
        id:1,
        alt: "imagen del proyecto",
        titulo: "Catálogo Digital",
        descripcion: "Catálogo digital inmobiliario personalizable. Funcionalidades principales:",
        funcionalidades: ["Formulario de configuración: selección de agencia (logo y color corporativo), idioma (ES/EN), publicidad opcional y zonas.", "Modo FlippedBook online: virtualización dinámica que carga 5 páginas a la vez según la posición, para catálogos de hasta 450 viviendas sin reducir rendimiento", "Versión PDF imprimible: generación automática de revista digital usando React-PDF.", "Integración con la API de ZODDAK mediante peticiones asíncronas y token"],
        em: "https://github.com/Guada-lupes",
    },
    {
        imagen: foto1,
        id:1,
        alt: "imagen del proyecto",
        titulo: "BookSpace",
        descripcion: "Plataforma de gestión de libros y usuarios desarrollada con Vite y React. Permite a los usuarios explorar libros, gestionar favoritos, gestionar tareas administrativas (para administradores) y realizar operaciones CRUD tanto para libros como para perfiles de usuario. La aplicación utiliza React Context para la gestión global del estado y los servicios, gracias a la interacción con una matriz de objetos de datos simulados.",
        funcionalidades: [],
        em: "https://github.com/Guada-lupes/Proyecto-Final--Grupo-1.git",
    },
]
export function proyectosData() {
    return(
        proyectos
    )
}