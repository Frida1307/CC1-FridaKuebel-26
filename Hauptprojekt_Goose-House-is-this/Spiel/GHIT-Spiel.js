//----KONSTANTE:----
//Konstante (Formen)
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

//Konstante (Farben)
const AUSWAHL_GELB = 0; 
const AUSWAHL_GRUEN = 1; 
const AUSWAHL_ROT = 2; 
const AUSWAHL_BLAU = 3; 
const AUSWAHL_SCHWARZ = 4; 
const AUSWAHL_WEISS = 5; 
const AUSWAHL_BRAUN = 6;
const AUSWAHL_LEER = 7;

// Welche Farben pro Seite angezeigt werden
const farbGruppen = [
  [AUSWAHL_GRUEN, AUSWAHL_ROT, AUSWAHL_GELB, AUSWAHL_BLAU],
  [AUSWAHL_WEISS, AUSWAHL_GELB, AUSWAHL_BRAUN, AUSWAHL_SCHWARZ],
  [AUSWAHL_WEISS, AUSWAHL_ROT, AUSWAHL_BRAUN, AUSWAHL_SCHWARZ],
  [AUSWAHL_WEISS, AUSWAHL_ROT, AUSWAHL_BLAU, AUSWAHL_SCHWARZ],
  [AUSWAHL_LEER, AUSWAHL_LEER, AUSWAHL_LEER, AUSWAHL_LEER]
];

//----BILDER:----
//Auswahl-Formen:
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

    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Blumen.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Schornstein.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Stab.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Lampe.png",

    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Blume.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Pilz.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Busch.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Frosch.png",
    
]
//Auswahl-Formen (ausgewählt):
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

    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Blumen-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Schornstein-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Stab-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Lampe-ausgewaehlt.png",

    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Blume-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Pilz-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Busch-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Garten/Garten-Frosch-ausgewaehlt.png",
];

//Auswahl-Farben:
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

//Auswahl-Farbe (ausgewählt):
const auswahlFarbeAusgewaehltesBild = "Bilder/Auswahl/Auswahl-Farben/Ausgewaehlte-Farbauswahl.png";

//Hintergrund der Häuser (vielleicht nur ein Bild, muss mal schauen)
const hausHintergrund = [
    "Bilder/Hintergrund/Goose-Hintergrund.png",
    "Bilder/Hintergrund/Goose-Hintergrund.png",
    "Bilder/Hintergrund/Goose-Hintergrund.png",
    "Bilder/Hintergrund/Goose-Hintergrund.png",
]

const haus = [
    "Bilder/Haeuse/Umriss/Quadrat/Quadrat-Gruen.png",
    "Bilder/Haeuse/Umriss/Quadrat/Quadrat-Rot.png",
    "Bilder/Haeuse/Umriss/Quadrat/Quadrat-Gelb.png",
    "Bilder/Haeuse/Umriss/Quadrat/Quadrat-Blau.png",
    
    "Bilder/Haeuse/Umriss/Tetris/Tetris-Gruen.png",
    "Bilder/Haeuse/Umriss/Tetris/Tetris-Rot.png",
    "Bilder/Haeuse/Umriss/Tetris/Tetris-Gelb.png",
    "Bilder/Haeuse/Umriss/Tetris/Tetris-Blau.png",
    
    "Bilder/Haeuse/Umriss/Kreis/Kreis-Gruen.png",
    "Bilder/Haeuse/Umriss/Kreis/Kreis-Rot.png",
    "Bilder/Haeuse/Umriss/Kreis/Kreis-Gelb.png",
    "Bilder/Haeuse/Umriss/Kreis/Kreis-Blau.png",
    
    "Bilder/Haeuse/Umriss/Blume/Blume-Gruen.png",
    "Bilder/Haeuse/Umriss/Blume/Blume-Rot.png",
    "Bilder/Haeuse/Umriss/Blume/Blume-Gelb.png",
    "Bilder/Haeuse/Umriss/Blume/Blume-Blau.png",
    

]

//----VERLINKUNGEN AUS HTML----
//Formen und Farben
const auswahlfeldFormen = document.querySelectorAll("#auswahlFormen .auswahlFeld");
const auswahlfeldFarben = document.querySelectorAll("#auswahlFarben .auswahlFeld");

const auswahlFormenBilderElemente = [
    document.getElementById("auswahlFormenBild1"),
    document.getElementById("auswahlFormenBild2"),
    document.getElementById("auswahlFormenBild3"),
    document.getElementById("auswahlFormenBild4")
];

const auswahlFarbenBilderElemente = [
    document.getElementById("auswahlFarbenBild1"),
    document.getElementById("auswahlFarbenBild2"),
    document.getElementById("auswahlFarbenBild3"),
    document.getElementById("auswahlFarbenBild4")
];

const auswahlLinksKnopf  = document.getElementById("auswahlLinksKnopf");
const auswahlRechtsKnopf = document.getElementById("auswahlRechtsKnopf");

//Bildschirm
const bildschirm = document.getElementById("bildschirmInhalt");

const bildschirmLinksKnopf = document.getElementById("bildschirmLinksKnopf");
const bildschirmRechtsKnopf = document.getElementById("bildschirmRechtsKnopf");

//Anzeige welche Knöpfe gedrückt werden
const enterAnzeige  = document.getElementById("enter-gedrueckt");
const obenAnzeige   = document.getElementById("oben-gedrueckt");
const untenAnzeige  = document.getElementById("unten-gedrueckt");
const linksAnzeige  = document.getElementById("links-gedrueckt");
const rechtsAnzeige = document.getElementById("rechts-gedrueckt");



//-----AUSWAHLBEREICH:------

// Auswahlbereich (anzeigen)
let aktuelleAuswahlFormen = 0;

function auswahlFormenAnzeigen() {
    auswahlFormenBilderElemente.forEach((img, i) => {
        img.src = auswahlFormenBilder[(aktuelleAuswahlFormen + i) % auswahlFormenBilder.length];
    });
}
// Ist direkt den Formen untergeordnet. Wenn die Formen die Seite wechseln, tun die Farben das auch
function passendeFarbenAnzeigen() {
  const farben = farbGruppen[
    Math.floor(aktuelleAuswahlFormen / 4)
  ];

  auswahlFarbenBilderElemente.forEach((img, i) => {
    img.src = auswahlFarbenBilder[farben[i]];
  });
}

// -----Auswahlbereich (Seite wechseln)-----
//Nächste Seite
function auswahlFormNaechsteSeite() {
    aktuelleAuswahlFormen += 4;

    if (aktuelleAuswahlFormen >= auswahlFormenBilder.length) {
        aktuelleAuswahlFormen = 0;
    }

    auswahlFormenAnzeigen();
    passendeFarbenAnzeigen();
}

//Vorherige Seite
function auswahlFormVorherigeSeite() {

    aktuelleAuswahlFormen -= 4;

    if (aktuelleAuswahlFormen < 0) {
        aktuelleAuswahlFormen = auswahlFormenBilder.length - 4;
    }

    auswahlFormenAnzeigen();
    passendeFarbenAnzeigen();
}

//Das passiert alles wenn die Pfeile gedrückt werden
auswahlRechtsKnopf.addEventListener("click", auswahlFormNaechsteSeite);
auswahlLinksKnopf.addEventListener("click", auswahlFormVorherigeSeite);


auswahlFormenAnzeigen();
passendeFarbenAnzeigen();


//-----Auswahlbereich (auwählen)-----

// Makiert
document.querySelectorAll(".auswahlMarkiert")
    .forEach(img => {
        img.src = "Bilder/Auswahl/Markiert.png";
    });


//Ausgewählt (Form):

//Augewählt (Farbe)






/*let ausgewaehlteFarbe = null;

auswahlfeldFarben.forEach((feld, i) => {

  const overlay = feld.querySelector(".auswahlAusgewaehlt");

  feld.addEventListener("click", () => {

    auswahlfeldFarben.forEach(f => {
      f.classList.remove("farbeAktiv");

      const img = f.querySelector(".auswahlAusgewaehlt");
      if (img) img.style.opacity = 0;
    });

    // neue Auswahl setzen
    feld.classList.add("farbeAktiv");

    if (overlay) {
      overlay.src =  auswahlFarbeAusgewaehltesBild;
      overlay.style.opacity = 1;
    }

    ausgewaehlteFarbe = i;

    console.log("Farbe ausgewählt:", ausgewaehlteFarbe);
  });
});
*/
//-----BILDSCHIRM:------
let aktuellesHintergrundbild = 0;

function hausHintergrundAnzeigen() {
    bildschirm.src = hausHintergrund[aktuellesHintergrundbild];
}

hausHintergrundAnzeigen();

bildschirmRechtsKnopf.addEventListener("click", () => {
    aktuellesHintergrundbild++;

    if (aktuellesHintergrundbild >= hausHintergrund.length) {
        aktuellesHintergrundbild = 0;
    }

    hausHintergrundAnzeigen();
});

bildschirmLinksKnopf.addEventListener("click", () => {
    aktuellesHintergrundbild--;

    if (aktuellesHintergrundbild < 0) {
        aktuellesHintergrundbild = hausHintergrund.length - 1;
    }

    hausHintergrundAnzeigen();
});

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
