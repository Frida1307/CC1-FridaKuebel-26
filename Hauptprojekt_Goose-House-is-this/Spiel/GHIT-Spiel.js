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

const AUSWAHL_FASSADE_RANKEN = 12; 
const AUSWAHL_FASSADE_SCHORNSTEIN = 13; 
const AUSWAHL_FASSADE_BALKON = 14; 
const AUSWAHL_FASSADE_GRAFFITI = 15;

const AUSWAHL_GARTEN_BLUMEN = 16; 
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
    { min: AUSWAHL_FASSADE_RANKEN, max: AUSWAHL_FASSADE_GRAFFITI,   kategorie: "fassade" },
    { min: AUSWAHL_GARTEN_BLUMEN,   max: AUSWAHL_GARTEN_FROSCH,   kategorie: "garten" },
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

//Gänse-Rahmen-Farbenrm
const rahmenFarben = [
    "#961818", // Brända = rot
    "#0a1d52", // Ken    = blau
    "#386341", // Tav    = grün
    "#f1c113", // Goose  = gelb
];

const gansNamen = ["BRÄNDA", "KEN", "TAV", "GOOSE"];

const gansOffsets = [
  { bottom: -25, left: 3.8, width: 21 }, //Brända
  { bottom: -23.8, left: 3.0, width: 24 }, //Ken
  { bottom: -22, left: 3.5, width: 25 }, //Tav
  { bottom: -12, left: 4.0, width: 23 }, //Goose
];


//Dialog:
const raetselTexte = [
    //BRÄNDA:
    ["HEY!! ICH BIN BRÄNDA VIELEN DANK DAS DU UNS HILFST! DANK DEM TSUNAMI LIEGT UNSER DORF JETZT ECHT IN SCHUTT UND ASCHE. DIE ANDEREN SIND UMGEZOGEN UND WIR SIND DIE LETZTEN VIER. -  ICH HÄTTE ECHT GEDACHT, DASS MEIN HAUS STAND HÄLT MIT SEINER ROBUSTEN FORM UND DEN VIELEN ECKEN UND KANTEN. MIR IST SO KALT, ICH WERDE DAS HAUS WIEDER IN DER GLUT- UND FEUERFARBE STREICHEN, DAMIT ES SICH WARM ANFÜHLT.",
     "TAV IST SO GOLDIG! ICH MUSS NUR BEI IHR NUR AM BLUMENKASTEN VORBEISCHAUEN, DANN STEHT SIE SCHON DIREKT VOR MEINER TÜR UND HILFT MIR BEIM BLUMEN GIESSEN.",
     "MEINE TÜR PASST SO GUT ZU MEINEM HAUS, SOGAR DIE FARBE IST GLEICH!  KENS TÜR ÄHNELT MEINER, NUR IST SEINE VIEL SCHNÖSELIGER.",
     "ICH LIEBE BLUMEM! DARUM DÜRFEN SIE ES SICH AUCH AN MEINEM HAUS BEQUEM MACHEN. UND SIE HABEN AUCH MEINE LIEBLINGSFARBE!"],

    //KEN:
    ["Wer bist du denn? Du willst mir helfen!? Ich glaub zwar nicht, dass du wirklich weiterhelfen kannst. Aber naja, wenn du schon mal da bist… Fast alles an meinem Haus hat die selbe Farbe (Auch wenn manche meinen es wäre keine Farbe, was soll es dann sonst sein)",
     "Ich verstehe mich eigentlich ganz gut mit meinen Nachbarn. Die eine ist zwar viel zu laut und die andere echt schusslig, aber  insgesamt sind sie echt nett. Und ich muss sagen, Tav hat eine echt schöne Tür. So schick!  Erinnert mich an eine Gondeltür",
     "Auch wenn Brända laut, nervig und oft viel zu viel ist, hat sie auch herzliche Seiten. Als mein Balkon gestrichen musste, war sie sofort da. Mit Farbeimer sogar… Sie hatte sogar die passende Farbe! Sie mag ja eigentlich nichts dunkles",
     "Du weißt noch nichts über Goose? Verständlich, mit dem reden wir nicht. Er selbst ja auch nicht… Hast du seinen Umriss schon gesehen? Er kann da doch niemals Platz drinnen haben. Ich kann auch nie in die Richtung schauen, ich werde jedes Mal geblendet."],

    //TAV:
    ["Guten Morgen. Vielen Dank das du uns unterstützt. Ich würde gerne helfen, aber bei mir im Leben läuft gerade gar nichts rund. Anders als bei meinem Haus, haha. Sorry...",
     "Ken und Brända könnten nicht unterschiedlicher sein. Wenn Brända eine Flamme wäre, wäre Ken ein Eiswürfel, mit seiner kühlen Art",
     "Kinder können echt anstrengend sein, letztens musste ich zwei aus dem Schornstein retten. Ich weiß bis heute nicht, was sie oben wollten. Vielleicht dachten sie wegen der Farbe, dass es ein See sei.",
     "Ich wollte gerne, dass meine Tür und mein Fenster dieselbe Farbe haben. Doch dann hatte Brända auch schon ein weißes Fenster, also entschied ich mich für eine andere Fensterfarbe."],

    //GOOSE:
    ["...",
     ". ...",
     "...",
     "...",
     "- .- ...- / -- .- --.  / .--. .. .-.. --.. . ",
     "𓆏"
    ]
];

const dialogSeitenIndex = [0, 0, 0, 0];

const loesungZustaende = [
    // Haus Brända:
    {
        formAuswahlProKategorie: {
            umriss:  AUSWAHL_TETRIS,
            fenster: AUSWAHL_FENSTER_DREIECK,
            tuer:    AUSWAHL_TUER_RECHTECK,
            fassade: AUSWAHL_FASSADE_RANKEN,
            garten:  AUSWAHL_GARTEN_BLUMEN,
        },
        farbAuswahlProKategorie: {
            umriss:  AUSWAHL_ROT,
            fenster: AUSWAHL_WEISS,
            tuer:    AUSWAHL_ROT,
            fassade: AUSWAHL_ROT,
            garten:  AUSWAHL_LEER,
        }
    },
    // Haus Ken
    {
        formAuswahlProKategorie: {
            umriss:  AUSWAHL_QUADRAT,
            fenster: AUSWAHL_FENSTER_SCHICK,
            tuer:    AUSWAHL_TUER_SCHICK,
            fassade: AUSWAHL_FASSADE_BALKON,
            garten:  AUSWAHL_GARTEN_BUSCH,
        },
        farbAuswahlProKategorie: {
            umriss:  AUSWAHL_ROT,
            fenster: AUSWAHL_SCHWARZ,
            tuer:    AUSWAHL_SCHWARZ,
            fassade: AUSWAHL_SCHWARZ,
            garten:  AUSWAHL_LEER,
        }
    },
    // Haus Tav
    {
        formAuswahlProKategorie: {
            umriss:  AUSWAHL_KREIS,
            fenster: AUSWAHL_FENSTER_RECHTECK,
            tuer:    AUSWAHL_TUER_GLAS,
            fassade: AUSWAHL_FASSADE_SCHORNSTEIN,
            garten:  AUSWAHL_GARTEN_PILZ,
        },
        farbAuswahlProKategorie: {
            umriss:  AUSWAHL_GRUEN,
            fenster: AUSWAHL_GELB,
            tuer:    AUSWAHL_WEISS,
            fassade: AUSWAHL_BLAU,
            garten:  AUSWAHL_LEER,
        }
    },
    // Haus Goose
    {
        formAuswahlProKategorie: {
            umriss:  AUSWAHL_BLUME,
            fenster: AUSWAHL_FENSTER_RUND,
            tuer:    AUSWAHL_TUER_RUND,
            fassade: AUSWAHL_FASSADE_GRAFFITI,
            garten:  AUSWAHL_GARTEN_FROSCH,
        },
        farbAuswahlProKategorie: {
            umriss:  AUSWAHL_GELB,
            fenster: AUSWAHL_BRAUN,
            tuer:    AUSWAHL_BRAUN,
            fassade: AUSWAHL_WEISS,
            garten:  AUSWAHL_LEER,
        }
    }
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
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Balkon.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Graffiti.png",

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
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Balkon-ausgewaehlt.png",
    "Bilder/Auswahl/Auswahl-Formen/Fassade/Fassade-Graffiti-ausgewaehlt.png",

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

    // GRAFFITI (75–79)
    "Bilder/Haeuser/Fassade/Graffiti/Graffiti-farblos.png",
    "Bilder/Haeuser/Fassade/Graffiti/Graffiti-Weiss.png",
    "Bilder/Haeuser/Fassade/Graffiti/Graffiti-Rot.png",
    "Bilder/Haeuser/Fassade/Graffiti/Graffiti-Blau.png",
    "Bilder/Haeuser/Fassade/Graffiti/Graffiti-Schwarz.png",

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

let dialogTimer             = null;
let aktuellerDialogText     = "";
let aktuellerDialogIndex    = 0;

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
const rahmenKlassen = ["haus-0-rahmen", "haus-1-rahmen", "haus-2-rahmen", "haus-3-rahmen"];


// Anzeige welche Knöpfe gedrückt werden
const enterAnzeige  = document.getElementById("enter-gedrueckt");
const obenAnzeige   = document.getElementById("oben-gedrueckt");
const untenAnzeige  = document.getElementById("unten-gedrueckt");
const linksAnzeige  = document.getElementById("links-gedrueckt");
const rechtsAnzeige = document.getElementById("rechts-gedrueckt");

//Dialog-Text
const dialogContainer   = document.getElementById("dialog");
const dialogGansName    = document.getElementById("gans-name");
const dialogInhalt      = document.getElementById("dialog-inhalt");
const dialogLinksKnopf  = document.getElementById("dialog-links-knopf");
const dialogRechtsKnopf = document.getElementById("dialog-rechts-knopf");

const abgebenKnopf = document.getElementById("abgeben-knopf");



//Sound:
const braendaStimme = new Audio("Sounds/type.wav");
braendaStimme.volume = 0.3;

const kenStimme = new Audio("Sounds/type.wav");
kenStimme.volume = 0.3;

const tavStimme = new Audio("Sounds/type.wav");
tavStimme.volume = 0.3;

const gooseStimme = new Audio("Sounds/type.wav");
gooseStimme.volume = 0.3;


// --- Tastenlayout ---
const layoutTasten = {
    //Formenauswahl
    "form-auswahl-1": {
        element: auswahlfeldFormen[0],
        links: null,
        rechts: "form-auswahl-2",
        oben: null,
        unten: "form-auswahl-3",
        enter: () => auswahlfeldFormen[0].click(),
    },

    "form-auswahl-2": {
        element: auswahlfeldFormen[1],
        links: "form-auswahl-1",
        rechts: null,
        oben: null,
        unten: "form-auswahl-4",
        enter: () => auswahlfeldFormen[1].click(),
    },

    "form-auswahl-3": {
        element: auswahlfeldFormen[2],
        links: "auswahl-pfeil-links",
        rechts: "form-auswahl-4",
        oben: "form-auswahl-1",
        unten: "farb-auswahl-1",
        enter: () => auswahlfeldFormen[2].click(),
    },

    "form-auswahl-4": {
        element: auswahlfeldFormen[3],
        links: "form-auswahl-3",
        rechts: "auswahl-pfeil-rechts",
        oben: "form-auswahl-2",
        unten: "farb-auswahl-2",
        enter: () => auswahlfeldFormen[3].click(),
    },

    //Farbauswahl
    "farb-auswahl-1": {
        element: auswahlfeldFarben[0],
        links: "auswahl-pfeil-links",
        rechts: "farb-auswahl-2",
        oben: "form-auswahl-3",
        unten: "farb-auswahl-3",
        enter: () => auswahlfeldFarben[0].click(),
    },

    "farb-auswahl-2": {
        element: auswahlfeldFarben[1],
        links: "farb-auswahl-1",
        rechts: "auswahl-pfeil-rechts",
        oben: "form-auswahl-4",
        unten: "farb-auswahl-4",
        enter: () => auswahlfeldFarben[1].click(),
    },

    "farb-auswahl-3": {
        element: auswahlfeldFarben[2],
        links: null,
        rechts: "farb-auswahl-4",
        oben: "farb-auswahl-1",
        unten: null,
        enter: () => auswahlfeldFarben[2].click(),
    },

    "farb-auswahl-4": {
        element: auswahlfeldFarben[3],
        links: "farb-auswahl-3",
        rechts: null,
        oben: "farb-auswahl-2",
        unten: null,
        enter: () => auswahlfeldFarben[3].click(),
    },

    //Auwahlpfeile
    "auswahl-pfeil-links": {
        element: auswahlLinksKnopf,
        links: "bildschirm-pfeil-rechts",
        rechts: "auswahl-pfeil-rechts",
        oben: "form-auswahl-3",
        unten: "farb-auswahl-1",
        enter: () => auswahlLinksKnopf.click(),
    },

    "auswahl-pfeil-rechts": {
        element: auswahlRechtsKnopf,
        links: "auswahl-pfeil-links",
        rechts: "bildschirm-pfeil-links",
        oben: "form-auswahl-4",
        unten: "farb-auswahl-2",
        enter: () => auswahlRechtsKnopf.click(),
    },

    //Bildschirmpfeile
    "bildschirm-pfeil-links": {
        element: bildschirmLinksKnopf,
        links: "auswahl-pfeil-rechts",
        rechts: "bildschirm-pfeil-rechts",
        oben: "dialog-pfeil-links",
        unten: null,
        enter: () => bildschirmLinksKnopf.click(),
    },

    "bildschirm-pfeil-rechts": {
        element: bildschirmRechtsKnopf,
        links: "bildschirm-pfeil-links",
        rechts: "auswahl-pfeil-links",
        oben: "abgeben-button",
        unten: "hilfe-button",
        enter: () => bildschirmRechtsKnopf.click(),
    },

    //Dialogpfeile
    "dialog-pfeil-links": {
        element: dialogLinksKnopf,
        links: null,
        rechts: "dialog-pfeil-rechts",
        oben: null,
        unten: "abgeben-button",
        enter: () => dialogLinksKnopf.click(),
    },

    "dialog-pfeil-rechts": {
        element: dialogRechtsKnopf,
        links: "dialog-pfeil-links",
        rechts: null,
        oben: null,
        unten: "abgeben-button", //später: makier/merkbutton
        enter: () => dialogRechtsKnopf.click(),
    },

    //Abgeben
    "abgeben-button": {
        element: abgebenKnopf,
        links: null,
        rechts: null,
        oben: "dialog-pfeil-rechts",
        unten: "bildschirm-pfeil-rechts",
        enter: () => abgebenKnopf.click(),
    },

    //Hilfe/Einstellung
    "hilfe-button": {
        element: document.getElementById("hilfe"),
        links: null,
        rechts: null,
        oben: "bildschirm-pfeil-rechts",
        unten: "einstellung-button",
        enter: () => document.getElementById("hilfe").click(),
    },

    "einstellung-button": {
        element: document.getElementById("einstellung"),
        links: null,
        rechts: null,
        oben: "hilfe-button",
        unten: null,
        enter: () => document.getElementById("einstellung").click(),
    },

    /* Muss ich ncoh hinzufügen, wenn ich das zeitlich schaffe

    "undo-button": {
        element: undoKnopf,
        links: null,
        rechts: null,
        oben: null,
        unten: null,
        enter: () => undoAktion(),
    },

    "redo-button": {
        element: redoKnopf,
        links: null,
        rechts: null,
        oben: null,
        unten: null,
        enter: () => redoAktion(),
    },

    "haus-reset-button": {
        element: hausResetKnopf,
        links: null,
        rechts: null,
        oben: null,
        unten: null,
        enter: () => hausResetAktion(),
    },

    "raetsel-markieren-button": {
        element: raetselMarkierenKnopf,
        links: null,
        rechts: null,
        oben: null,
        unten: null,
        enter: () => raetselMarkierenAktion(),
    },
    */
};


// ---- HILFSFUNKTIONEN ----

// ermittelt, zu welcher Kategorie (Umriss, Fenster, etc) ein Form-Index gehört
function ermittleKategorie(formIndex) {
    const bereich = FORM_BEREICHE.find(
        (b) => formIndex >= b.min && formIndex <= b.max
    );
    return bereich ? bereich.kategorie : null;
}

//schaut welche Taste gerade ausgewählt ist
let aktuellerFokus = "form-auswahl-1"; // bleibt so

function setzeFokus(neuerKey) {
    const alter = layoutTasten[aktuellerFokus];
    if (alter && alter.element) {
        alter.element.classList.remove("tastatur-fokus");
    }

    const neu = layoutTasten[neuerKey];
    if (!neu || !neu.element) {
        console.warn("Fokus-Ziel nicht gefunden:", neuerKey);
        return;
    }

    neu.element.classList.add("tastatur-fokus");
    aktuellerFokus = neuerKey;
}


if (layoutTasten[aktuellerFokus]) {
    setzeFokus(aktuellerFokus);
}


//schaut ob eine Form schon in einem anderen Haus benutzt wird
function formSchonVergeben(formIndex, kategorie) {
    for (let i = 0; i < hausZustaende.length; i++) {
        if (i === aktuellesHaus) continue;

        const state = hausZustaende[i].formAuswahlProKategorie;
        if (state[kategorie] === formIndex) {
            return true;
        }
    }
    return false;
}


//schaut ob eine Farbe schon in einem anderen Haus benutzt wird
function farbeSchonVergeben(kategorie, farbKonstante) {
    if (farbKonstante === AUSWAHL_LEER) return false;

    for (let i = 0; i < hausZustaende.length; i++) {
        if (i === aktuellesHaus) continue;

        const state = hausZustaende[i].farbAuswahlProKategorie;
        if (state[kategorie] === farbKonstante) {
            return true;
        }
    }
    return false;
}

function findeFormBesitzer(formIndex, kategorie) {
    for (let i = 0; i < hausZustaende.length; i++) {
        if (i === aktuellesHaus) continue; // aktuelles Haus ignorieren

        const state = hausZustaende[i].formAuswahlProKategorie;
        if (state[kategorie] === formIndex) {
            return i; // Haus-Index zurückgeben
        }
    }
    return null;
}

function findeFarbBesitzer(kategorie, farbKonstante) {
    if (farbKonstante === AUSWAHL_LEER) return null;

    for (let i = 0; i < hausZustaende.length; i++) {
        if (i === aktuellesHaus) continue;

        const state = hausZustaende[i].farbAuswahlProKategorie;
        if (state[kategorie] === farbKonstante) {
            return i;
        }
    }
    return null;
}

// Schaut auf welcher Seite man ist
function ermittleSeitenKategorie() {
    const formIndexAufSeite = aktuelleAuswahlFormen;
    return ermittleKategorie(formIndexAufSeite);
}

// Ermittelt das passende Haus-Bild
function ermittleHausBild(formIndex, farbIndex) {
    const kategorie = ermittleKategorie(formIndex);

    // Sonderfall: Garten (kein Farb-Index)
    if (kategorie === "garten") {
        const offset = formIndex - AUSWAHL_GARTEN_BLUMEN;
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

// Doppelklick
let letzterFormKlick = { index: null, zeit: 0 };
let letzterFarbKlick = { key: null, zeit: 0 };

function istDoppelklick(typ, key) {
    const jetzt = Date.now();
    const MAX_ABSTAND = 400;

    if (typ === "form") {
        if (letzterFormKlick.index === key && (jetzt - letzterFormKlick.zeit) < MAX_ABSTAND) {
            return true;
        }
        letzterFormKlick = { index: key, zeit: jetzt };
        return false;
    }

    if (typ === "farbe") {
        if (letzterFarbKlick.key === key && (jetzt - letzterFarbKlick.zeit) < MAX_ABSTAND) {
            return true;
        }
        letzterFarbKlick = { key, zeit: jetzt };
        return false;
    }

    return false;
}

function mapKeyToAktion(key) {
    switch (key) {
        //Oben
        case "ArrowUp":
        case "w":
        case "W":
            return "up";

        //Unten
        case "ArrowDown":
        case "s":
        case "S":
            return "down";

        //Links
        case "ArrowLeft":
        case "a":
        case "A":
            return "left";

        //Rechts
        case "ArrowRight":
        case "d":
        case "D":
            return "right";

        //Enter
        case "Enter":
        case " ":
        case "e":
        case "E":
            return "enter";

        default:
            return null;
    }
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

        const feld = auswahlfeldFormen[i];

        feld.classList.remove(
            "bereits-vergeben",
            "vergeben-haus-0",
            "vergeben-haus-1",
            "vergeben-haus-2",
            "vergeben-haus-3"
        );

        if (kategorie) {
            const besitzer = findeFormBesitzer(globalIndex, kategorie);
            if (besitzer !== null) {
                feld.classList.add("bereits-vergeben", `vergeben-haus-${besitzer}`);
            }
        }
    });
}

function zeigePassendeFarben() {
    const farbSeitenIndex = Math.floor(aktuelleAuswahlFormen / 4);
    const farben = farbGruppen[farbSeitenIndex];
    const kategorie = ermittleSeitenKategorie();

    farbenAuswahlBilder.forEach((img, i) => {
        const farbKonstante = farben[i];
        img.src = auswahlFarbenBilder[farbKonstante];

        const feld = auswahlfeldFarben[i];
        
        feld.classList.remove(
            "bereits-vergeben",
            "vergeben-haus-0",
            "vergeben-haus-1",
            "vergeben-haus-2",
            "vergeben-haus-3"
        );

        if (kategorie) {
            const besitzer = findeFarbBesitzer(kategorie, farbKonstante);
            if (besitzer !== null) {
                feld.classList.add("bereits-vergeben", `vergeben-haus-${besitzer}`);
            }
        }
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

//Gans einsetzen
function aktualisiereGans() {
    const i = aktuellesHaus % gaenseBilder.length;
    gansIcon.src = gaenseBilder[i];

    gansIcon.style.bottom = gansOffsets[i].bottom + "%";
    gansIcon.style.left   = gansOffsets[i].left + "%";
    gansIcon.style.width  = gansOffsets[i].width + "%"; 
}

function aktualisiereHausRahmen() {
    const rahmenElement = document.getElementById("platzierbereich");
    if (!rahmenElement) return;

    rahmenKlassen.forEach((klasse) => {
        rahmenElement.classList.remove(klasse);
    });

    const neueKlasse = `haus-${aktuellesHaus}-rahmen`;
    rahmenElement.classList.add(neueKlasse);

    const farbe = rahmenFarben[aktuellesHaus] || "#ff0000";
    document.documentElement.style.setProperty("--vergeben-farbe", farbe);
}

auswahlRechtsKnopf.addEventListener("click", naechsteAuswahlSeite );
auswahlLinksKnopf.addEventListener("click", vorherigeAuswahlSeite );

// Markiert
document.querySelectorAll(".auswahl-markiert").forEach((img) => {
    img.src = "Bilder/Auswahl/Markiert.png";
});

zeichneHaus();
aktualisiereHausRahmen();
aktualisiereDialog();

// Auswahlbereich: Auf Form klicken
auswahlfeldFormen.forEach((feld, i) => {
    feld.addEventListener("click", () => {
        const formIndex = (aktuelleAuswahlFormen + i) % auswahlFormenBilder.length;
        const kategorie = ermittleKategorie(formIndex);
        if (!kategorie) return;

        const umrissGewaehlt = formAuswahlProKategorie.umriss !== null;
        const istUmriss = (kategorie === "umriss");

        if (!istUmriss && kategorie !== "garten" && !umrissGewaehlt) {
            console.log("Erst einen Umriss wählen, bevor Fenster/Tür/Fassade/Garten gesetzt werden.");
            return;
        }

        const istVergeben = formSchonVergeben(formIndex, kategorie);

        if (istVergeben) {
            const doppelt = istDoppelklick("form", formIndex);
            if (!doppelt) {
                console.log("Diese Form ist schon in einem anderen Haus vergeben. Doppelklick zum Übernehmen.");
                return;
            }

            const besitzerIndex = findeFormBesitzer(formIndex, kategorie);
            if (besitzerIndex !== null) {
                const besitzerState = hausZustaende[besitzerIndex];
                besitzerState.formAuswahlProKategorie[kategorie] = null;
                besitzerState.farbAuswahlProKategorie[kategorie] = AUSWAHL_LEER;
                besitzerState.farbKnopfProKategorie[kategorie] = null;

                if (kategorie === "umriss") {
                    const cats = ["umriss", "fenster", "tuer", "fassade", "garten"];
                    cats.forEach(cat => {
                        besitzerState.formAuswahlProKategorie[cat] = null;
                        besitzerState.farbAuswahlProKategorie[cat] = AUSWAHL_LEER;
                        besitzerState.farbKnopfProKategorie[cat] = null;
                    });

                    alert(`${gansNamen[besitzerIndex]} hat den Umriss verloren – alle Teile dieses Hauses wurden entfernt!`);
                }
            }
        } else {
            istDoppelklick("form", null);
        }

        formAuswahlProKategorie[kategorie] = formIndex;

        zeichneHaus();

        console.log("Form gewählt:", formIndex, "Kategorie:", kategorie, " (vergeben:", istVergeben, ")");
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

        const istVergeben = farbeSchonVergeben(seitenKategorie, farbKonstante);

        const klickKey = `${seitenKategorie}-${farbKonstante}`;

        if (istVergeben) {
            const doppelt = istDoppelklick("farbe", klickKey);
            if (!doppelt) {
                console.log("Diese Farbe ist in dieser Kategorie schon in einem anderen Haus vergeben. Doppelklick zum Übernehmen.");
                return;
            }

            const besitzerIndex = findeFarbBesitzer(seitenKategorie, farbKonstante);
            if (besitzerIndex !== null) {
                const besitzerState = hausZustaende[besitzerIndex];
                besitzerState.farbAuswahlProKategorie[seitenKategorie] = AUSWAHL_LEER;
                besitzerState.farbKnopfProKategorie[seitenKategorie] = null;
                console.log(`Farbe von ${gansNamen[besitzerIndex]} in Kategorie ${seitenKategorie} gestohlen.`);
            }
        } else {
            istDoppelklick("farbe", null);
        }

        farbAuswahlProKategorie[seitenKategorie] = farbKonstante;
        farbKnopfProKategorie[seitenKategorie] = i;

        zeichneHaus();

        console.log("Farbe gewählt:", farbKonstante, "Kategorie:", seitenKategorie, " (vergeben:", istVergeben, ")");
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
    aktualisiereHausRahmen();
    aktualisiereDialog();
}

bildschirmRechtsKnopf.addEventListener("click", () => wechsleHaus(1));
bildschirmLinksKnopf.addEventListener("click", () => wechsleHaus(-1));


// ---- DIALOG ----
function aktualisiereDialog() {
    const hausIndex = aktuellesHaus;
    const seiten = raetselTexte[hausIndex];

    if (!seiten || seiten.length === 0) {
        dialogGansName.textContent = "";
        dialogInhalt.textContent = "";
        stopTypewriter();
        return;
    }

    let index = dialogSeitenIndex[hausIndex];
    if (index < 0) index = 0;
    if (index >= seiten.length) index = seiten.length - 1;
    dialogSeitenIndex[hausIndex] = index;

    dialogGansName.textContent = `${gansNamen[hausIndex]} - ${index + 1}/${seiten.length}`;

    const text = seiten[index];
    starteTypewriter(text);

    
    if (index === 0) {
        dialogLinksKnopf.style.visibility  = "hidden";
        dialogRechtsKnopf.style.visibility = "visible";
    } else if (index === seiten.length - 1) {
        dialogLinksKnopf.style.visibility  = "visible";
        dialogRechtsKnopf.style.visibility = "hidden";
    } else {
        dialogLinksKnopf.style.visibility  = "visible";
        dialogRechtsKnopf.style.visibility = "visible";
    }
}

dialogLinksKnopf.addEventListener("click", () => {
    dialogSeitenIndex[aktuellesHaus]--;
    aktualisiereDialog();
});

dialogRechtsKnopf.addEventListener("click", () => {
    dialogSeitenIndex[aktuellesHaus]++;
    aktualisiereDialog();
});

// Schreibmaschinen-Effekt
function stopTypewriter() {
    if (dialogTimer !== null) {
        clearInterval(dialogTimer);
        dialogTimer = null;
    }
}

function starteTypewriter(text) {
    stopTypewriter();
    aktuellerDialogText = text;
    aktuellerDialogIndex = 0;
    dialogInhalt.textContent = "";

    dialogTimer = setInterval(() => {
        if (aktuellerDialogIndex >= aktuellerDialogText.length) {
            stopTypewriter();
            return;
        }

        const char = aktuellerDialogText.charAt(aktuellerDialogIndex);
        dialogInhalt.textContent += char;
        aktuellerDialogIndex++;

        dialogInhalt.scrollTop = dialogInhalt.scrollHeight;

        // Sound einfügen
        /*if (char !== " " && char !== "\n") {
            playTypeSound();
        }*/
    }, 
    25);
}

// --- PRÜFUNG DER LÖSUNG ---
function pruefeLoesung() {
    const kategorien = ["umriss", "fenster", "tuer", "fassade", "garten"];

    let gesamtPunkte = 0;
    let maxPunkte = 0;

    for (let hausIndex = 0; hausIndex < hausZustaende.length; hausIndex++) {
        const aktuellesHausState = hausZustaende[hausIndex];
        const zielHausState      = loesungZustaende[hausIndex];

        for (const kat of kategorien) {
            maxPunkte += 2;
            const aktuelleForm = aktuellesHausState.formAuswahlProKategorie[kat];
            const aktuelleFarbe = aktuellesHausState.farbAuswahlProKategorie[kat];

            const zielForm = zielHausState.formAuswahlProKategorie[kat];
            const zielFarbe = zielHausState.farbAuswahlProKategorie[kat];

            if (aktuelleForm === zielForm) {
                gesamtPunkte++;
            }
            if (aktuelleFarbe === zielFarbe) {
                gesamtPunkte++;
            }
        }
    }

    const prozent = Math.round((gesamtPunkte / maxPunkte) * 100);

    // Einfaches Feedback – später durch coolen Screen ersetzen
    if (prozent === 100) {
        alert("Perfekt! 100% - du hast alle Häuser genau richtig rekonstruiert!");
    } else if (prozent >= 70) {
        alert(`Nice! ${prozent}% - ziemlich gut, aber noch nicht alles korrekt.`);
    } else if (prozent >= 40) {
        alert(`Du hast ${prozent}% - einige Hinweise hast du gelöst, der Rest ist noch Chaos.`);
    } else {
        alert(`Nur ${prozent}%... die Gänse frieren noch. Versuch's nochmal!`);
    }
}


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
    const key = event.key;
    const overlay = eingabeZuAnzeige[key];
    if (overlay) overlay.style.display = "block";

    const aktion = mapKeyToAktion(key);
    if (!aktion) return;

    event.preventDefault();

    const knoten = layoutTasten[aktuellerFokus];
    if (!knoten) {
        console.warn("Kein Layout-Knoten für Fokus:", aktuellerFokus);
        return;
    }

    if (aktion === "enter") {
        if (typeof knoten.enter === "function") {
            knoten.enter();
        } else if (knoten.element) {
            knoten.element.click();
        }
        return;
    }

    let zielKey = null;
    if (aktion === "left")  zielKey = knoten.links;
    if (aktion === "right") zielKey = knoten.rechts;
    if (aktion === "up")    zielKey = knoten.oben;
    if (aktion === "down")  zielKey = knoten.unten;

    if (zielKey && layoutTasten[zielKey]) {
        setzeFokus(zielKey);
    }
});

document.addEventListener("keyup", (event) => {
    const key = event.key;
    const overlay = eingabeZuAnzeige[key];
    if (overlay) overlay.style.display = "none";
});

abgebenKnopf.addEventListener("click", pruefeLoesung);