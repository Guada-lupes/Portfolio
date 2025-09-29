import foto1 from "../assets/empleabilidad3.avif"
import foto3 from "../assets/empleabilidad1.avif";
import foto2 from "../assets/orobal1.avif";
import zoddak from "../assets/zoddak.avif"

const experiencia = [
    {imagen: zoddak,
        id: 1,
        alt: "imagen de una clase",
        titulo: "Desarrolladora Front End",
        descripcion: "Formé parte de un equipo de dos personas para el desarrollo de un proyecto real a partir de un producto mínimo viable. La experiencia fue 100% en remoto, lo que implicó:",
        descripcion_2: ["Planificación y organización: definimos funcionalidades iniciales en reuniones con la empresa y creamos un tablero en Trello para gestionar tareas, asignaciones y flujos de trabajo.", "Trabajo colaborativo: utilizamos Git y GitHub para control de versiones y coordinación del código. Mantuvimos comunicación diaria y reuniones semanales (propias y con el tutor) para resolver dudas, presentar avances y recoger feedback.", "Coherencia visual: elaboramos en Figma un diseño inicial que sirvió de guía común para asegurar consistencia en la interfaz."],
        fecha: "2025",
        descripcion_3: "Esta experiencia me permitió desarrollar habilidades de coordinación, autogestión y comunicación efectiva en entornos de trabajo remoto, aplicando herramientas profesionales para la colaboración ágil.",
        descripcion_4: ["Diseño de componentes React limpios y modulares, con lógica encapsulada y responsabilidad única.", "Escritura de lógica JavaScript clara y reutilizable: cada función y hook cumple una sola tarea y puede aprovecharse en distintos contextos.", "Profundicé en optimización de rendimiento con Hooks: useMemo para cachear cálculos costosos (paginación, agrupado). useCallback y React.memo para evitar renders innecesarios."],
    fecha:"2025"},
        {imagen: foto1,
        id: 2,
        alt: "imagen de una clase",
        titulo: "Pedagoga",
        descripcion: "Mi trayectoria como pedagoga me ha permitido desarrollar competencias clave que aporto ahora a mi faceta como desarrolladora web:",
        descripcion_2: ["Comunicación y claridad: experiencia como docente de adultos, capaz de explicar conceptos complejos de forma accesible y adaptada a diferentes perfiles.","Diseño y planificación: creación de materiales educativos y programación de clases, trasladable a la organización de proyectos y documentación técnica.","Adaptabilidad y empatía: trabajo como pedagoga terapéutica con alumnado con distintas capacidades, lo que fortaleció mi capacidad de escucha, flexibilidad y resolución de problemas.", "Orientación y acompañamiento: como orientadora laboral, asesoré a personas en procesos de cambio, desarrollando habilidades de análisis, escucha activa y trabajo colaborativo."],
        descripcion_3: "Estas experiencias me han dotado de habilidades interpersonales, organización y visión pedagógica, que ahora aplico al desarrollo de productos digitales orientados a la usabilidad y la experiencia del usuario."
    },
    {imagen: foto1,
        id: 2,
        alt: "imagen de una clase",
        titulo: "Docente de formación para el empleo",
        descripcion: "Mi labor es ayudar a las personas a mejorar su empleabilidad a través de herramientas para la búsqueda de empleo y el entrenamiento en competencias blandas.",
        em: "Tecno Inte, Fyrescan, Reyes, FormaciónLine, Focan",
        fecha: "2023-actualidad",
    },
    {imagen: foto2,
        id:3,
        titulo: "Pedagoga terapéuta",
        alt: "imagen de materiales didacticos",
        descripcion: "Como pedagoga terapéuta trabajo con personas adultas y niños, con discapacidad o con dificultades de aprendizaje. Mi labor consiste en promover su autonomía y el desarrollo de sus capacidades.",
        em: "Orobal",
        fecha: "2023-2024",
    },
    {imagen: foto3,
        id:4,
        alt: "imagen de una clase",
        titulo: "Coordinadora / Orientadora Laboral",
        descripcion: "Como coordinador y orientadora laboral diseño, redacto y ejecuto proyectos socio-educativos para personas adultas, gestiono equipos multidisciplinares y me coordino con otros agentes sociales.",
        fecha: "2020-2024",
    },
]
export function experienciaData() {
    return(experiencia)
}