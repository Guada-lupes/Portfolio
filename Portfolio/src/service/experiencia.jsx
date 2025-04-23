import foto1 from "../assets/empleabilidad3.jpeg"
import foto3 from "../assets/empleabilidad1.jpeg";
import foto2 from "../assets/orobal1.jpeg";

const experiencia = [
    {imagen: foto1,
        id: 1,
        alt: "imagen de una clase",
        titulo: "Docente de formación para el empleo",
        descripcion: "Mi labor es ayudar a las personas a mejorar su empleabilidad a través de herramientas para la búsqueda de empleo y el entrenamiento en competencias blandas.",
        em: "Tecno Inte, Fyrescan, Reyes, FormaciónLine, Focan",
        fecha: "2023-actualidad",
    },
    {imagen: foto2,
        id:2,
        titulo: "Pedagoga terapéuta",
        alt: "imagen de materiales didacticos",
        descripcion: "Como pedagoga terapéuta trabajo con personas adultas y niños, con discapacidad o con dificultades de aprendizaje. Mi labor consiste en promover su autonomía y el desarrollo de sus capacidades.",
        em: "Orobal",
        fecha: "2023-2024",
    },
    {imagen: foto3,
        id:3,
        alt: "imagen de una clase",
        titulo: "Coordinadora / Orientadora Laboral",
        descripcion: "Como coordinador y orientadora laboral diseño, redacto y ejecuto proyectos socio-educativos para personas adultas, gestiono equipos multidisciplinares y me coordino con otros agentes sociales.",
        fecha: "2020-2024",
    },
]
export function experienciaData() {
    return(experiencia)
}