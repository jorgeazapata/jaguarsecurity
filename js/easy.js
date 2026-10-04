const productos = [
    {
        imagen: "imgs/easy.jpeg",
        link: "imgs/easy.jpeg"
    },
    {
        nombre: "JAGUAR 2.0 Con encendido desde el control",
        precio: "$80.000",
        imagen: "imgs/easy2.jpeg",
        link: "imgs/easy2.jpeg"
    },
    {
        nombre: "JAGUAR WIRELESS CONNECTION (Inalámbrica)",
        precio: "$50.000",
        imagen: "imgs/easy3.jpeg",
        link: "imgs/easy3.jpeg"
    }
];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {

    contenedor.innerHTML += `
    
    <div class="producto">
        <a href="${producto.imagen}" target="_blank">
        <img src="${producto.imagen}" alt="{producto.nombre}">
        </a>

        
        <a href="https://wa.me/573197608164" target="_blank">
 </a>
    </div>

    `;
});
