import foto1 from "../assets/empleabilidad3.jpeg"
import foto3 from "../assets/empleabilidad1.jpeg";
import foto2 from "../assets/orobal1.jpeg";

const experiencia = [
    {imagen: foto1,
        id: 1,
        alt: "imagen de una clase",
        titulo: "Docente de formación para el empleo",
        descripcion: "Diseño y elaboración de materiales didácticos, gestión y dinamización de grupos, comunicación fectiva, resolución de problemas.",
        em: "Tecno Inte, Fyrescan, Reyes, FormaciónLine, Focan",
        fecha: "2023-actualidad",
    },
    {imagen: foto2,
        id:2,
        titulo: "Pedagoga terapéuta",
        alt: "imagen de materiales didacticos",
        descripcion: "Sesiones individualizadas de reeducación pedagógica a niños con NEE o NEAE, asesoramiento familiar, coordinación profesional, elaboración de informes.",
        em: "Orobal",
        fecha: "2023-2024",
    },
    {imagen: foto3,
        id:3,
        alt: "imagen de una clase",
        titulo: "Coordinadora / Orientadora Laboral",
        descripcion: "Diseño, redacción y gestión de proyectos para la mejora de la empleabilidad y la sensibilización, coordinación de equipos y con otros agentes, elaboración de memorias, docencia de compentencias digitales, igualdad e inserción laboral, resolución de conflictos, planificación de actividades, orientación laboral mediante IPI.",
        em:"Ayuntamiento de Adeje",
        fecha: "2020-2024",
    },
]
export function experienciaData() {
    return(experiencia)
}