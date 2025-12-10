const texto = `
Hoy quiero empezar tu cumpleaños recordándote lo muchísimo que significas para mí.
Aunque hoy no podamos vernos tanto como quisiera, quiero que sepas que estoy pensando en ti todo el tiempo y que le agradezco a la vida por haberme puesto en tu camino.

Eres mi primera experiencia en el amor, y estoy seguro de que también serás la última. Gracias por existir, por alegrarme los días y por mandarme fotos de esos ojitos que tanto me encantan.

Amo los dibujos que me regalas (sobretodo los Spidermans ASJASJAJ), y amo que seas un poquito de todo: bailarina, dibujante, la estudiante más inteligente, gymrat, y adicta a ese universo de películas y series
que todavía me falta conocer contigo AJSJAJ. En fin… me encanta todo de ti.

Ojalá hoy la pases increíble.
Gracias por ser mi alegría diaria.
Te quiero muchísimo ❤️
`;

let i = 0;

const audio = document.getElementById("musica");


function mostrarCarta() {
    audio.play();
    const elemento = document.getElementById("mensaje");
    elemento.innerHTML = "";
    i = 0;
    escribir();
}

function escribir() {
    if (i < texto.length) {
        document.getElementById("mensaje").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 40);
    }
}

function abrirModal(num) {
    const modal = document.getElementById("modal" + num);

    modal.classList.remove("ocultar");
    modal.classList.add("visible");
    modal.classList.add("mostrar");
}

function cerrarModal(num) {
    const modal = document.getElementById("modal" + num);

    modal.classList.remove("mostrar");
    modal.classList.add("ocultar");

    setTimeout(() => {
        modal.classList.remove("visible");
    }, 250); // coincide con la animación
}
// Activar música al primer clic
function activarMusica() {
    const musica = document.getElementById("musica");
    musica.volume = 0.6; // volumen suave
    musica.play().catch(() => {}); 
}

function iniciarTodo() {
    activarMusica();
    mostrarCarta();
}

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 90 + "vw";
    corazon.style.bottom = "0px";
    document.body.appendChild(corazon);

    setTimeout(() => corazon.remove(), 4000);
}

// cada 700ms aparece uno
setInterval(crearCorazon, 700);



