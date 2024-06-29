// Lista de 20 videos
const videos = [
   
];

// Función para cargar videos en las secciones
function loadVideos() {
    const sections = document.querySelectorAll('.section');
    const numSections = sections.length;
    const shuffledVideos = Array.from(videos).sort(() => 0.5 - Math.random()); // Mezclar el orden de los videos
    sections.forEach((section, index) => {
        const videoIndex = index % videos.length;
        const videoElement = document.createElement('video');
        videoElement.src = shuffledVideos[videoIndex]; // Asignar un video a cada sección
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.loop = true;
        videoElement.setAttribute('playsinline', ''); // Para iOS
        videoElement.className = 'vjs-tech video__player'; // Agregar clases
        videoElement.setAttribute('tabindex', '-1');
        videoElement.dataset.id = '6514'; // Agregar atributos data
        videoElement.id = 'video-6514_html5_api';
        section.innerHTML = ''; // Limpiar contenido existente
        section.appendChild(videoElement);

        // Cargar el primer video antes que los demás
        if (index === 0) {
            videoElement.addEventListener('canplaythrough', function() {
                // Una vez que el primer video haya cargado, cargar los demás
                for (var i = 1; i < numSections; i++) {
                    const nextVideoIndex = (index + i) % videos.length;
                    const nextVideoElement = document.createElement('video');
                    nextVideoElement.src = shuffledVideos[nextVideoIndex];
                    nextVideoElement.autoplay = true;
                    nextVideoElement.muted = true;
                    nextVideoElement.loop = true;
                    nextVideoElement.setAttribute('playsinline', '');
                    nextVideoElement.className = 'vjs-tech video__player';
                    nextVideoElement.setAttribute('tabindex', '-1');
                    nextVideoElement.dataset.id = '6514';
                    nextVideoElement.id = 'video-6514_html5_api';
                    sections[i].innerHTML = '';
                    sections[i].appendChild(nextVideoElement);
                }
            });
        }
    });
}

// Cargar videos al cargar la página
window.onload = loadVideos;



//Nombre y description acciones 


// Array con nombres aleatorios
document.addEventListener("DOMContentLoaded", function () {
    var nombresAleatorios = ["🇵🇹 Lorena Caterina 🇵🇹 ",
        "🇫🇮 Ana Maria 🇫🇮",
        "🇨🇦 Carolina Garcia 🇨🇦",
        "🇦🇺 NAKARY MILLER 🇦🇺",
        "🇺🇸 GRACIELA CATERINA 🇺🇸",
        "🇻🇪 Valentina Ribeiro 🇻🇪",
        "🇻🇪 G R A C I E L A 💘 🇻🇪",
        "🇵🇪 Mariana López 🇵🇪",
        "🇷🇴 Andrei Popescu 🇷🇴",
        "🇧🇪 Emma Dubois 🇧🇪",
        "🇬🇷 Ioanna Papadopoulos 🇬🇷",
        "🇨🇱 Matías Silva 🇨🇱",
        "🇭🇺 Levente Kovács 🇭🇺",
        "🇸🇦 Fatima Al-Mansoori 🇸🇦",
        "🇲🇽 Alejandro Hernández 🇲🇽",
        "🇵🇦 Camila González 🇵🇦",
        "🇨🇮 Aminata Diop 🇨🇮",
        "🇨🇴 Isabela Ríos 🇨🇴",
        "🇮🇹 Sofia Santoro 🇮🇹",
        "🇳🇴 Emilie Andersen 🇳🇴",
        "🇦🇹 Lara Hofmann 🇦🇹",
        "🇳🇿 Harper Wilson 🇳🇿",
        "🇨🇿 Klára Nováková 🇨🇿",
        "🇮🇪 Aoife Murphy 🇮🇪",
        "🇨🇭 Alessia Rossi 🇨🇭",
        "🇮🇳 Aarav Patel 🇮🇳",
        "🇦🇪 Layla Khan 🇦🇪",
        "🇸🇪 Malin Lindström 🇸🇪",
        "🇿🇦 Thabo Molefe 🇿🇦",
        "🇳🇱 Daan van der Berg 🇳🇱",
        "🇧🇷 Maria da Silva 🇧🇷",
        "🇫🇷 Léa Dubois 🇫🇷",
        "🇰🇷 Min-jun Kim 🇰🇷",
        "🇯🇵 Yui Tanaka 🇯🇵",
        "🇩🇪 Lena Müller 🇩🇪",
        "🇬🇧 Oliver Hughes 🇬🇧",
        "🇪🇸 Marta García 🇪🇸",];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * nombresAleatorios.length);
        var elementoH2 = document.getElementById("randomName" + i);
        if (elementoH2) {
            elementoH2.textContent = nombresAleatorios[indiceAleatorio];
            nombresAleatorios.splice(indiceAleatorio, 1); // Eliminar el nombre seleccionado del array
        }
    }
});




//Descrition

document.addEventListener("DOMContentLoaded", function () {
    var descripcionesAleatorias = [
        "Hey there, 24 years old 💋. Looking for some fun activities? Are you over 18? 🔞🔞",
"Hi, 21 and ready 💋. Ready for some interesting conversations? Are you over 18? 🔞🔞",
"Hello, 19 years old 💋. Are you up for some fun? Are you over 18? 🔞🔞",
"Hi, 25 here 💋. Want to try something new? Are you over 18? 🔞🔞",
"Hey, 20 years young 💋. Looking for a great time? Are you over 18? 🔞🔞",
"Hi, 23 💋. Up for some exciting activities? Are you over 18? 🔞🔞",
"Hello, 22 💋. Ready to have some fun? Are you over 18? 🔞🔞",
"Hey, 18 💋. Want to enjoy some new experiences? Are you over 18? 🔞🔞",
"Hi, 25 💋. Interested in some fun activities? Are you over 18? 🔞🔞",
"Hello, 20 💋. Ready for a new adventure? Are you over 18? 🔞🔞",
 ];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * descripcionesAleatorias.length);
        var elementoP = document.getElementById("randomDescription" + i);
        if (elementoP) {
            elementoP.textContent = descripcionesAleatorias[indiceAleatorio];
            descripcionesAleatorias.splice(indiceAleatorio, 1); // Eliminar la descripción seleccionada del array
        }
    }
});




//Avatar imagen

document.addEventListener("DOMContentLoaded", function () {
    var imagenesAleatorias = [
        "https://img.goodfon.com/original/2048x2048/9/6c/malena-morgan-model-devushka-6401.jpg",
        "https://i.pinimg.com/564x/02/dc/06/02dc060cb7fa3f106a86769af44ee3dd.jpg",
        "https://i.pinimg.com/564x/61/08/51/61085143b742c6f9ae0c6114cd72970f.jpg",
    ];

    for (var i = 1; i <= 5; i++) {
        var indiceAleatorio = Math.floor(Math.random() * imagenesAleatorias.length);
        var elementoImg = document.getElementById("randomImage" + i).getElementsByTagName("img")[0];
        if (elementoImg) {
            elementoImg.src = imagenesAleatorias[indiceAleatorio];
            imagenesAleatorias.splice(indiceAleatorio, 1); // Eliminar la imagen seleccionada del array
        }
    }
});

