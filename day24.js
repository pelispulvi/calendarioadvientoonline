
/* Día 24 – Página aparte (responsive) */

const STORAGE_KEY = "adviento_day24_progress_v1";
const LEVELS = [
  { id: 1, name: "Nivel 1", desc: "Pregunta secreta", kind: "question2" },
  { id: 2, name: "Nivel 2", desc: "Rompecabezas", kind: "puzzle" },
  { id: 3, name: "Nivel 3", desc: "Pregunta MAS secreta", kind: "question3" },
  { id: 4, name: "Nivel 4", desc: "Fin...", kind: "blank" },
];



const puzzleImage = "image.png"; 

function getProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const n = Number(raw);
  if (Number.isFinite(n)) return Math.min(Math.max(n, 0), 4);
  return 0;
}

function setProgress(n) {
  localStorage.setItem(STORAGE_KEY, String(Math.min(Math.max(n, 0), 4)));
  renderLevels();
}


function isUnlocked(levelId) {
  const p = getProgress();
  // se desbloquea si el anterior está completo
  return levelId <= p + 1;
}

function isCompleted(levelId) {
  const p = getProgress();
  return levelId <= p;
}

function el(tag, cls, txt) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (txt != null) node.textContent = txt;
  return node;
}

function setStage(title, subtitle, contentNode) {
  document.getElementById("stage-title").textContent = title;
  document.getElementById("stage-subtitle").textContent = subtitle;
  const stage = document.getElementById("stage");
  stage.innerHTML = "";
  stage.appendChild(contentNode);
  // scroll suave a contenido (en mobile ayuda)
  stage.scrollTo({ top: 0, behavior: "smooth" });
}

function renderLevels() {
  const host = document.getElementById("levels");
  host.innerHTML = "";

  LEVELS.forEach((lvl) => {
    const card = el("button", "level", "");
    card.type = "button";

    const locked = !isUnlocked(lvl.id);
    const done = isCompleted(lvl.id);

    if (locked) card.classList.add("locked");

    const row = el("div", "row");
    const name = el("div", "name", lvl.name);
    const badge = el("div", "badge " + (done ? "ok" : locked ? "bad" : "warn"), done ? "Completado" : locked ? "Bloqueado" : "Disponible");
    row.appendChild(name);
    row.appendChild(badge);

    const desc = el("p", "desc", lvl.desc);

    card.appendChild(row);
    card.appendChild(desc);

    card.addEventListener("click", () => {
      if (locked) {
        setStage("Bloqueado", "Completá el nivel anterior para desbloquear.", blockedCard());
        return;
      }
      openLevel(lvl.id);
    });

    host.appendChild(card);
  });
}

function blockedCard() {
  const box = el("div", "stage-card");
  box.appendChild(el("p", "msg", "Tranquila: esto es en orden. Volvé a intentar cuando completes el anterior."));
  return box;
}

function openLevel(id) {
  const lvl = LEVELS.find((x) => x.id === id);
  if (!lvl) return;

  if (lvl.kind === "question2") {
    setStage(
      "Nivel 1 – Pregunta",
      "Respondé correctamente para continuar.",
      questionStage2()
    );

  } else if (lvl.kind === "puzzle") {
    setStage(
      "Nivel 2 – Rompecabezas",
      "Completá la imagen para desbloquear el siguiente nivel.",
      puzzleStage()
    );

  } else if (lvl.kind === "question3") {
    setStage(
      "Nivel 3 – Pregunta",
      "Respondé correctamente para continuar.",
      questionStage3()
    );

  } else if (lvl.kind === "blank") {
    setStage(
      "Nivel 4 - Final",
      "....",
      blankStage()
    );
    if (getProgress() < 4) setProgress(4);
  }
}




/* =========================
   NIVEL 1: PUZZLE 3x3
   ========================= */

function puzzleStage() {
  const wrap = el("div", "stage-card");

  const top = el("div", "statusline");
  top.appendChild(el("div", "pill", "Objetivo: completar 9/9"));
  const status = el("div", "pill", "Progreso: 0/9");
  top.appendChild(status);
  wrap.appendChild(top);

  wrap.appendChild(el("hr", "sep"));

  const layout = el("div", "puzzle-wrap");

  const board = el("div", "board");
  board.setAttribute("role", "grid");

  const pieces = el("div", "pieces");
  const msg = el("p", "msg", "Tip: si te cuesta en el celu, tocá y mantené la pieza 1 segundo y arrastrá. Si no sale perdon.... agarra la compu jeje");

  // Crear slots (0..8)
  const slots = [];
  for (let i = 0; i < 9; i++) {
    const slot = el("div", "slot");
    slot.dataset.slot = String(i);
    slot.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    slot.addEventListener("drop", (e) => {
      e.preventDefault();
      const pieceId = e.dataTransfer.getData("text/plain");
      const pieceEl = document.getElementById(pieceId);
      if (!pieceEl) return;

      // si el slot ya tiene pieza, no
      if (slot.querySelector(".piece")) return;

      slot.appendChild(pieceEl);
      slot.classList.add("filled");
      pieceEl.classList.remove("dragging");

      updatePuzzleStatus();
    });

    slots.push(slot);
    board.appendChild(slot);
  }

  // Crear piezas mezcladas
  const order = Array.from({ length: 9 }, (_, i) => i);
  shuffle(order);

  order.forEach((idx) => {
    const piece = el("div", "piece");
    piece.id = `piece-${idx}`;
    piece.draggable = true;
    piece.dataset.correct = String(idx);

    // background positions: 3x3 => 0/50/100%
    const x = (idx % 3) * 50;
    const y = Math.floor(idx / 3) * 50;

    piece.style.backgroundImage = `url('${puzzleImage}')`;
    piece.style.backgroundSize = "300% 300%";
    piece.style.backgroundPosition = `${x}% ${y}%`;

    piece.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", piece.id);
      piece.classList.add("dragging");
    });

    piece.addEventListener("dragend", () => {
      piece.classList.remove("dragging");
    });

    pieces.appendChild(piece);
  });

  layout.appendChild(board);
  layout.appendChild(pieces);

  wrap.appendChild(layout);
  wrap.appendChild(el("hr", "sep"));
  wrap.appendChild(msg);

  // Botón de chequeo (por si quieren confirmar)
  const actions = el("div", "");
  actions.style.display = "flex";
  actions.style.gap = "10px";
  actions.style.flexWrap = "wrap";



  const autoBtn = el("button", "btn", "Mezclar de nuevo");
  autoBtn.type = "button";
  autoBtn.addEventListener("click", () => {
    // mover todas las piezas al panel y mezclar
    const allPieces = Array.from(wrap.querySelectorAll(".piece"));
    allPieces.forEach((p) => pieces.appendChild(p));
    Array.from(wrap.querySelectorAll(".slot")).forEach((s) => s.classList.remove("filled"));
    // reordenar
    const arr = Array.from(pieces.children);
    shuffle(arr);
    arr.forEach((n) => pieces.appendChild(n));
    updatePuzzleStatus();
  });

  actions.appendChild(autoBtn);
  wrap.appendChild(actions);

  function updatePuzzleStatus() {
    let placed = 0;
    let correct = 0;

    slots.forEach((slot, i) => {
      const piece = slot.querySelector(".piece");
      if (piece) {
        placed++;
        if (piece.dataset.correct === slot.dataset.slot) correct++;
      }
    });

    status.textContent = `Progreso: ${correct}/9`;

    if (placed === 9 && correct === 9) {
      status.textContent = "Progreso: 9/9 ✅";
      // marcar nivel 1 completo
      if (getProgress() < 2) setProgress(2);

      const doneMsg = el("p", "msg");
      doneMsg.innerHTML = "Listooo <b>Desbloqueaste el Nivel 3</b>. Volvé arriba y tocá “Nivel 3”.";
      wrap.appendChild(el("hr", "sep"));
      wrap.appendChild(doneMsg);
    }
  }

  return wrap;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* =========================
   NIVEL 2
   ========================= */

function questionStage2() {
  const box = el("div", "stage-card");

  box.appendChild(
    el("p", "msg", "Pregunta: Cual fue un objeto mitico en la relacion entre nico y pali?")
  );

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Escribí la respuesta...";
  input.style.padding = "10px";
  input.style.borderRadius = "999px";
  input.style.border = "1px solid rgba(255,193,219,.9)";
  input.style.width = "100%";

  const btn = el("button", "btn", "Responder");
  const feedback = el("p", "msg", "");

  btn.addEventListener("click", () => {
    const respuesta = input.value.trim().toLowerCase();

    if (respuesta === "sopapita") {
      feedback.innerHTML = "Exacto sos goat <b>Desbloqueaste el Nivel 2</b>";
      btn.disabled = true;
      input.disabled = true;
      if (getProgress() < 1) setProgress(1);
    } else {
      feedback.textContent = "Nopo probá de nuevo... una sola palabra";
    }
  });

  box.appendChild(input);
  box.appendChild(el("hr", "sep"));
  box.appendChild(btn);
  box.appendChild(feedback);

  return box;
}
function questionStage3() {
  const box = el("div", "stage-card");

  box.appendChild(
    el("p", "msg", "Pregunta: que es paluchi?")
  );

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Escribí la respuesta...";
  input.style.padding = "10px";
  input.style.borderRadius = "999px";
  input.style.border = "1px solid rgba(255,193,219,.9)";
  input.style.width = "100%";

  const btn = el("button", "btn", "Responder");
  const feedback = el("p", "msg", "");

  btn.addEventListener("click", () => {
    const respuesta = input.value.trim().toLowerCase();
    if (respuesta === "un ratoncito bebe con el tamaño de una pequita tuya comiendo un tostado y bailando como un pinguino mientras se esconde en mi prepucio") {
      feedback.innerHTML = "Bien 😌 <b>Desbloqueaste el Nivel 4</b>";
      btn.disabled = true;
      input.disabled = true;
      if (getProgress() < 3) setProgress(3);
    } else {
      feedback.textContent = "No. Checherereche checherereche checherereche che che che che... gustavo lima e voce Checherereche checherereche checherereche che che che che.... HACE MEMORIA PALUCHI";
    }
  });

  box.appendChild(input);
  box.appendChild(el("hr", "sep"));
  box.appendChild(btn);
  box.appendChild(feedback);

  return box;
}


/* =========================
   NIVEL 3
   ========================= */
function blankStage() {
  const box = el("div", "stage-card");
  box.appendChild(
    el("p", "msg", "Terminaste paluchi!!!! Felicitaciones, ya llego el final... espero te haya gustado y estas grandes noches de desvelo haciendo esto sirvan para algo. Te amo mucho y espero que podamos pasar muchas navidades mas juntos, ya que no solo es navidad si no que es un año mas que nos conocemos. Hoy no es navidad asi que no tenes ningun regalo pero cuando nos veamos te lo doy en persona, no te esperes gran cosa! jeje te amo mucho chauchis")
  );
  return box;
}


/* =========================
   INIT
   ========================= */

function init() {
  renderLevels();

  document.getElementById("reset-progress").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    renderLevels();
    setStage("Elegí un nivel", "Tocá “Nivel 1” para empezar.", el("div", "stage-card", "Progreso reiniciado."));
  });

  // abrir automáticamente el primer nivel disponible
  const p = getProgress();
  const next = Math.min(p + 1, 4);
  openLevel(next);
}

document.addEventListener("DOMContentLoaded", init);
