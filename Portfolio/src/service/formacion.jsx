const formacion = [
{
    imagen: "https://www.uned.es/universidad/.imaging/mte/home-nueva-theme/120/dam/recursos-corporativos/logotipos/genericos/Logo-UNED-30x30_Color.png/jcr:content/Logo-UNED-bajares.png",
    id:2,
    alt: "logo de la academia",
    titulo_es: "Grado en Pedagogía",
    titulo_en: "Bachelor’s Degree in Pedagogy",
    descripcion: "2020",
    em:"UNED",
},
{
    imagen: "https://www.uned.es/universidad/.imaging/mte/home-nueva-theme/120/dam/recursos-corporativos/logotipos/genericos/Logo-UNED-30x30_Color.png/jcr:content/Logo-UNED-bajares.png",
    id:3,
    alt: "logo de la academia",
    titulo_es: "Máster en Formación del profesorado",
    titulo_en: "Master’s Degree in Teacher Training",
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
    titulo: "Bootcamp Her-Tech Front End Development",
    descripcion_es: "Participé en un bootcamp de desarrollo web con un enfoque 100% práctico, donde adquirí conocimientos y experiencia en:",
    aprendizajes_es: ["Fundamentos de programación y JavaScript avanzado: manipulación del DOM, peticiones CRUD a API REST y gestión de estado con useReducer y useContext.", "Frontend: HTML5, CSS3 avanzado, SASS, diseño responsivo, validación de formularios, componentes reutilizables y buenas prácticas de código.", "Frameworks y librerías: React, Vite.", "Backend básico: introducción a Node.js.", "Diseño UI/UX: prototipado y diseño en Figma, centrado en la experiencia del usuario."],
    em:"Code Space Academy",
    descripcion_en: "I participated in a hands-on web development bootcamp, where I gained knowledge and experience in:",
aprendizajes_en: [
  "Programming fundamentals and advanced JavaScript: DOM manipulation, CRUD requests to REST APIs, and state management with useReducer and useContext.",
  "Frontend: advanced HTML5, CSS3, SASS, responsive design, form validation, reusable components, and coding best practices.",
  "Frameworks and libraries: React, Vite.",
  "Basic backend: introduction to Node.js.",
  "UI/UX design: prototyping and design in Figma, focused on user experience.",
],

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