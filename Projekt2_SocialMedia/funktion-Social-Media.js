// ------------------------------------
// Bilder-Liste, alle Fotos die es gibt
// ------------------------------------

const images = [
  { id: "basel",         src: "Bilder/Basel-Katze.jpeg",       alt: "Katze Basel" },
  { id: "blume1",        src: "Bilder/Blume1.jpeg",            alt: "Blume 1" },
  { id: "kuh",           src: "Bilder/Kuh.jpeg",               alt: "Kuh" },
  { id: "furtwangen",    src: "Bilder/furtwangen-katze.jpeg", alt: "Katze Furtwangen" },
  { id: "schmetterling", src: "Bilder/smetterling.jpeg",      alt: "Schmetterling" },
  { id: "blume2",        src: "Bilder/Blume2.jpeg",            alt: "Blume 2" },
  { id: "blume3",        src: "Bilder/Blume3.jpeg",            alt: "Blume 3" },
  { id: "musik",         src: "Bilder/musik-player.jpeg",     alt: "Musikspieler" }
];

// --------------------------------------------------------------
// DOM(Document-Object-Model)-Verbindung: holt alle HTML-Elemente
// --------------------------------------------------------------

// Bild + Pfeile
const detailBild    = document.getElementById("detailBild");
const previous      = document.getElementById("previous");
const next          = document.getElementById("next");

// Icon-Buttons (Like, Komment, Save, Share)
const likeKnopf     = document.getElementById("likeKnopf");
const saveKnopf     = document.getElementById("saveKnopf");
const shareKnopf    = document.getElementById("shareKnopf");
const commentKnopf  = document.getElementById("commentKnopf");

// Anzeige Balken: Zeigen bei welchem Bild man ist
const indicators    = document.querySelectorAll(".anzeige");

// Kommentar-Bereich
const commentSection = document.getElementById("commentSection");
const commentsList   = document.getElementById("commentsList");
const commentForm    = document.getElementById("commentForm");
const commentInput   = document.getElementById("commentInput");
const commentCloseKnopf= document.getElementById("commentCloseKnopf");
const USERNAME = "Frida05";

// Like-Icon-Bilder (graues und rotes Herz)
const likeIconImg    = likeKnopf.querySelector("img");
const LIKE_GRAY_SRC  = "Bilder/Herz-grau.png";
const LIKE_RED_SRC   = "Bilder/Herz-rot.png";

// -------------------------------------------------
// Likes + Comments localStorage speichern und laden
// -------------------------------------------------

// merkt sich, welche Bilder geliked sind (pro Bild-ID)
const savedLikes = localStorage.getItem("likesStatus");
const likesStatus = savedLikes ? JSON.parse(savedLikes) : {}; // wenn noch nix da war > leeres Objekt

// merkt sich Kommentare (pro Bild-ID)
const savedComments = localStorage.getItem("commentsState");
const commentsState = savedComments ? JSON.parse(savedComments) : {};

// speichert Likes im Browser (damit sie nach Reload noch da sind)
function saveLikesStatus() {
  localStorage.setItem("likesStatus", JSON.stringify(likesStatus));
}

// speichert Kommentare im Browser (damit sie nach Reload noch da sind)
function saveCommentsState() {
  localStorage.setItem("commentsState", JSON.stringify(commentsState));
}

// aktuelle Position im Bilder-Array
let currentIndex = 0;

// -------------------------------
// Start-Bild aus der URL auslesen
// -------------------------------

const params = new URLSearchParams(window.location.search);
const startId = params.get("img");

if (startId) {
  const foundIndex = images.findIndex(img => img.id === startId);
  if (foundIndex !== -1) {
    currentIndex = foundIndex; // startet mit dem Bild, auf das man geklickt hat
  }
}

// ------------------------------------------------
// Funktion: Kommentare für aktuelles Bild anzeigen
// ------------------------------------------------

function renderCommentsForCurrentImage() {
  const img = images[currentIndex];
  const imgId = img.id;

  // Gibt es Kommetare für das Bild? Sonst bleibt es leer
  const commentsForImage = commentsState[imgId] || [];

  // Liste leeren
  commentsList.innerHTML = "";

  // Kommentare in der HTML-Datei speichern
  commentsForImage.forEach(comment => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("comment");

    const userLine = document.createElement("div");
    userLine.classList.add("comment-username");
    userLine.textContent = comment.user || USERNAME; // fallback

    const textLine = document.createElement("div");
    textLine.classList.add("comment-text");
    textLine.textContent = comment.text || comment;

    wrapper.appendChild(userLine);
    wrapper.appendChild(textLine);
    commentsList.appendChild(wrapper);
  });
}

// -----------------------
// Funktion: Bild anzeigen
// -----------------------

function showImage() {
  const img = images[currentIndex];

  // Bildquelle und Alt-Text setzen
  detailBild.src = img.src;
  detailBild.alt = img.alt;

  // Balken oben updaten (nur der aktuelle wird gefärbt)
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });

  // Like-Status für dieses Bild laden
  const isLiked = likesStatus[img.id] === true;
  likeKnopf.classList.toggle("active", isLiked);
  likeIconImg.src = isLiked ? LIKE_RED_SRC : LIKE_GRAY_SRC;

  // Kommentare für dieses Bild reinladen
  renderCommentsForCurrentImage();
}

// -------------------------------------
// Navigation (nächstes/vorheriges Bild)
// -------------------------------------

// ein Bild zurück
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // wrap-around
  showImage();
}

// ein Bild weiter
function showNext() {
  currentIndex = (currentIndex + 1) % images.length; // wrap-around
  showImage();
}

// Klick auf die Pfeile
previous.addEventListener("click", showPrev);
next.addEventListener("click", showNext);

// Tastatur links/rechts
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft")  showPrev();
  if (event.key === "ArrowRight") showNext();
});

// ---------------
// ICON-Funktionen
// -----------------

// Like: Herz grau/rot umschalten + Status pro Bild speichern
likeKnopf.addEventListener("click", () => {
  const isActive = likeKnopf.classList.toggle("active");
  likeIconImg.src = isActive ? LIKE_RED_SRC : LIKE_GRAY_SRC;

  const img = images[currentIndex];
  likesStatus[img.id] = isActive;   // speichert ob dieses Bild geliked ist oder nicht

  saveLikesStatus();                // in localStorage speichern
});

// Save: Optik + Bild in neuem Tab öffnen (damit man es speichern kann)
saveKnopf.addEventListener("click", () => {
  saveKnopf.classList.toggle("active");
  const img = images[currentIndex];
  window.open(img.src, "_blank");   // öffnet das Bild in neuem Tab
});

// Share: Hat momentan keine Funtkion (Meldung erscheint)
shareKnopf.addEventListener("click", () => {
  alert("Teilen ist nur Prototyp :)");
});

// Kommentar-Overlay ein-/ausblenden
commentKnopf.addEventListener("click", () => {
  if (commentSection.style.display === "none" || commentSection.style.display === "") {
    commentSection.style.display = "block";  // anzeigen
  } else {
    commentSection.style.display = "none";   // verstecken
  }
});

commentCloseKnopf.addEventListener("click", () => {
  commentSection.style.display = "none";
});

// ----------------------------------------------
// Kommentar posten (jedes Bild eigener Speicher)
// ----------------------------------------------

commentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Seite soll nicht neu laden

  const text = commentInput.value.trim();
  if (text === "") return; // keine leeren Kommentare

  const img = images[currentIndex];
  const imgId = img.id;

  // wenn es noch keine Liste für dieses Bild gibt → neue anlegen
  if (!commentsState[imgId]) {
    commentsState[imgId] = [];
  }

  // Kommentar-Objekt speichern: Username + Text
  const newComment = {
    user: USERNAME,
    text: text
  };
  commentsState[imgId].push(newComment);

  // alles im localStorage speichern
  saveCommentsState();

  // neu rendern
  renderCommentsForCurrentImage();

  // Input leeren
  commentInput.value = "";
});

// Kommentar-Bereich am Anfang nicht anzeigen
commentSection.style.display = "none";

// ganz am Ende: erstes Bild anzeigen, damit alles initial gesetzt ist
showImage();