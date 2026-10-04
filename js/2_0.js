const productos = [
    {
        imagen: "imgs/2_0.jpeg",
        link: "imgs/2_0.jpeg"
    },
    {
        nombre: "JAGUAR 2.0 Con encendido desde el control",
        precio: "$80.000",
        imagen: "imgs/2_01.jpeg",
        link: "imgs/2_01.jpeg"
    },
    {
        nombre: "JAGUAR WIRELESS CONNECTION (Inalámbrica)",
        precio: "$50.000",
        imagen: "imgs/2_02.jpeg",
        link: "imgs/2_02.jpeg"
    },
     {
        imagen: "imgs/2_03.jpeg",
        link: "imgs/2_03.jpeg"
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
