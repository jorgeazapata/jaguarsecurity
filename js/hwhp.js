const productos = [
    {
        imagen: "imgs/helmethd0_1.jpg",
        link: "imgs/helmethd0_1.jpg"
    },
    {
        nombre: "JAGUAR 2.0 Con encendido desde el control",
        precio: "$80.000",
        imagen: "imgs/helmethp.jpg",
        link: "imgs/helmethp.jpg"
    },
    {
        nombre: "JAGUAR WIRELESS CONNECTION (Inalámbrica)",
        precio: "$50.000",
        imagen: "imgs/helmethp1.png",
        link: "imgs/helmethp1.png"
    },
     {
        imagen: "imgs/helmethp2.png",
        link: "imgs/helmethp2.png"
    },
     {
        imagen: "imgs/helmethp3.png",
        link: "imgs/helmethp3.png"
     },
     {
        imagen: "imgs/helmethp4.png",
        link: "imgs/helmethp4.png"
     },
     {
        imagen: "imgs/helmethp5.png",
        link: "imgs/helmethp5.png"
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
