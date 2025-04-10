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
        descripcion: "Aplicación para aficionados a la lectura. En BookSpace podremos crear un perfil de usuario y tener acceso a una base de datos de libros donde consultar las sinopsis, autores, ISBN, guardar en favoritos o modificar nuestros datos de usuario.",
        em: "",
    },
    {
        imagen: foto2,
        id:2,
        alt: "imagen del proyecto",
        titulo: "Tienda React",
        descripcion: "Se trata de una tienda tecnológica con peticiones a dos APIs diferentes. A través de nuestro usuario, accedemos a los productos de la tienda que podremos colocar en nuestro carrito.",
        em: "",
    },
    {
        imagen: foto3,
        id:3,
        alt: "imagen del proyecto",
        titulo: "Tienda JavaScript",
        descripcion: "Tienda con peticiones a una API, utilizando JAvaScript Vanilla. Podremos modificar datos de los productos o eliminarlos",
        em: "",
    },
    {
        imagen: foto4,
        id:4,
        alt: "imagen del proyecto",
        titulo: "Réplica Rockstar",
        descripcion: "Réplica de la página principal de Rockstar, sin funcionalidad.",
        em: "",
    },
]
export function proyectosData() {
    return(
        proyectos
    )
}