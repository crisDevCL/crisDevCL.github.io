const proyectos = [
    {
        titulo: "Storytel",
        descripcion: "Storytel es el hogar de entrañables historias: bestsellers, biografías, clásicos, libros de crecimiento personal, negocios, infantiles, Storytel Originals y mucho más.",
        imagen: "/assets/img/proyecto 1.png",
        enlace: "https://play.google.com/store/apps/details?id=grit.storytel.app&hl=es_419"
    },
    {
        titulo: "ePassport Photo Maker - Visa",
        descripcion: "ePassport Photo Maker - Visa es una solución integral para crear fotografías profesionales de pasaportes, visas e identificaciones directamente desde su teléfono inteligente.",
        imagen: "/assets/img/proyecto2.png",
        enlace: "https://play.google.com/store/apps/details?id=com.firefly.epassport&hl=es_419"
    },
    {
        titulo: "Maze for Kids",
        descripcion: "¡Un bonito juego de laberinto apto para todas las edades!.",
        imagen: "/assets/img/proyecto3.png",
        enlace: "https://play.google.com/store/apps/details?id=hu.crabs.kidmaze&hl=es_419"
    },
    {
        titulo: "Diario Entrenamiento Fit Gym",
        descripcion: "GymRun - intuitivo, extenso, personalizable.",
        imagen: "/assets/img/proyecto4.png",
        enlace: "https://play.google.com/store/apps/details?id=com.imperon.android.gymapp&hl=es_419"
    },
    {
        titulo: "Egg Racer Adventure",
        descripcion: "Egg Racer es un juego de carreras infinito entretenido con una amplia variedad de obstáculos y potenciadores.",
        imagen: "/assets/img/proyecto..webp",
        enlace: "https://play.google.com/store/apps/details?id=com.kevinersoy.eggracerfree&hl=es_419"
    },
    {
        titulo: "Música Holic-Descargar música",
        descripcion: "Music Holic: la música sin conexión es una aplicación para escuchar música potente e inmersiva, diseñada para amantes de la música.",
        imagen: "/assets/img/proyecto6.png",
        enlace: "https://play.google.com/store/apps/details?id=com.musicho.andro&hl=es_419"
    }
];

function crearTarjetasProyectos() {
    const contenedor = document.getElementById('proyectos-container');

    proyectos.forEach(proyecto => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'col-md-4 mb-4';
        tarjeta.innerHTML = `
                    <div class="card">
                        <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${proyecto.titulo}</h5>
                            <p class="card-text">${proyecto.descripcion}</p>
                            <a href="${proyecto.enlace}" class="btn btn-primary" target="_blank">Ver proyecto</a>
                        </div>
                    </div>
                `;

        const cardElement = tarjeta.querySelector('.card');
        Object.assign(cardElement.style, {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out',
            borderRadius: '10px',
            overflow: 'hidden'
        });

        cardElement.addEventListener('mouseenter', () => {
            cardElement.style.transform = 'translateY(-5px)';
        });
        cardElement.addEventListener('mouseleave', () => {
            cardElement.style.transform = 'translateY(0)';
        });

        contenedor.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', crearTarjetasProyectos);