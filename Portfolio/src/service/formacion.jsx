const formacion = [
{
    imagen: "https://www.uned.es/universidad/.imaging/mte/home-nueva-theme/120/dam/recursos-corporativos/logotipos/genericos/Logo-UNED-30x30_Color.png/jcr:content/Logo-UNED-bajares.png",
    id:2,
    alt: "logo de la academia",
    titulo: "Grado en Pedagogía",
    descripcion: "2020",
    em:"UNED",
},
{
    imagen: "https://www.uned.es/universidad/.imaging/mte/home-nueva-theme/120/dam/recursos-corporativos/logotipos/genericos/Logo-UNED-30x30_Color.png/jcr:content/Logo-UNED-bajares.png",
    id:3,
    alt: "logo de la academia",
    titulo: "Máster en Formación del profesorado",
    descripcion: "2022",
    em:"UNED",
},
// {
//     imagen: "https://estatics.web.ub.edu/image/company_logo?img_id=2946262&t=1744002142300",
//     id:4,
//     alt: "logo de la academia",
//     titulo: "Postgrado en Educación Emocional",
//     descripcion: "2024",
//     em:"Universitat de Barcelona",
// }
]

const formacionEspecifica = [
  {
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjtb2yk4262Y5bu2gPjTHYKjry-hWf1m9Eg&s",
    id:1,
    alt: "logo de la academia",
    titulo: "Bootcamp Her-Tech Front End Development (350hs)",
    descripcion: "Participé en un bootcamp de desarrollo web con un enfoque 100% práctico, donde adquirí conocimientos y experiencia en:",
    aprendizajes: ["Fundamentos de programación y JavaScript avanzado: manipulación del DOM, peticiones CRUD a API REST y gestión de estado con useReducer y useContext.", "Frontend: HTML5, CSS3 avanzado, SASS, diseño responsivo, validación de formularios, componentes reutilizables y buenas prácticas de código.", "Frameworks y librerías: React, Vite.", "Backend básico: introducción a Node.js.", "Diseño UI/UX: prototipado y diseño en Figma, centrado en la experiencia del usuario."],
    fecha: "2025",
    em:"Code Space Academy",
},
];

export function formacionData(){
  return (
    formacion
  )
}

export function formacionEspecificaData() {
  return(formacionEspecifica)
}