// ===============================
// CONFIGURACIÓN GENERAL
// ===============================

// Cambia esto a true para poder abrir todos los días sin importar la fecha
const MODO_PRUEBA = false;

// Días del calendario (12 días: del 13 al 24)
const START_DAY = 13;
const END_DAY = 24;

// ===============================
// CONTENIDOS DE CADA DÍA
// ===============================

/*
  type:
   - "frase": solo un texto 
   - "clicker": botón que va mostrando mensajes
   - "guess": adivinar una palabra
   - "quiz": mini quiz
   - "sequence": mensajes en pasos
*/

const daysContent = {
13: {
  title: "Día 13 – Primer dia",
  subtitle: "Primer mini recordatorio de lo mucho que te amo",
  type: "frase",
  text:
    "Hoy empieza este gran calendario adviento.\n\n" +
    "Espero que lo disfrutes y no hagas nada de trampa, mira que te estoy observando. " +
    "Me costo mucho hacerlo asi que espero lo aprecies, lo hice con mucho amor para mi amorcito.\n\n" +
    "Habran diferentes cositas cada dia, aveces lo mismo porque ya no tenia ideas pero bueno jeje.\n\n" +
    "Te amo mucho y mucha suerte los proximos dias besitos.\n\n"+
    "PD: te regalo el siguiente voucher, denada. ",
  voucherText: "🎟️ Voucher anashex: vale por un GRAN masaje en las partes que me pidas (30minutos)"
},

    
  14: {
    title: "Día 14 – Adivina la palabra",
    subtitle: "Si adivinás, desbloqueás un mini premio virtual",
    type: "guess",
    hint: "algo que me pedis que sume a algun lado",
    word: "cancion",
    success:
      "JEJEJEJEJE ADIVINASTE! Toma una cancioncita dedicada para vos por adivinar.",
    fail:
      "Mmm, casi. Proba con otra cosa, empieza con ‘c’… y sin tildes porque soy un burrito que no sabe escribir",
    spotifyUrl:
      "https://open.spotify.com/intl-es/track/6dtdFWroDcxfNgv184UfB2?si=dc576f1435c54cc5",
    spotifyLabel: "Abrir canción en Spotify 🎵",
      secondSpotifyUrl: "https://open.spotify.com/intl-es/track/0WQiDwKJclirSYG9v5tayI?si=37c755f7b8a248ab",
    secondSpotifyLabel: "ESTA ES"

    
  },
  15: {
    title: "Día 15 – Cartita chiquita",
    subtitle: "Espero te gute",
    type: "frase",
    text:
      "Hola Paluchi, espero que te este gustando por ahora el calendario adviento de temu, " +
      "no es la gran cosa ni es fisico pero es lo que pude hacer con mis manitos. \n\n" +
      "Queria aprovechar el dia 15 para contarte lo mucho que te amo y disfruto estar con vos, " +
      "me encanta pasar tiempo en tu casa, en la mia, comiendo rico, viendo pelis, tomando helado, haciendo lo que sea mientras sea con vos, " +
      "realmente no se que haria sin vos y no me lo puedo imaginar, te amo mucho y nunca me cansare de decirlo.\n\n" +
      "Te amo y sos mi lugar favorito. "
  },
  16: {
    title: "Día 16 – Apretame para cositas lindas",
    subtitle: "Cada clic = un mensaje lindo",
    type: "clicker",
    intro:
      "Tengo un botón que da amor virtual ilimitado. Hacé clic todas las veces que quieras (en algun punto se repiten tampoco tengo tanta orignialidad):",
    messages: [
      "• Te amo",
      "• Sos hermosa",
      "• Me haces super feliz",
      "• Te elegiria una y mil veces mas",
      "• Ojala tenerte toda la vida",
      "• Sos lo mejor que me paso",
      "• Que ganitas de vivir con vos",
      "• Te extraño todos los dias",
      "• Altas tetas",
      "• Amo tus pequitas",
      "• Sos toda mi vida",
      "• Te comeria las patas",
      "• No se que haria sin vos"
    ]
  },
  17: {
    title: "Día 17 – Sos la indicada",
    subtitle: "sos vosssssss",
    type: "frase",
    text:
      "Sabes como me di cuenta que eras la indicada.\n\n" +
      "Yo se que sos la indicada porque te reis de mis chistes racistas, xenofobos, judios, homofobicos y de mil de enfermedades mas.\n"+
      "Si le sumas eso a que sos literalmente hermosa y le sumas a eso que tenes altos globos bombasticos te das cuenta que sos la perfeccion en su maxima expresion.\n\n"+
      "Nada, para que lo sepas, te dejo de regalo este chiste de paso: Porque a Juan le dicen manzanita?............ porque lo encontraron colgado de un arbol."
  },
  18: {
    title: "Día 18 – Mini quiz: ¿Cuánto me conocés?",
    subtitle: "Mas te vale que advines rata asquerosa",
    type: "quiz",
    question: "Que prefiero hacer con vos?",
    options: [
      "1) Ir a una feria a ver artesanias",
      "2) Ir a comprar a avellaneda ropa para vos",
      "3) Tener relaciones sexuales sin preservativo y acabar al grito de onichan mientrasme maullas y me pedis que te haga el helicoptero con mi tronco",
      "4) Comer.",
      "5) Todas las anteriores"
    ],
    correctIndex: 4,
    correctText:
      "¡Exacto! Obvio que la respuesta correcta es: todas las anteriores. Vas 1/2 si ganas el del dia de mañana ganas un regalito",
    wrongText:
      "Tontita, ese no es, dale, tenes otra opcion, no le erres."
  },
  19: {
    title: "Día 19 – Ganaras un regalo sorpresa?",
    subtitle: "Espero que no sinceramente.",
    type: "guess",
    hint: "que quiere hacer niki estas vacaciones",
    word: "crucero",
    success:
      "Naaaaa que NASHE que sos. Sabes que te ganaste? El siguiente voucher:",
    fail:
      "Nellll, responde con una sola palabra porfi",
    voucherText:
      "🎟️ Voucher especial: vale por wifi del crucero JEJE QUE SORPRESAAAA  "
  },
  20: {
    title: "Día 20 – Frases poeticas",
    subtitle: "te dedico estas hermosas frases",
    type: "sequence",
    steps: [
      "1. Sos la nutella de mi pan",
      "2. Si vos sos el globo yo soy tu leñador",
      "3. Sos la maga de mi vida, porque me levantas el palo sin tocarlo",
      "4. Por vos me dejo perder en el clash royale",
      "5. La vida, la vida es un carrousel, carru carru see ee el carru carru sel",
      "6. Si yo fuera un consolador me gustaria vivir siempre dentro de tu vagina",
      "7. Y última, me encantaria ser tu papel higenico, para que me frotes por todo tu culito."
    ]
  },
  21: {
    title: "Día 21 – Me quede sin ideas",
    subtitle: "La verdad ya gaste todos mis recursos",
    type: "quiz",
    question:
      "Que se parece mas a vos?",
    options: [
      "1) Un raton",
      "2) Un ratoncito",
      "3) Un ratoncito bebe",
      "4) Un ratoncito bebe con el tamaño de una pequita tuya",
      "5) Un ratoncito bebe con el tamaño de una pequita tuya comiendo un tostado",
      "6) Un ratoncito bebe con el tamaño de una pequita tuya comiendo un tostado y bailando como un pinguino",
      "7) Un ratoncito bebe con el tamaño de una pequita tuya comiendo un tostado y bailando como un pinguino mientras se esconde en mi prepucio"
    ],
    correctIndex: 6,
    correctText:
      "Excelente! Parece que te conoces muy bien. 🥺💖",
    wrongText:
      "La verdad que sos medio boluda si no adivinaste",
      voucherText: "🎟️ Voucher : vale por una comidita juntos"
  },
  22: {
    title: "Día 22 – Querida paluchi.",
    subtitle: "Paluchi, palomito, paluchichannel,palo,pali,palobonitopalove,...",
    type: "frase",
    text:
      "Te amooooooooooooooooooooooooooooooooooooooooooooooooooo mucho \n\n" +
      "Algun dia te hare un calendario fisico con nuestros hijitos, los pondre a laburar a ellos que seguro van a saber hacer estas cositas," +
      "yo mientras los voy a alentar diciendole que si les sale bien les comprare mcdonald jeje (ellos no sabran que es un premio para mi tambien) "+
      "y les enseñare a hacer todas estas cosas asi pueden hacerte cositas lindas en tus cumples dia de la madre etcetcetc. Te despertaran con florecillas y comida rica siempre.\n\n "+
      "De mientras espero que te conformes con este jijiji. Besitos se acerca el finalllllll. ",
        audioSrc: "aaa.mp4" 
  },
  23: {
    title: "Día 23 – Adivina la segunda palabra",
    subtitle: "Dos palabras, una realidad",
    type: "guess",
    hint: "La primera es 'te', la segunda empieza con 'a'.",
    word: "anashe",
    success:
      "adsjbibsdbjasbjdbjsa ADIVINASTE MI AMOR. Te felicito, ya pasaste todos los dias, mañana te dare un gran regalo por haber esperado tanto. Nos vemos!!!!",
    fail:
      "Casiiiii, fijate con algo diferente, te ana...",  
      voucherText: "🎟️ Voucher: vale porque te diga un dia dia TODO que si"

  },
  24: {
    title: "Día 24 – LLEGASTE AL FINAL",
    subtitle: "Porfin termino, no tenia mas ideas.",
    type: "frase",
    text:
      "ashe"
  }
};

// ===============================
// FUNCIONES DE FECHAS Y ESTADO
// ===============================

function getTodayInfo() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth(); // 0 = enero
  const year = now.getFullYear();

  const monthsEs = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ];

  return {
    day,
    month,
    year,
    label: `${day} de ${monthsEs[month]} de ${year}`
  };
}

function isDayUnlocked(dayNumber, todayDay) {
  if (MODO_PRUEBA) return true;
  return dayNumber <= todayDay;
}

// ===============================
// GENERACIÓN DE LAS CARTAS
// ===============================

function createDayCard(dayNumber, todayDay) {
  const grid = document.getElementById("calendar-grid");
  const card = document.createElement("article");
  card.classList.add("day-card");

  const unlocked = isDayUnlocked(dayNumber, todayDay);
  if (!unlocked) {
    card.classList.add("locked");
  }

  // HEADER
  const header = document.createElement("div");
  header.classList.add("day-card-header");

  const left = document.createElement("div");
  const numberEl = document.createElement("div");
  numberEl.classList.add("day-number");
  numberEl.textContent = dayNumber;

  const labelEl = document.createElement("div");
  labelEl.classList.add("day-label");
  labelEl.textContent = "Un Día Ratuelo";

  left.appendChild(numberEl);
  left.appendChild(labelEl);

  const pill = document.createElement("div");
  pill.classList.add("day-pill");
  pill.textContent = unlocked ? "Disponible" : "Bloqueado";

  header.appendChild(left);
  header.appendChild(pill);

  // BODY
  const body = document.createElement("div");
  body.classList.add("day-card-body");

  const desc = document.createElement("p");
  desc.classList.add("day-description");

  const config = daysContent[dayNumber];
  if (config && config.type !== "frase") {
    // mini juego
    desc.textContent = "En esta cartita vas a encontrar juegitos.";
  } else {
    desc.textContent = "Mensajitos lindos (masomenos) te esperan dentro de esta cartita.";
  }

  body.appendChild(desc);

  if (!unlocked && !MODO_PRUEBA) {
    const hint = document.createElement("p");
    hint.classList.add("day-hint");
    hint.textContent = "Bloqueado por ahora...";
    body.appendChild(hint);

    const lockBadge = document.createElement("div");
    lockBadge.classList.add("locked-badge");
    lockBadge.innerHTML = '<span>🔒</span><span>Cerrado</span>';
    card.appendChild(lockBadge);
  }

  card.appendChild(header);
  card.appendChild(body);

  card.addEventListener("click", () => {
    if (!unlocked && !MODO_PRUEBA) {
      openLockedMessage(dayNumber);
      return;
    }
    if (dayNumber === 24) {
      // Día 24 ahora vive en una página aparte (más responsive)
      window.location.href = "day24.html";
      return;
    }
    openDayModal(dayNumber);
  });

  grid.appendChild(card);
}

// ===============================
// MODAL
// ===============================

const overlay = document.getElementById("overlay");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalBody = document.getElementById("modal-body");
const closeModalBtn = document.getElementById("close-modal-btn");

const CHISTES = [
  "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
  "¿Qué hace una vaca en un terremoto? Leche agitada.",
  "¿Qué hace una vaca con los ojos cerrados? Leche concentrada.",
  "Que hace saltar a la gente triste? un puente ja ja",
  "Porque los nenes de la calle maduran mas rapido? porque se envuelven en diario",
  "Como queda un mago despues de comer? Magordito",
  "Si nico tiene dos manzanas y Pali le roba una de que color es Pali?.... Blanca porque si fuese negra le hubiese robado todas",
  "¿Cuál es la parte más dura de un vegetal? La silla de ruedas.",
  "Porque una nena con cancer no puede hamacarse? Porque no tiene brazos......  Toc Toc! ¿Quien es? la nena no",
  "Que hace un tsunami en africa? Chocolatada",
  "Como es un exorcismo al reves? El diablo le pide al cura que salga de adentro del chico",
  "Que hacen dos vagabundos peleando con cartones? pelea de almohadas",
  "Que hace una vaca en un escenario? Vacantar JAJAJSJAJAJAJJAJAJAJAJAAJJ",
  "Porque no podes engañara un feto abortado? porque no nacio ayer",
  "Van 2 negros en un auto ¿Quien esta manejando? La policia",
];

function getRandomChiste() {
  const index = Math.floor(Math.random() * CHISTES.length);
  return CHISTES[index];
}

function openLockedMessage(dayNumber) {
  const chiste = getRandomChiste();

  modalTitle.textContent = `Día ${dayNumber} todavía está cerradito`;
  modalSubtitle.textContent =
    "DIJE QUE NO HAGAS TRAMPA RATA ASQUEROSA. Este dia esta bloqueado todavia...";

  modalBody.innerHTML = `
    <p class="romantic-text">
      Tenes que esperar panchita, todo a su debido tiempo. Toda esfuerza tiene su recompensa
      <br><br>
      Mientras tanto, te dejo un chiste: 
      ${chiste}
    </p>
  `;

  overlay.classList.remove("hidden");
}


function openDayModal(dayNumber) {
  const config = daysContent[dayNumber];
  if (!config) return;

  modalTitle.textContent = config.title || `Día ${dayNumber}`;
  modalSubtitle.textContent = config.subtitle || "";

  // Limpio contenido
  modalBody.innerHTML = "";

  switch (config.type) {
    case "frase":
      renderFrase(config);
      break;
    case "clicker":
      renderClicker(config);
      break;
    case "guess":
      renderGuess(config);
      break;
    case "quiz":
      renderQuiz(config);
      break;
    case "sequence":
      renderSequence(config);
      break;
    default:
      renderFrase({
        text: "errorrrrrrcito"
      });
  }

  overlay.classList.remove("hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
}

// Cerrar modal con click en botón o fuera
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    closeModal();
  }
});

// ===============================
// RENDERIZADORES DE CONTENIDO
// ===============================

function renderFrase(config) {
  const container = document.createElement("div");

  const p = document.createElement("p");
  p.classList.add("romantic-text");
  p.textContent = config.text || "error ashe 404";
  container.appendChild(p);

  if (config.voucherText) {
    const voucherBtn = document.createElement("button");
    voucherBtn.classList.add("btn-primary", "voucher-btn");
    voucherBtn.textContent = "Ver voucher 🎟️";

    voucherBtn.addEventListener("click", () => {
      if (!container.querySelector(".voucher-box")) {
        const voucherBox = document.createElement("div");
        voucherBox.classList.add("voucher-box", "small-note");
        voucherBox.textContent = config.voucherText;

        voucherBox.style.marginTop = "10px";
        voucherBox.style.padding = "10px 12px";
        voucherBox.style.borderRadius = "14px";
        voucherBox.style.border = "1px dashed rgba(255, 127, 191, 0.8)";
        voucherBox.style.background = "rgba(255, 241, 249, 0.95)";

        container.appendChild(voucherBox);
      }
    });

    container.appendChild(voucherBtn);
  }
// AUDIO (si existe)
if (config.audioSrc) {
  const audioWrapper = document.createElement("div");
  audioWrapper.style.marginTop = "14px";

  const audio = document.createElement("audio");
  audio.controls = true;
  audio.src = config.audioSrc;

  audioWrapper.appendChild(audio);
  container.appendChild(audioWrapper);
}

  modalBody.appendChild(container);
}


function renderClicker(config) {
  const p = document.createElement("p");
  p.classList.add("romantic-text");
  p.textContent = config.intro || "Hacé clic en el botón para ver mensajitos.";
  modalBody.appendChild(p);

  const btn = document.createElement("button");
  btn.classList.add("btn-primary");
  btn.innerHTML = "Toca el boton, estimulame.";
  modalBody.appendChild(btn);

  const list = document.createElement("ul");
  list.classList.add("clicker-messages");
  modalBody.appendChild(list);

  const messages = config.messages || [];
  let index = 0;

  btn.addEventListener("click", () => {
    if (index < messages.length) {
      const li = document.createElement("li");
      li.textContent = messages[index];
      list.appendChild(li);
      index++;
      if (index === messages.length) {
        btn.textContent = "Ya te dije todo (por ahora)";
      }
    } else {
      btn.disabled = true;
    }
  });
}

function renderGuess(config) {
  const container = document.createElement("div");
  container.classList.add("guess-game");

  const p = document.createElement("p");
  p.classList.add("romantic-text");
  p.textContent =
    config.text ||
    "adivina patito";

  const hint = document.createElement("p");
  hint.classList.add("small-note");
  hint.textContent = `Pista: ${config.hint || "chanchanchan"}`;

  const row = document.createElement("div");
  row.classList.add("guess-input-row");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Escribí tu respuesta";
  input.autocomplete = "off";

  const btn = document.createElement("button");
  btn.classList.add("btn-primary");
  btn.textContent = "Comprobar";

  row.appendChild(input);
  row.appendChild(btn);

  const result = document.createElement("p");
  result.classList.add("guess-result", "small-note");

  btn.addEventListener("click", () => {
    const value = (input.value || "").trim().toLowerCase();
    const target = (config.word || "").toLowerCase();

    if (!value) {
      result.textContent = "Escribí algo primero, virga.";
      return;
    }

    if (value === target) {
      result.textContent = config.success || "¡Acertaste nASHE!";

    // Día 14: lógica especial con canción trucha + canción real
    if (config.spotifyUrl && !container.querySelector(".spotify-btn")) {
    const spotifyBtn = document.createElement("button");
    spotifyBtn.classList.add("btn-secondary", "spotify-btn");
    spotifyBtn.textContent =
        config.spotifyLabel || "Abrir canción 🎵";

    spotifyBtn.addEventListener("click", () => {
        window.open(config.spotifyUrl, "_blank");

        // Mensaje "mentira esa no es"
        if (!container.querySelector(".fake-msg")) {
        const fakeMsg = document.createElement("p");
        fakeMsg.classList.add("small-note", "fake-msg");
        fakeMsg.textContent = "JEJE TE TROLIE ESA NO ES 😈";
        fakeMsg.style.marginTop = "8px";

        container.appendChild(fakeMsg);

        // Segundo botón de canción
        if (config.secondSpotifyUrl) {
            const secondBtn = document.createElement("button");
            secondBtn.classList.add("btn-primary");
            secondBtn.textContent =
            config.secondSpotifyLabel || "Abrir canción real 🎶";

            secondBtn.addEventListener("click", () => {
            window.open(config.secondSpotifyUrl, "_blank");
            });

            container.appendChild(secondBtn);
        }
        }
    });

    container.appendChild(spotifyBtn);
    }


      // Día 19: botón "Ver voucher" que muestra el voucher de wifi del crucero
      if (config.voucherText && !container.querySelector(".voucher-btn")) {
        const voucherBtn = document.createElement("button");
        voucherBtn.classList.add("btn-primary", "voucher-btn");
        voucherBtn.textContent = "Ver voucher 🎟️";

        voucherBtn.addEventListener("click", () => {
          if (!container.querySelector(".voucher-box")) {
            const voucherBox = document.createElement("div");
            voucherBox.classList.add("voucher-box", "small-note");
            voucherBox.textContent = config.voucherText;

            // Un poquito de estilo inline para que parezca voucher
            voucherBox.style.marginTop = "10px";
            voucherBox.style.padding = "10px 12px";
            voucherBox.style.borderRadius = "14px";
            voucherBox.style.border = "1px dashed rgba(255, 127, 191, 0.8)";
            voucherBox.style.background = "rgba(255, 241, 249, 0.95)";

            container.appendChild(voucherBox);
          }
        });

        container.appendChild(voucherBtn);
      }
    } else {
      result.textContent =
        config.fail ||
        "No es exactamente esa… Volvé a probar.";
    }
  });

  container.appendChild(p);
  container.appendChild(hint);
  container.appendChild(row);
  container.appendChild(result);

  modalBody.appendChild(container);
}

function renderQuiz(config) {
  const container = document.createElement("div");
  container.classList.add("quiz");

  const question = document.createElement("p");
  question.classList.add("quiz-question");
  question.textContent = config.question || "Pregunta misteriosa .";

  const list = document.createElement("ul");
  list.classList.add("quiz-options");

  const result = document.createElement("p");
  result.classList.add("quiz-result", "small-note");

  const options = config.options || [];
  const correctIndex = config.correctIndex ?? 0;

  options.forEach((optText, idx) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = optText;

    btn.addEventListener("click", () => {
if (idx === correctIndex) {
  result.textContent =
    config.correctText || "¡Correcto! Sos una nashe . ";

  if (config.voucherText && !container.querySelector(".voucher-btn")) {
    const voucherBtn = document.createElement("button");
    voucherBtn.classList.add("btn-primary", "voucher-btn");
    voucherBtn.textContent = "Ver voucher 🎟️";

    voucherBtn.addEventListener("click", () => {
      if (!container.querySelector(".voucher-box")) {
        const voucherBox = document.createElement("div");
        voucherBox.classList.add("voucher-box", "small-note");
        voucherBox.textContent = config.voucherText;

        voucherBox.style.marginTop = "10px";
        voucherBox.style.padding = "10px 12px";
        voucherBox.style.borderRadius = "14px";
        voucherBox.style.border = "1px dashed rgba(255, 127, 191, 0.8)";
        voucherBox.style.background = "rgba(255, 241, 249, 0.95)";

        container.appendChild(voucherBox);
      }
    });

    container.appendChild(voucherBtn);
  }

} else {
  result.textContent =
    config.wrongText || "Mmm, cerca. Pero creo que hay una opción más acertada.";
}

    });

    li.appendChild(btn);
    list.appendChild(li);
  });

  container.appendChild(question);
  container.appendChild(list);
  container.appendChild(result);

  modalBody.appendChild(container);
}

function renderSequence(config) {
  const container = document.createElement("div");
  container.classList.add("sequence");

  const p = document.createElement("p");
  p.classList.add("romantic-text");
  p.textContent =
    "Vamos a ir desbloqueando mensajitos de a poco. Hacé clic para el siguiente:";

  const btn = document.createElement("button");
  btn.classList.add("btn-primary");
  btn.textContent = "Mostrar siguiente ";

  const stepContainer = document.createElement("div");
  stepContainer.classList.add("sequence-steps");

  const note = document.createElement("p");
  note.classList.add("small-note");
  note.textContent = "y vuelvo a despertaaar, en mi mundo siendo lo que soy, y no voy a paraaaar, ni un segundo mi destino es hoy y nanananananaaa";

  const steps = config.steps || [];
  let index = 0;

  btn.addEventListener("click", () => {
    if (index < steps.length) {
      const step = document.createElement("p");
      step.classList.add("sequence-step");
      step.textContent = steps[index];
      stepContainer.appendChild(step);
      index++;
      if (index === steps.length) {
        btn.textContent = "Fin… por hoy ";
      }
    } else {
      btn.disabled = true;
    }
  });

  container.appendChild(p);
  container.appendChild(btn);
  container.appendChild(stepContainer);
  container.appendChild(note);

  modalBody.appendChild(container);
}

// =============================== 
// INICIALIZACIÓN
// ===============================

function init() {
  const todayInfo = getTodayInfo();
  const todayLabelEl = document.getElementById("today-label");
  todayLabelEl.textContent = todayInfo.label;

  // Mostrar/ocultar chip de modo prueba
  const testChip = document.getElementById("test-mode-chip");
  if (MODO_PRUEBA) {
    testChip.style.display = "inline-flex";
  } else {
    testChip.style.display = "none";
  }

  // Crear cartas
  for (let day = START_DAY; day <= END_DAY; day++) {
    createDayCard(day, todayInfo.day);
  }
}

document.addEventListener("DOMContentLoaded", init);
