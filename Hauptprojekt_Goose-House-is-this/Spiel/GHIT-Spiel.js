const auswahlFormenBilder = [
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Quadrat.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Tetris.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Kreis.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Blume.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Blume.png",
]

const AUSWAHL_QUADRAT = 0;
const AUSWAHL_TETRIS = 1;
const AUSWAHL_KREIS = 2; 
const AUSWAHL_BLUME = 3; 

const AUSWAHL_FENSTER_RUND = 4; 
const AUSWAHL_FENSTER_SCHICK = 5; 
const AUSWAHL_FENSTER_RECHTECK = 6; 
const AUSWAHL_FENSTER_GROSS = 7;

const AUSWAHL_TUER_RUND = 8; 
const AUSWAHL_TUER_SCHICK = 9; 
const AUSWAHL_TUER_RECHTECK = 10; 
const AUSWAHL_TUER_FENSTER = 11; 

const AUSWAHL_FASSADE_PFLANZE = 12; 
const AUSWAHL_FASSADE_SCHORNSTEIN = 13; 
const AUSWAHL_FASSADE_STAB = 14; 
const AUSWAHL_FASSADE_LAMPE = 15;

const AUSWAHL_GARTEN_BLUME = 16; 
const AUSWAHL_GARTEN_PILZ = 17; 
const AUSWAHL_GARTEN_BUSCH = 18;
const AUSWAHL_GARTEN_FROSCH = 19;


const auswahlFarbenBilder = [
    "Bilder/Auswahl/Auswahl-Farben/Umriss/Farbauswahl-Gelb.png",
    "Bilder/Auswahl/Auswahl-Farben/Umriss/Farbauswahl-Gruen.png",
    "Bilder/Auswahl/Auswahl-Farben/Umriss/Farbauswahl-Rot.png",
    "Bilder/Auswahl/Auswahl-Farben/Umriss/Farbauswahl-Blau.png",
    "Bilder/Auswahl/Auswahl-Farben/Umriss/Farbauswahl-Schwarz.png",
    "Bilder/Auswahl/Auswahl-Farben/Umriss/Farbauswahl-Weiss.png",
    "Bilder/Auswahl/Auswahl-Farben/Umriss/Farbauswahl-Braun.png",
];

const AUSWAHL_GELB = 0; 
const AUSWAHL_GRUEN = 1; 
const AUSWAHL_ROT = 2; 
const AUSWAHL_BLAU = 3; 
const AUSWAHL_SCHWARZ = 4; 
const AUSWAHL_WEISS = 5; 
const AUSWAHL_BRAUN = 6;

const hausHintergrund = [
    "Bilder/Hintergrund/Braenda-Hintergrund.png",
    "Bilder/Hintergrund/Ken-Hintergrund.png",
    "Bilder/Hintergrund/Tav-Hintergrund.png",
    "Bilder/Hintergrund/Goose-Hintergrund.png",
]

const auswahlFormen1 = document.getElementById("auswahlFormenBild1");
const auswahlFormen2 = document.getElementById("auswahlFormenBild2");
const auswahlFormen3 = document.getElementById("auswahlFormenBild3");
const auswahlFormen4 = document.getElementById("auswahlFormenBild4");

const auswahlFarben1 = document.getElementById("auswahlFarbenBild1");
const auswahlFarben2 = document.getElementById("auswahlFarbenBild2");
const auswahlFarben3 = document.getElementById("auswahlFarbenBild3");
const auswahlFarben4 = document.getElementById("auswahlFarbenBild4");

const auswahlLinksKnopf  = document.getElementById("auswahlLinksKnopf");
const auswahlRechtsKnopf = document.getElementById("auswahlRechtsKnopf");


const bildschirm = document.getElementById("bildschirm");

const bildschirmLinksKnopf = document.getElementById("bildschirmLinksKnopf");
const bildschirmRechtsKnopf = document.getElementById("bildschirmRechtsKnopf");


const enterAnzeige  = document.getElementById("enter-gedrueckt");
const obenAnzeige   = document.getElementById("oben-gedrueckt");
const untenAnzeige  = document.getElementById("unten-gedrueckt");
const linksAnzeige  = document.getElementById("links-gedrueckt");
const rechtsAnzeige = document.getElementById("rechts-gedrueckt");

//-----AUSWAHLBEREICH:------
// Auswahlbereich (anzeigen)

let aktuelleAuswahlFormen = 0;

function auswahlFormenAnzeigen() {

    auswahlFormen1.src = auswahlFormenBilder[aktuelleAuswahlFormen];
    auswahlFormen2.src = auswahlFormenBilder[aktuelleAuswahlFormen + 1];
    auswahlFormen3.src = auswahlFormenBilder[aktuelleAuswahlFormen + 2];
    auswahlFormen4.src = auswahlFormenBilder[aktuelleAuswahlFormen + 3];

}

function auswahlFarbenAnzeigen(b1, b2, b3, b4) {
    auswahlFarben1.src = auswahlFarbenBilder[b1];
    auswahlFarben2.src = auswahlFarbenBilder[b2];
    auswahlFarben3.src = auswahlFarbenBilder[b3];
    auswahlFarben4.src = auswahlFarbenBilder[b4];
}

// -----Auswahlbereich (Seite wechseln)-----
//Formen (nächste Seite)
function auswahlFormNaechsteSeite() {

    aktuelleAuswahlFormen += 4;

    if (aktuelleAuswahlFormen >= auswahlFormenBilder.length) {
        aktuelleAuswahlFormen = 0;
    }

    auswahlFormenAnzeigen();
    passendeFarbenAnzeigen();
}


//Formen (vorherige Seite)
function auswahlFormVorherigeSeite() {

    aktuelleAuswahlFormen -= 4;

    if (aktuelleAuswahlFormen < 0) {
        aktuelleAuswahlFormen = auswahlFormenBilder.length - 4;
    }

    auswahlFormenAnzeigen();
    passendeFarbenAnzeigen();
}

//Farben (kopieren von Form-Seiten)
function passendeFarbenAnzeigen() {

    if (aktuelleAuswahlFormen >= 0 && aktuelleAuswahlFormen <= 3){
        auswahlFarbenAnzeigen(
            AUSWAHL_GRUEN,
            AUSWAHL_ROT,
            AUSWAHL_GELB,
            AUSWAHL_BLAU,
        );
    }

    else if (aktuelleAuswahlFormen >= 4 && aktuelleAuswahlFormen <= 7){
        auswahlFarbenAnzeigen(
            AUSWAHL_WEISS,
            AUSWAHL_GELB,
            AUSWAHL_BRAUN,
            AUSWAHL_SCHWARZ,
        );
    }

    else if (aktuelleAuswahlFormen >= 8 && aktuelleAuswahlFormen <= 12){
        auswahlFarbenAnzeigen(
            AUSWAHL_WEISS,
            AUSWAHL_ROT,
            AUSWAHL_BRAUN,
            AUSWAHL_SCHWARZ,
        );
    }

    else if (aktuelleAuswahlFormen >= 13 && aktuelleAuswahlFormen <= 16){
        auswahlFarbenAnzeigen(
            AUSWAHL_WEISS,
            AUSWAHL_ROT,
            AUSWAHL_BLAU,
            AUSWAHL_SCHWARZ,
        );
    }
}

//Wechseln der Seite:
auswahlRechtsKnopf.addEventListener("click", auswahlFormNaechsteSeite);
auswahlLinksKnopf.addEventListener("click", auswahlFormVorherigeSeite);


auswahlFormenAnzeigen();
passendeFarbenAnzeigen();

// -----Auswahlbereich (auwählen)-----
//kommt noch




//-----BILDSCHIRM:------
hausHintergrund();

//---SPIEL MIT TASTEN STEUERN:---


//--------ANZEIGE:--------
//Anzeige welche Knöpfe gedrückt werden

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "Enter" || key === " ") {
    enterAnzeige.style.display = "block";
    }
    if (key === "ArrowUp" || key === "w" || key === "W") {
    obenAnzeige.style.display = "block";
    }
    if (key === "ArrowDown" || key === "s" || key === "S") {
    untenAnzeige.style.display = "block";
    }
    if (key === "ArrowLeft" || key === "a" || key === "A") {
    linksAnzeige.style.display = "block";
    }
    if (key === "ArrowRight" || key === "d" || key === "D") {
    rechtsAnzeige.style.display = "block";
    }
});

document.addEventListener("keyup", (event) => {
    const key = event.key;

    if (key === "Enter" || key === " ") {
    enterAnzeige.style.display = "none";
    }
    if (key === "ArrowUp" || key === "w" || key === "W") {
    obenAnzeige.style.display = "none";
    }
    if (key === "ArrowDown" || key === "s" || key === "S") {
    untenAnzeige.style.display = "none";
    }
    if (key === "ArrowLeft" || key === "a" || key === "A") {
    linksAnzeige.style.display = "none";
    }
    if (key === "ArrowRight" || key === "d" || key === "D") {
    rechtsAnzeige.style.display = "none";
    }
});
