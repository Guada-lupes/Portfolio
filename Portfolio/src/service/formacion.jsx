const formacion = {
  es: [
    {
      imagen:
        "https://www.uned.es/universidad/.imaging/mte/home-nueva-theme/120/dam/recursos-corporativos/logotipos/genericos/Logo-UNED-30x30_Color.png/jcr:content/Logo-UNED-bajares.png",
      id: 2,
      alt: "logo de la academia",
      titulo: "Grado en Pedagogía",
      descripcion: "2020",
      em: "UNED",
    },
    {
      imagen:
        "https://www.uned.es/universidad/.imaging/mte/home-nueva-theme/120/dam/recursos-corporativos/logotipos/genericos/Logo-UNED-30x30_Color.png/jcr:content/Logo-UNED-bajares.png",
      id: 3,
      alt: "logo de la academia",
      titulo: "Máster en Formación del profesorado",
      descripcion: "2022",
      em: "UNED",
    },
  ],
  en: [
    {
      imagen:
        "https://www.uned.es/universidad/.imaging/mte/home-nueva-theme/120/dam/recursos-corporativos/logotipos/genericos/Logo-UNED-30x30_Color.png/jcr:content/Logo-UNED-bajares.png",
      id: 2,
      alt: "logo de la academia",
      titulo: "Bachelor’s Degree in Pedagogy",
      descripcion: "2020",
      em: "UNED",
    },
    {
      imagen:
        "https://www.uned.es/universidad/.imaging/mte/home-nueva-theme/120/dam/recursos-corporativos/logotipos/genericos/Logo-UNED-30x30_Color.png/jcr:content/Logo-UNED-bajares.png",
      id: 3,
      alt: "logo de la academia",
      titulo: "Master’s Degree in Teacher Training",
      descripcion: "2022",
      em: "UNED",
    },
  ],
};

const formacionEspecifica = {
  es: [
    {
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjtb2yk4262Y5bu2gPjTHYKjry-hWf1m9Eg&s",
      id: 1,
      alt: "logo de la academia",
      titulo: "Bootcamp Her-Tech Front End Development",
      descripcion:
        "Participé en un bootcamp de desarrollo web con un enfoque 100% práctico, donde adquirí conocimientos y experiencia en:",
      aprendizajes: [
        "Fundamentos de programación y JavaScript avanzado: manipulación del DOM, peticiones CRUD a API REST y gestión de estado con useReducer y useContext.",
        "Frontend: HTML5, CSS3 avanzado, SASS, diseño responsivo, validación de formularios, componentes reutilizables y buenas prácticas de código.",
        "Frameworks y librerías: React, Vite.",
        "Backend básico: introducción a Node.js.",
        "Diseño UI/UX: prototipado y diseño en Figma, centrado en la experiencia del usuario.",
      ],
      em: "Code Space Academy",
    },
  ],
  en: [
    {
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjtb2yk4262Y5bu2gPjTHYKjry-hWf1m9Eg&s",
      id: 1,
      alt: "logo de la academia",
      titulo: "Bootcamp Her-Tech Front End Development",
      descripcion:
        "I participated in a hands-on web development bootcamp, where I gained knowledge and experience in:",
      aprendizajes: [
        "Programming fundamentals and advanced JavaScript: DOM manipulation, CRUD requests to REST APIs, and state management with useReducer and useContext.",
        "Frontend: advanced HTML5, CSS3, SASS, responsive design, form validation, reusable components, and coding best practices.",
        "Frameworks and libraries: React, Vite.",
        "Basic backend: introduction to Node.js.",
        "UI/UX design: prototyping and design in Figma, focused on user experience.",
      ],
      em: "Code Space Academy",
    },
  ],
};

export function formacionData(){
  return (
    formacion
  )
}

export function formacionEspecificaData() {
  return(formacionEspecifica)
}