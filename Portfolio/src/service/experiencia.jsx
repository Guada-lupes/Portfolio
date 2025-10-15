import foto1 from "../assets/empleabilidad3.avif";
import foto3 from "../assets/empleabilidad1.avif";
import foto2 from "../assets/orobal1.avif";
import zoddak from "../assets/zoddak.avif";

const experiencia = [
    {
        imagen: zoddak,
        id: 1,
        alt: "imagen de una clase",
        titulo_es: "Desarrolladora Front End",
        descripcion_es: "Formé parte de un equipo de dos personas para el desarrollo de un proyecto real a partir de un producto mínimo viable. La experiencia fue 100% en remoto, lo que implicó:",
        descripcion_2_es: ["Planificación y organización: definimos funcionalidades iniciales en reuniones con la empresa y creamos un tablero en Trello para gestionar tareas, asignaciones y flujos de trabajo.", "Trabajo colaborativo: utilizamos Git y GitHub para control de versiones y coordinación del código. Mantuvimos comunicación diaria y reuniones semanales (propias y con el tutor) para resolver dudas, presentar avances y recoger feedback.", "Coherencia visual: elaboramos en Figma un diseño inicial que sirvió de guía común para asegurar consistencia en la interfaz."],
        descripcion_3_es: "Esta experiencia me permitió desarrollar habilidades de coordinación, autogestión y comunicación efectiva en entornos de trabajo remoto, aplicando herramientas profesionales para la colaboración ágil.",
        descripcion_4_es: ["Diseño de componentes React limpios y modulares, con lógica encapsulada y responsabilidad única.", "Escritura de lógica JavaScript clara y reutilizable: cada función y hook cumple una sola tarea y puede aprovecharse en distintos contextos.", "Profundicé en optimización de rendimiento con Hooks: useMemo para cachear cálculos costosos (paginación, agrupado). useCallback y React.memo para evitar renders innecesarios."],
        titulo_en: "Front-End Developer",
        descripcion_en: "I was part of a two-person team developing a real-world project starting from a minimum viable product. The experience was 100% remote, which involved:",
        descripcion_2_en: [
            "Planning and organization: we defined initial functionalities in meetings with the company and created a Trello board to manage tasks, assignments, and workflows.",
            "Collaborative work: we used Git and GitHub for version control and code coordination. We maintained daily communication and weekly meetings (both internal and with the mentor) to solve questions, present progress, and gather feedback.",
            "Visual consistency: we designed an initial layout in Figma that served as a common guide to ensure interface coherence."
        ],
        fecha: "2025",
        descripcion_3_en: "This experience allowed me to develop coordination, self-management, and effective communication skills in remote work environments, applying professional tools for agile collaboration.",
        descripcion_4_en: [
            "Design of clean, modular React components with encapsulated logic and single responsibility.",
            "Writing clear and reusable JavaScript logic: each function and hook serves a single purpose and can be reused in different contexts.",
            "Deepened performance optimization with Hooks: useMemo to cache expensive calculations (pagination, grouping), and useCallback with React.memo to prevent unnecessary re-renders."
        ],
        fecha: "2025"
    },
    {
        imagen: foto1,
        id: 2,
        alt: "imagen de una clase",
        titulo_es: "Pedagoga",
        descripcion_es: "Mi trayectoria como pedagoga me ha permitido desarrollar competencias clave que aporto ahora a mi faceta como desarrolladora web:",
        descripcion_2_es: ["Comunicación y claridad: experiencia como docente de adultos, capaz de explicar conceptos complejos de forma accesible y adaptada a diferentes perfiles.", "Diseño y planificación: creación de materiales educativos y programación de clases, trasladable a la organización de proyectos y documentación técnica.", "Adaptabilidad y empatía: trabajo como pedagoga terapéutica con alumnado con distintas capacidades, lo que fortaleció mi capacidad de escucha, flexibilidad y resolución de problemas.", "Orientación y acompañamiento: como orientadora laboral, asesoré a personas en procesos de cambio, desarrollando habilidades de análisis, escucha activa y trabajo colaborativo."],
        descripcion_3_es: "Estas experiencias me han dotado de habilidades interpersonales, organización y visión pedagógica, que ahora aplico al desarrollo de productos digitales orientados a la usabilidad y la experiencia del usuario.",
        titulo_en: "Pedagogue",
        descripcion_en: "My career as a pedagogue has allowed me to develop key skills that I now bring to my work as a web developer:",
        descripcion_2_en: [
            "Communication and clarity: experience as an adult educator, able to explain complex concepts in an accessible way adapted to different profiles.",
            "Design and planning: creation of educational materials and lesson plans, transferable to project organization and technical documentation.",
            "Adaptability and empathy: work as a therapeutic pedagogue with students of varying abilities, which strengthened my listening skills, flexibility, and problem-solving capacity.",
            "Guidance and support: as a career counselor, I advised people during career transitions, developing skills in analysis, active listening, and collaborative work."
        ],
        descripcion_3_en: "These experiences have equipped me with interpersonal, organizational, and pedagogical skills that I now apply to developing digital products focused on usability and user experience."
    },
]
export function experienciaData() {
    return (experiencia)
}
