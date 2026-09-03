// Base de datos de los vehículos del catálogo
var vehiculos = {
    "ferrari-12-cilindri": {
        nombre: "Ferrari 12 Cilindri",
        imagen: "assets/img/Ferrari/ferrari_12_cilindri.webp",
        descripcion: "La berlinetta V12 más pura de Maranello. Doce cilindros aspirados con 830 CV para una experiencia de conducción inigualable.",
        anio: "2024",
        km: "0 km",
        combustible: "Gasolina",
        cambio: "Automático DCT",
        potencia: "830 CV",
        garantia: "24 meses"
    },
    "porsche-911-targa-4s": {
        nombre: "Porsche 911 Targa 4S",
        imagen: "assets/img/porche/porche_911_targa_4s.webp",
        descripcion: "El 911 Targa 4S combina la elegancia atemporal de su icónica barra antivuelco con las prestaciones más puras de la saga 911.",
        anio: "2023",
        km: "12.500 km",
        combustible: "Gasolina",
        cambio: "Automático PDK",
        potencia: "450 CV",
        garantia: "24 meses"
    },
    "audi-q8": {
        nombre: "Audi Q8",
        imagen: "assets/img/Audi/audi_q8_suv.webp",
        descripcion: "El SUV de lujo con acabado S line. Combina presencia imponente, tecnología de vanguardia y confort para toda la familia.",
        anio: "2023",
        km: "9.300 km",
        combustible: "Diésel",
        cambio: "Automático Tiptronic",
        potencia: "286 CV",
        garantia: "24 meses"
    },
    "lamborghini-revuelto": {
        nombre: "Lamborghini Revuelto",
        imagen: "assets/img/Lamborghini/lamborghini_rebuelt.webp",
        descripcion: "La primera superdeportiva híbrida enchufable de Lamborghini. V12 atmosférico y 1.015 CV de pura adrenalina.",
        anio: "2024",
        km: "0 km",
        combustible: "Híbrido enchufable",
        cambio: "Automático DCT",
        potencia: "1.015 CV",
        garantia: "24 meses"
    },
    "lamborghini-urus": {
        nombre: "Lamborghini Urus",
        imagen: "assets/img/Lamborghini/Lamborghini_urus.webp",
        descripcion: "El primer SUV de lujo con ADN de superdeportivo. Presencia agresiva, prestaciones extremas y versatilidad diaria.",
        anio: "2023",
        km: "7.800 km",
        combustible: "Híbrido enchufable",
        cambio: "Automático",
        potencia: "666 CV",
        garantia: "24 meses"
    },
    "porsche-taycan": {
        nombre: "Porsche Taycan",
        imagen: "assets/img/porche/Taycan_electrico.webp",
        descripcion: "Deportivo 100% eléctrico con gran autonomía y la dinámica de conducción característica de Porsche.",
        anio: "2023",
        km: "6.200 km",
        combustible: "Eléctrico",
        cambio: "Automático 2 veloc.",
        potencia: "476 CV",
        garantia: "24 meses"
    },
    "mercedes-eqs": {
        nombre: "Mercedes EQS",
        imagen: "assets/img/Mercedes/Mercedes_eqs_electrico.webp",
        descripcion: "La berlina de lujo 100% eléctrica con la mejor tecnología, máxima autonomía y un confort excepcional.",
        anio: "2023",
        km: "8.900 km",
        combustible: "Eléctrico",
        cambio: "Automático",
        potencia: "760 CV",
        garantia: "24 meses"
    },
    "mercedes-amg-eqe": {
        nombre: "Mercedes AMG EQE",
        imagen: "assets/img/Mercedes/Mercedes_amg_eqe_electrico.webp",
        descripcion: "Berlina eléctrica deportiva firmada por AMG. Potencia, deportividad y la elegancia de la estrella.",
        anio: "2024",
        km: "3.100 km",
        combustible: "Eléctrico",
        cambio: "Automático",
        potencia: "687 CV",
        garantia: "24 meses"
    }
};

// Lee el id de la URL (?id=...)
function obtenerVehiculo() {
    var params = new URLSearchParams(window.location.search);
    return params.get("id");
}

// Rellena la ficha con los datos del vehículo seleccionado
function cargarFicha() {
    var id = obtenerVehiculo() || "porsche-911-targa-4s";
    var v = vehiculos[id];

    if (v) {
        var img = document.getElementById("ficha-foto-img");
        img.src = v.imagen;
        img.alt = v.nombre;
        document.getElementById("ficha-nombre").textContent = v.nombre;
        document.getElementById("ficha-descripcion").textContent = v.descripcion;
        document.title = v.nombre + " – Superautos Carballo";
        document.getElementById("ficha-enlace-prueba").href = "proba_conduccion.html?vehiculo=" + encodeURIComponent(id);

        document.getElementById("dato-anio").textContent = v.anio;
        document.getElementById("dato-km").textContent = v.km;
        document.getElementById("dato-combustible").textContent = v.combustible;
        document.getElementById("dato-cambio").textContent = v.cambio;
        document.getElementById("dato-potencia").textContent = v.potencia;
        document.getElementById("dato-garantia").textContent = v.garantia;
    } else {
        mostrarNoEncontrado();
    }
}

// Oculta las secciones de la ficha y muestra el aviso
function mostrarNoEncontrado() {
    document.querySelector(".section-ficha-presentacion").hidden = true;
    document.querySelector(".section-ficha-datos").hidden = true;
    document.querySelector(".section-ficha-equipamiento").hidden = true;
    document.getElementById("aviso-no-encontrado").hidden = false;
}

// Ejecuta la carga al cargar la página
document.addEventListener("DOMContentLoaded", cargarFicha);
