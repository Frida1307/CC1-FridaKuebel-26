// ---- KONSTANTEN ----
// Formen
const AUSWAHL_QUADRAT = 0;
const AUSWAHL_TETRIS = 1;
const AUSWAHL_KREIS = 2; 
const AUSWAHL_BLUME = 3; 

const AUSWAHL_FENSTER_RUND = 4; 
const AUSWAHL_FENSTER_SCHICK = 5; 
const AUSWAHL_FENSTER_RECHTECK = 6; 
const AUSWAHL_FENSTER_DREIECK = 7;

const AUSWAHL_TUER_RUND = 8; 
const AUSWAHL_TUER_SCHICK = 9; 
const AUSWAHL_TUER_RECHTECK = 10; 
const AUSWAHL_TUER_GLAS = 11; 

const AUSWAHL_FASSADE_PFLANZE = 12; 
const AUSWAHL_FASSADE_SCHORNSTEIN = 13; 
const AUSWAHL_FASSADE_BALKON = 14; 
const AUSWAHL_FASSADE_LAMPE = 15;

const AUSWAHL_GARTEN_RANKEN = 16; 
const AUSWAHL_GARTEN_PILZ = 17; 
const AUSWAHL_GARTEN_BUSCH = 18;
const AUSWAHL_GARTEN_FROSCH = 19;

// Farben
const AUSWAHL_GELB = 0; 
const AUSWAHL_GRUEN = 1; 
const AUSWAHL_ROT = 2; 
const AUSWAHL_BLAU = 3; 
const AUSWAHL_SCHWARZ = 4; 
const AUSWAHL_WEISS = 5; 
const AUSWAHL_BRAUN = 6;
const AUSWAHL_LEER = 7;

// Form-Bereiche nach Kategorie
const FORM_BEREICHE = [
    { min: AUSWAHL_QUADRAT,         max: AUSWAHL_BLUME,           kategorie: "umriss" },
    { min: AUSWAHL_FENSTER_RUND,    max: AUSWAHL_FENSTER_DREIECK, kategorie: "fenster" },
    { min: AUSWAHL_TUER_RUND,       max: AUSWAHL_TUER_GLAS,       kategorie: "tuer" },
    { min: AUSWAHL_FASSADE_PFLANZE, max: AUSWAHL_FASSADE_LAMPE,   kategorie: "fassade" },
    { min: AUSWAHL_GARTEN_RANKEN,   max: AUSWAHL_GARTEN_FROSCH,   kategorie: "garten" },
];

// Farb-Varianten pro Kategorie (Block-Index in hausBilder[])
const FARB_VARIANTEN_PRO_KATEGORIE = {
    umriss: {
        [AUSWAHL_GRUEN]: 1,
        [AUSWAHL_ROT]: 2,
        [AUSWAHL_GELB]: 3,
        [AUSWAHL_BLAU]: 4,
    },
    fenster: {
        [AUSWAHL_WEISS]: 1,
        [AUSWAHL_GELB]: 2,
        [AUSWAHL_BRAUN]: 3,
        [AUSWAHL_SCHWARZ]: 4,
    },
    tuer: {
        [AUSWAHL_WEISS]: 1,
        [AUSWAHL_ROT]: 2,
        [AUSWAHL_BRAUN]: 3,
        [AUSWAHL_SCHWARZ]: 4,
    },
    fassade: {
        [AUSWAHL_WEISS]: 1,
        [AUSWAHL_ROT]: 2,
        [AUSWAHL_BLAU]: 3,
        [AUSWAHL_SCHWARZ]: 4,
    },
};

// Welche Farben pro Auswahl-Seite angezeigt werden
const farbGruppen = [
    [AUSWAHL_GRUEN, AUSWAHL_ROT, AUSWAHL_GELB, AUSWAHL_BLAU], // Umriss
    [AUSWAHL_WEISS, AUSWAHL_GELB, AUSWAHL_BRAUN, AUSWAHL_SCHWARZ], // Fenster
    [AUSWAHL_WEISS, AUSWAHL_ROT, AUSWAHL_BRAUN, AUSWAHL_SCHWARZ], // Tür
    [AUSWAHL_WEISS, AUSWAHL_ROT, AUSWAHL_BLAU, AUSWAHL_SCHWARZ], // Fassade
    [AUSWAHL_LEER, AUSWAHL_LEER, AUSWAHL_LEER, AUSWAHL_LEER] // Garten
];

// ---- BILDER ----
// Auswahl-Formen:
const auswahlFormenBilder = [
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Quadrat.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Tetris.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Kreis.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Blume.png",

    "Bilder/Auswahl/Auswahl-Formen/Fenster/Fenster-Rund.png",
    "Bilder/Auswahl/Auswahl-Formen/Fenster/Fenster-Schick.png",
    "Bilder/Auswahl/Auswahl-Formen/Fenster/Fenster-Rechteck.png",
    "Bilder/Auswahl/Auswahl-Formen/Fenster/Fenster-Gross.png",

    "Bilder/Auswahl/Auswahl-Formen/Tuer/Tuer-Rund.png",
    "Bilder/Auswahl/Auswahl-Formen/Tuer/Tuer-Schick.png",
    "Bilder/Auswahl/Auswahl-Formen/Tuer/Tuer-Rechteck.png",
    "Bilder/Auswahl/Auswahl-Formen/Tuer/Tuer-Fenster.png",

    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Ranken.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Schornstein.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Ranken.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Ranken.png",

    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Blume.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Pilz.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Busch.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Frosch.png",
];

// Auswahl-Formen (ausgewählt):
const auswahlFormAusgewaehlteBilder = [
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Quadrat-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Tetris-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Kreis-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Umriss/Umriss-Blume-ausgewaehlt.png",

    "Bilder/Auswahl/Auswahl-Formen/Fenster/Fenster-Rund-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fenster/Fenster-Schick-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fenster/Fenster-Rechteck-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fenster/Fenster-Gross-ausgewaehlt.png",

    "Bilder/Auswahl/Auswahl-Formen/Tuer/Tuer-Rund-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Tuer/Tuer-Schick-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Tuer/Tuer-Rechteck-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Tuer/Tuer-Fenster-ausgewaehlt.png",

    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Ranken-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Schornstein-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Ranken-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Ranken-ausgewaehlt.png",

    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Blume-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Pilz-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Busch-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Frosch-ausgewaehlt.png",
];

// Auswahl-Farben:
const auswahlFarbenBilder = [
    "Bilder/Auswahl/Auswahl-Farben/Farbauswahl-Gelb.png",
    "Bilder/Auswahl/Auswahl-Farben/Farbauswahl-Gruen.png",
    "Bilder/Auswahl/Auswahl-Farben/Farbauswahl-Rot.png",
    "Bilder/Auswahl/Auswahl-Farben/Farbauswahl-Blau.png",
    "Bilder/Auswahl/Auswahl-Farben/Farbauswahl-Schwarz.png",
    "Bilder/Auswahl/Auswahl-Farben/Farbauswahl-Weiss.png",
    "Bilder/Auswahl/Auswahl-Farben/Farbauswahl-Braun.png",
    "Bilder/Auswahl/Auswahl-Farben/Keine-Farbe.png",
];

// Auswahl-Farbe (ausgewählt):
const auswahlFarbeAusgewaehltesBild = "Bilder/Auswahl/Auswahl-Farben/Ausgewaehlte-Farbauswahl.png";

// Hintergrund der Häuser – nur ein Bild
const hintergrundBild = "Bilder/Hintergrund/Goose-Hintergrund.png";

// Gänse
const gaenseBilder = [
    "Bilder/Gaense/Braenda.png",
    "Bilder/Gaense/Ken.png",
    "Bilder/Gaense/Tav.png",
    "Bilder/Gaense/Goose.png",
];

// Häuser-Assets
const hausBilder = [
    // --- UMRISS ---
    // QUADRAT (0–4)
    "Bilder/Haeuser/Umriss/Quadrat/Quadrat-farblos.png",
    "Bilder/Haeuser/Umriss/Quadrat/Quadrat-Gruen.png",
    "Bilder/Haeuser/Umriss/Quadrat/Quadrat-Rot.png",
    "Bilder/Haeuser/Umriss/Quadrat/Quadrat-Gelb.png",
    "Bilder/Haeuser/Umriss/Quadrat/Quadrat-Blau.png",

    // TETRIS (5–9)
    "Bilder/Haeuser/Umriss/Tetris/Tetris-farblos.png",
    "Bilder/Haeuser/Umriss/Tetris/Tetris-Gruen.png",
    "Bilder/Haeuser/Umriss/Tetris/Tetris-Rot.png",
    "Bilder/Haeuser/Umriss/Tetris/Tetris-Gelb.png",
    "Bilder/Haeuser/Umriss/Tetris/Tetris-Blau.png",

    // KREIS (10–14)
    "Bilder/Haeuser/Umriss/Kreis/Kreis-farblos.png",
    "Bilder/Haeuser/Umriss/Kreis/Kreis-Gruen.png",
    "Bilder/Haeuser/Umriss/Kreis/Kreis-Rot.png",
    "Bilder/Haeuser/Umriss/Kreis/Kreis-Gelb.png",
    "Bilder/Haeuser/Umriss/Kreis/Kreis-Blau.png",

    // BLUME (15–19)
    "Bilder/Haeuser/Umriss/Blume/Blume-farblos.png",
    "Bilder/Haeuser/Umriss/Blume/Blume-Gruen.png",
    "Bilder/Haeuser/Umriss/Blume/Blume-Rot.png",
    "Bilder/Haeuser/Umriss/Blume/Blume-Gelb.png",
    "Bilder/Haeuser/Umriss/Blume/Blume-Blau.png",

    // --- FENSTER ---
    // RUND (20–24)
    "Bilder/Haeuser/Fenster/Rund/Rund-farblos.png",
    "Bilder/Haeuser/Fenster/Rund/Rund-Weiss.png",
    "Bilder/Haeuser/Fenster/Rund/Rund-Gold.png",
    "Bilder/Haeuser/Fenster/Rund/Rund-Braun.png",
    "Bilder/Haeuser/Fenster/Rund/Rund-Schwarz.png",

    // SCHICK (25–29)
    "Bilder/Haeuser/Fenster/Schick/Schick-farblos.png",
    "Bilder/Haeuser/Fenster/Schick/Schick-Weiss.png",
    "Bilder/Haeuser/Fenster/Schick/Schick-Gold.png",
    "Bilder/Haeuser/Fenster/Schick/Schick-Braun.png",
    "Bilder/Haeuser/Fenster/Schick/Schick-Schwarz.png",

    // RECHTECK (30–34)
    "Bilder/Haeuser/Fenster/Rechteck/Rechteck-farblos.png",
    "Bilder/Haeuser/Fenster/Rechteck/Rechteck-Weiss.png",
    "Bilder/Haeuser/Fenster/Rechteck/Rechteck-Gold.png",
    "Bilder/Haeuser/Fenster/Rechteck/Rechteck-Braun.png",
    "Bilder/Haeuser/Fenster/Rechteck/Rechteck-Schwarz.png",

    // DREIECK (35–39)
    "Bilder/Haeuser/Fenster/Dreieck/Dreieck-farblos.png",
    "Bilder/Haeuser/Fenster/Dreieck/Dreieck-Weiss.png",
    "Bilder/Haeuser/Fenster/Dreieck/Dreieck-Gold.png",
    "Bilder/Haeuser/Fenster/Dreieck/Dreieck-Braun.png",
    "Bilder/Haeuser/Fenster/Dreieck/Dreieck-Schwarz.png",

    // --- TÜR ---
    // RUND (40–44)
    "Bilder/Haeuser/Tuer/Rund/Rund-farblos.png",
    "Bilder/Haeuser/Tuer/Rund/Rund-Weiss.png",
    "Bilder/Haeuser/Tuer/Rund/Rund-Rot.png",
    "Bilder/Haeuser/Tuer/Rund/Rund-Braun.png",
    "Bilder/Haeuser/Tuer/Rund/Rund-Schwarz.png",

    // SCHICK (45–49)
    "Bilder/Haeuser/Tuer/Schick/Schick-farblos.png",
    "Bilder/Haeuser/Tuer/Schick/Schick-Weiss.png",
    "Bilder/Haeuser/Tuer/Schick/Schick-Rot.png",
    "Bilder/Haeuser/Tuer/Schick/Schick-Braun.png",
    "Bilder/Haeuser/Tuer/Schick/Schick-Schwarz.png",

    // RECHTECK (50–54)
    "Bilder/Haeuser/Tuer/Rechteck/Rechteck-farblos.png",
    "Bilder/Haeuser/Tuer/Rechteck/Rechteck-Weiss.png",
    "Bilder/Haeuser/Tuer/Rechteck/Rechteck-Rot.png",
    "Bilder/Haeuser/Tuer/Rechteck/Rechteck-Braun.png",
    "Bilder/Haeuser/Tuer/Rechteck/Rechteck-Schwarz.png",

    // GLAS (55–59)
    "Bilder/Haeuser/Tuer/Glas/Glas-farblos.png",
    "Bilder/Haeuser/Tuer/Glas/Glas-Weiss.png",
    "Bilder/Haeuser/Tuer/Glas/Glas-Rot.png",
    "Bilder/Haeuser/Tuer/Glas/Glas-Braun.png",
    "Bilder/Haeuser/Tuer/Glas/Glas-Schwarz.png",

    // --- FASSADE ---
    // RANKEN (60–64)
    "Bilder/Haeuser/Fassade/Ranken/Ranken-farblos.png",
    "Bilder/Haeuser/Fassade/Ranken/Ranken-Weiss.png",
    "Bilder/Haeuser/Fassade/Ranken/Ranken-Rot.png",
    "Bilder/Haeuser/Fassade/Ranken/Ranken-Blau.png",
    "Bilder/Haeuser/Fassade/Ranken/Ranken-Schwarz.png",

    // SCHORNSTEIN (65–69)
    "Bilder/Haeuser/Fassade/Schornstein/Schornstein-farblos.png",
    "Bilder/Haeuser/Fassade/Schornstein/Schornstein-Weiss.png",
    "Bilder/Haeuser/Fassade/Schornstein/Schornstein-Rot.png",
    "Bilder/Haeuser/Fassade/Schornstein/Schornstein-Blau.png",
    "Bilder/Haeuser/Fassade/Schornstein/Schornstein-Schwarz.png",

    // BALKON (70–74)
    "Bilder/Haeuser/Fassade/Balkon/Balkon-farblos.png",
    "Bilder/Haeuser/Fassade/Balkon/Balkon-Weiss.png",
    "Bilder/Haeuser/Fassade/Balkon/Balkon-Rot.png",
    "Bilder/Haeuser/Fassade/Balkon/Balkon-Blau.png",
    "Bilder/Haeuser/Fassade/Balkon/Balkon-Schwarz.png",

    // LAMPE (75–79)
    "Bilder/Haeuser/Fassade/Lampe/Lampe-farblos.png",
    "Bilder/Haeuser/Fassade/Lampe/Lampe-Weiss.png",
    "Bilder/Haeuser/Fassade/Lampe/Lampe-Rot.png",
    "Bilder/Haeuser/Fassade/Lampe/Lampe-Blau.png",
    "Bilder/Haeuser/Fassade/Lampe/Lampe-Schwarz.png",

    // --- GARTEN ---
    // BLUME (80)
    "Bilder/Haeuser/Garten/Garten-Blume.png",
    // PILZ (81)
    "Bilder/Haeuser/Garten/Garten-Pilz.png",
    // BUSCH (82)
    "Bilder/Haeuser/Garten/Garten-Busch.png", 
    // FROSCH (83)
    "Bilder/Haeuser/Garten/Garten-Frosch.png",
];

// Häuser-Zustände. Ein Haus pro Seite
const leererFormzustand = () => ({
    umriss: null,
    fenster: null,
    tuer: null,
    fassade: null,
    garten: null,
});

const leererFarbzustand = () => ({
    umriss: AUSWAHL_LEER,
    fenster: AUSWAHL_LEER,
    tuer: AUSWAHL_LEER,
    fassade: AUSWAHL_LEER,
    garten: AUSWAHL_LEER,
});

const leererFarbKnopfZustand = () => ({
    umriss: null,
    fenster: null,
    tuer: null,
    fassade: null,
    garten: null,
});

const hausZustaende = [
    {
        formAuswahlProKategorie: leererFormzustand(),
        farbAuswahlProKategorie: leererFarbzustand(),
        farbKnopfProKategorie: leererFarbKnopfZustand(),
    },
    {
        formAuswahlProKategorie: leererFormzustand(),
        farbAuswahlProKategorie: leererFarbzustand(),
        farbKnopfProKategorie: leererFarbKnopfZustand(),
    },
    {
        formAuswahlProKategorie: leererFormzustand(),
        farbAuswahlProKategorie: leererFarbzustand(),
        farbKnopfProKategorie: leererFarbKnopfZustand(),
    },
    {
        formAuswahlProKategorie: leererFormzustand(),
        farbAuswahlProKategorie: leererFarbzustand(),
        farbKnopfProKategorie: leererFarbKnopfZustand(),
    },
];

let aktuellesHaus = 0;
let formAuswahlProKategorie  = hausZustaende[0].formAuswahlProKategorie;
let farbAuswahlProKategorie  = hausZustaende[0].farbAuswahlProKategorie;
let farbKnopfProKategorie    = hausZustaende[0].farbKnopfProKategorie;

// ---- VERLINKUNGEN AUS HTML ----
// Formen und Farben
const auswahlfeldFormen = document.querySelectorAll("#auswahl-formen .auswahl-feld");
const auswahlfeldFarben = document.querySelectorAll("#auswahl-farben .auswahl-feld");

const formAuswahlBilder = [
    document.getElementById("auswahl-formen-bild-1"),
    document.getElementById("auswahl-formen-bild-2"),
    document.getElementById("auswahl-formen-bild-3"),
    document.getElementById("auswahl-formen-bild-4"),
];

const farbenAuswahlBilder = [
    document.getElementById("auswahl-farben-bild-1"),
    document.getElementById("auswahl-farben-bild-2"),
    document.getElementById("auswahl-farben-bild-3"),
    document.getElementById("auswahl-farben-bild-4"),
];

const auswahlLinksKnopf  = document.getElementById("auswahl-links-knopf");
const auswahlRechtsKnopf = document.getElementById("auswahl-rechts-knopf");

// Bildschirm
const bildschirmHintergrund = document.getElementById("bildschirm-hintergrund");

const layerUmriss  = document.getElementById("layer-umriss");
const layerFenster = document.getElementById("layer-fenster");
const layerTuer    = document.getElementById("layer-tuer");
const layerFassade = document.getElementById("layer-fassade");
const layerGarten  = document.getElementById("layer-garten");

const bildschirmLinksKnopf  = document.getElementById("bildschirm-links-knopf");
const bildschirmRechtsKnopf = document.getElementById("bildschirm-rechts-knopf");

//Gans
const gansIcon = document.querySelector("#text-feld .gans");

// Anzeige welche Knöpfe gedrückt werden
const enterAnzeige  = document.getElementById("enter-gedrueckt");
const obenAnzeige   = document.getElementById("oben-gedrueckt");
const untenAnzeige  = document.getElementById("unten-gedrueckt");
const linksAnzeige  = document.getElementById("links-gedrueckt");
const rechtsAnzeige = document.getElementById("rechts-gedrueckt");

// ---- HILFSFUNKTIONEN ----
function ermittleKategorie(formIndex) {
    const bereich = FORM_BEREICHE.find(
        (b) => formIndex >= b.min && formIndex <= b.max
    );
    return bereich ? bereich.kategorie : null;
}

function ermittleSeitenKategorie() {
    const formIndexAufSeite = aktuelleAuswahlFormen;
    return ermittleKategorie(formIndexAufSeite);
}

// Ermittelt das passende Haus-Bild
function ermittleHausBild(formIndex, farbIndex) {
    const kategorie = ermittleKategorie(formIndex);

    // Sonderfall: Garten (kein Farb-Index)
    if (kategorie === "garten") {
        const offset = formIndex - AUSWAHL_GARTEN_RANKEN;
        const index = 80 + offset;

        if (index < 80 || index >= hausBilder.length) {
            console.warn("Garten-Index außerhalb des Arrays:", index);
            return null;
        }
        return hausBilder[index];
    }

    const FARBEN_PRO_FORM = 5;
    const basisIndex = formIndex * FARBEN_PRO_FORM;
    const index = basisIndex + farbIndex;

    if (index < 0 || index >= hausBilder.length) {
        console.warn("Haus-Index außerhalb des Arrays:", index);
        return null;
    }
    return hausBilder[index];
}

// Wandelt Farbauswahl in Variantenindex um
function ermittleFarbVariante(formIndex, farbKonstante) {
    if (farbKonstante === AUSWAHL_LEER) return 0;

    const kategorie = ermittleKategorie(formIndex);
    const varianten = FARB_VARIANTEN_PRO_KATEGORIE[kategorie];
    if (!varianten) return 0;

    return varianten[farbKonstante] ?? 0;
}

// ---- AUSWAHLBEREICH ----
let aktuelleAuswahlFormen = 0;

function zeigeFormAuswahl() {
    formAuswahlBilder.forEach((img, i) => {
        const globalIndex = (aktuelleAuswahlFormen + i) % auswahlFormenBilder.length;
        const kategorie = ermittleKategorie(globalIndex);
        const istAusgewaehlt = kategorie && formAuswahlProKategorie[kategorie] === globalIndex;

        img.src = istAusgewaehlt
            ? auswahlFormAusgewaehlteBilder[globalIndex]
            : auswahlFormenBilder[globalIndex];
    });
}

function zeigePassendeFarben() {
    const farbSeitenIndex = Math.floor(aktuelleAuswahlFormen / 4);
    const farben = farbGruppen[farbSeitenIndex];

    farbenAuswahlBilder.forEach((img, i) => {
        img.src = auswahlFarbenBilder[farben[i]];
    });
}

function aktualisiereFarbAuswahl() {
    const seitenKategorie = ermittleSeitenKategorie();
    const aktuellerFarbKnopf = seitenKategorie ? farbKnopfProKategorie[seitenKategorie] : null;

    auswahlfeldFarben.forEach((feld, i) => {
        const overlay = feld.querySelector(".auswahl-ausgewaehlt");
        if (!overlay) return;

        if (i === aktuellerFarbKnopf) {
            overlay.src = auswahlFarbeAusgewaehltesBild;
            overlay.style.opacity = 1;
        } else {
            overlay.style.opacity = 0;
        }
    });
}

// Seite wechseln (Es wird auf Form geachtet, da Farbe untergeordnet ist)
function naechsteAuswahlSeite () {
    aktuelleAuswahlFormen += 4;

    if (aktuelleAuswahlFormen >= auswahlFormenBilder.length) {
        aktuelleAuswahlFormen = 0;
    }

    zeigeFormAuswahl();
    zeigePassendeFarben();
    aktualisiereFarbAuswahl();
}

function vorherigeAuswahlSeite () {
    aktuelleAuswahlFormen -= 4;

    if (aktuelleAuswahlFormen < 0) {
        aktuelleAuswahlFormen = auswahlFormenBilder.length - 4;
    }

    zeigeFormAuswahl();
    zeigePassendeFarben();
    aktualisiereFarbAuswahl();
}

//---Haus anzeigen---
function zeichneHaus() {
    bildschirmHintergrund.src = hintergrundBild;

    layerUmriss.src  = "";
    layerFenster.src = "";
    layerTuer.src    = "";
    layerFassade.src = "";
    layerGarten.src  = "";

    // Kategorien durchgehen
    for (const kategorie of ["umriss", "fenster", "tuer", "fassade", "garten"]) {
        const formIndex = formAuswahlProKategorie[kategorie];
        const farbKonstante = farbAuswahlProKategorie[kategorie];

        if (formIndex === null) continue;

        let hausBildPfad;

        if (kategorie === "garten") {
            hausBildPfad = ermittleHausBild(formIndex, 0);
        } else {
            const farbVariante = ermittleFarbVariante(formIndex, farbKonstante);
            hausBildPfad = ermittleHausBild(formIndex, farbVariante);
        }

        if (!hausBildPfad) continue;

        if (kategorie === "umriss")  layerUmriss.src = hausBildPfad;
        if (kategorie === "fenster") layerFenster.src = hausBildPfad;
        if (kategorie === "tuer")    layerTuer.src = hausBildPfad;
        if (kategorie === "fassade") layerFassade.src = hausBildPfad;
        if (kategorie === "garten")  layerGarten.src = hausBildPfad;
    }

    zeigeFormAuswahl();
    zeigePassendeFarben();
    aktualisiereFarbAuswahl();
    aktualisiereGans();
}

function aktualisiereGans() {
    const gansAnzeigen = aktuellesHaus % gaenseBilder.length;
    gansIcon.src = gaenseBilder[gansAnzeigen];
}
auswahlRechtsKnopf.addEventListener("click", naechsteAuswahlSeite );
auswahlLinksKnopf.addEventListener("click", vorherigeAuswahlSeite );

// Markiert
document.querySelectorAll(".auswahl-markiert").forEach((img) => {
    img.src = "Bilder/Auswahl/Markiert.png";
});

zeichneHaus();

// Auswahlbereich: Auf Form klicken
auswahlfeldFormen.forEach((feld, i) => {
    feld.addEventListener("click", () => {
        const formIndex = (aktuelleAuswahlFormen + i) % auswahlFormenBilder.length;
        const kategorie = ermittleKategorie(formIndex);
        if (!kategorie) return;

        const umrissGewaehlt = formAuswahlProKategorie.umriss !== null;
        const istUmriss = (kategorie === "umriss");

        if (!istUmriss && !umrissGewaehlt) {
            console.log("Erst einen Umriss wählen, bevor Fenster/Tür/Fassade/Garten gesetzt werden.");
            return;
        }

        formAuswahlProKategorie[kategorie] = formIndex;
        farbAuswahlProKategorie[kategorie] = AUSWAHL_LEER;
        farbKnopfProKategorie[kategorie] = null;

        zeichneHaus();

        console.log("Form gewählt:", formIndex, "Kategorie:", kategorie);
    });
});

// Auswahlbereich: Auf Farbe klicken 
auswahlfeldFarben.forEach((feld, i) => {
    feld.addEventListener("click", () => {
        const seitenKategorie = ermittleSeitenKategorie();
        if (!seitenKategorie) return;

        const umrissGewaehlt = formAuswahlProKategorie.umriss !== null;
        if (!umrissGewaehlt && seitenKategorie !== "umriss") {
            console.log("Erst einen Umriss wählen, bevor Farben für andere Teile gesetzt werden.");
            return;
        }

        if (seitenKategorie === "garten") {
            console.log("Garten hat keine Farben, Farbklick wird ignoriert.");
            return;
        }

        const formIndex = formAuswahlProKategorie[seitenKategorie];
        if (formIndex === null) {
            console.log("In dieser Kategorie ist noch keine Form gewählt, Farbe wird ignoriert.");
            return;
        }

        const farbSeitenIndex = Math.floor(aktuelleAuswahlFormen / 4);
        const farbKonstante = farbGruppen[farbSeitenIndex][i];

        farbAuswahlProKategorie[seitenKategorie] = farbKonstante;
        farbKnopfProKategorie[seitenKategorie] = i;

        zeichneHaus();

        console.log("Farbe gewählt:", farbKonstante, "Kategorie:", seitenKategorie);
    });
});

function wechsleHaus(schritt) {
    aktuellesHaus += schritt;

    if (aktuellesHaus < 0) {
        aktuellesHaus = hausZustaende.length - 1;
    } else if (aktuellesHaus >= hausZustaende.length) {
        aktuellesHaus = 0;
    }

    formAuswahlProKategorie  = hausZustaende[aktuellesHaus].formAuswahlProKategorie;
    farbAuswahlProKategorie  = hausZustaende[aktuellesHaus].farbAuswahlProKategorie;
    farbKnopfProKategorie    = hausZustaende[aktuellesHaus].farbKnopfProKategorie;

    zeichneHaus();
}

bildschirmRechtsKnopf.addEventListener("click", () => wechsleHaus(1));
bildschirmLinksKnopf.addEventListener("click", () => wechsleHaus(-1));

// ---- TASTEN-ANZEIGE ----
const eingabeZuAnzeige = {
    Enter: enterAnzeige,
    " ": enterAnzeige,
    ArrowUp: obenAnzeige,
    w: obenAnzeige,
    W: obenAnzeige,
    ArrowDown: untenAnzeige,
    s: untenAnzeige,
    S: untenAnzeige,
    ArrowLeft: linksAnzeige,
    a: linksAnzeige,
    A: linksAnzeige,
    ArrowRight: rechtsAnzeige,
    d: rechtsAnzeige,
    D: rechtsAnzeige,
};

document.addEventListener("keydown", (event) => {
    const el = eingabeZuAnzeige[event.key];
    if (el) el.style.display = "block";
});

document.addEventListener("keyup", (event) => {
    const el = eingabeZuAnzeige[event.key];
    if (el) el.style.display = "none";
});