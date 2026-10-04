const productos = [
    {
        nombre: "JAGUAR EASY CONNECT",
        precio: "$50.000",
        imagen: "imgs/easyconnectprev.jpeg",
        link: "easyconnect.html"
    },
    {
        nombre: "JAGUAR 2.0 Con encendido desde el control",
        precio: "$80.000",
        imagen: "imgs/version2_0prev.jpeg",
        link: "version2_0.html"
    },
    {
        nombre: "JAGUAR WIRELESS CONNECTION (Inalámbrica)",
        precio: "$50.000",
        imagen: "imgs/wirelessconnectionprev.jpeg",
        link: "wirelessconnect.html"
    }
];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {

    contenedor.innerHTML += `
    
    <div class="producto">
        <a href="${producto.link}">
        <img src="${producto.imagen}" alt="{producto.nombre}">
        </a>
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        
        <a href="https://wa.me/573197608164" target="_blank">
 </a>
    </div>

    `;
});
