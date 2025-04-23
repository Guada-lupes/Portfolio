import foto1 from "../assets/BookSpace.png"
import foto2 from "../assets/TiendaReact.png"
import foto3 from "../assets/TiendaJavaScript.png"
import foto4 from "../assets/RockstarReplica.png"

const proyectos = [
    {
        imagen: foto1,
        id:1,
        alt: "imagen del proyecto",
        titulo: "BookSpace",
        descripcion: "Plataforma de gestión de libros y usuarios desarrollada con Vite y React. Permite a los usuarios explorar libros, gestionar favoritos, gestionar tareas administrativas (para administradores) y realizar operaciones CRUD tanto para libros como para perfiles de usuario. La aplicación utiliza React Context para la gestión global del estado y los servicios, gracias a la interacción con una matriz de objetos de datos simulados.",
        em: "https://github.com/Guada-lupes/Proyecto-Final--Grupo-1.git",
    },
    {
        imagen: foto2,
        id:2,
        alt: "imagen del proyecto",
        titulo: "Tienda React",
        descripcion: "Tienda tecnológica desarrollada con Vite y React. Permite crearse un perfil de usuario e iniciar sesión a fin de guardar en el carrito los productos pendientes de compra. Realiza operaciones CRUD a través de a dos APIs diferentes. Permite el filtrado de productos por categoría y el despliegue de detalles de un producto en concreto.",
        em: "https://github.com/Guada-lupes/Carrito-tecnol-gico.git",
    },
    {
        imagen: foto3,
        id:3,
        alt: "imagen del proyecto",
        titulo: "Tienda JavaScript",
        descripcion: "Tienda desarrollada con JavaScript Vanilla. Permite crearse un perfil de usuario e iniciar sesión como empleado a fin de añadir, modificar o eliminar los productos disponibles en tienda. Realiza operaciones CRUD a través de a dos APIs diferentes. Se ha diseñado utilizando la metodología `Mobile First`.",
        em: "https://github.com/Guada-lupes/Proyecto-Final-M-dulo-3.git",
    },
    {
        imagen: foto4,
        id:4,
        alt: "imagen del proyecto",
        titulo: "Réplica Rockstar",
        descripcion: "Réplica de la página principal de Rockstar utilizando HTML y SASS para la escritura de estilos CSS. La versión mobile tiene un menú hamburguesa desplegable. En cambio, las versiones tablet y escritorio tienen un menú de navegación visible en el header.",
        em: "https://github.com/Guada-lupes/Rockstars-replica.git",
    },
]
export function proyectosData() {
    return(
        proyectos
    )
}