// ---- VERLINKUNGEN AUS HTML ----
const startButton     = document.getElementById('start-button');
const video           = document.getElementById('startbildschirm-video');
const audio           = document.getElementById('startbildschirm-audio');

const menue           = document.getElementById('spiel-auswahl');
const titelBereich    = document.getElementById('titel-bereich');

const storyButton     = document.getElementById('story-btn');
const buildButton     = document.getElementById('build-btn');
const zurueckButton   = document.getElementById('zurueck');
const einstellungButton = document.getElementById('einstellung');

const settingsMenu    = document.getElementById('einstellungs-menue');
const settingsBack    = document.getElementById('settings-zurueck');

const lautstaerke     = document.getElementById('lautstaerke');
const tonStumm        = document.getElementById('ton-stumm');

const modiButton      = document.getElementById('modi-button');
const creditsButton   = document.getElementById('credits-button');
const creditsScreen   = document.getElementById('credits-screen');


// ---- VIDEO -----
video.addEventListener('loadedmetadata', () => {
    video.playbackRate = 0.7;
});


// ----- MENÜ-LOGIK -----
function menueAnzeigen() {
    document.body.classList.add('menu-aktiv');
    menue.classList.remove('hidden');
}

function menueVerstecken() {
    document.body.classList.remove('menu-aktiv');
    menue.classList.add('hidden');
}

function einstellungOeffnen() {
    menue.classList.add('hidden');
    settingsMenu.classList.remove('hidden');
}

function einstellungSchliessen() {
    settingsMenu.classList.add('hidden');
    menue.classList.remove('hidden');
}

// ----- NAVIGATION ------
function goToStory() {
    window.location.href = '../Spiel/GHIT-Spiel.html';
}

function goToBuild() {
    window.location.href = '../Spiel-Baumodus/GHIT-Baumodus.html';
}


// ----- BUTTON-EVENTS (MOUSE) -----
startButton.addEventListener('click', menueAnzeigen);

storyButton.addEventListener('click', goToStory);
buildButton.addEventListener('click', goToBuild);
zurueckButton.addEventListener('click', menueVerstecken);

einstellungButton.addEventListener('click', einstellungOeffnen);
settingsBack.addEventListener('click', einstellungSchliessen);

modiButton.addEventListener('click', () => {
    einstellungSchliessen();
});

creditsButton.addEventListener('click', () => {
    settingsScreen.classList.add('hidden');
    creditsScreen.classList.remove('hidden');
});


// ----- AUDIO-EINSTELLUNGEN -----
lautstaerke.value = audio.volume;

lautstaerke.addEventListener('input', () => {
    audio.volume = lautstaerke.value;
});

tonStumm.addEventListener('click', () => {
    audio.muted = !audio.muted;
    tonStumm.classList.toggle('stumm', audio.muted);
});


// ----- TASTATUR-STEUERUNG -----
const buttons = [storyButton, buildButton, einstellungButton, zurueckButton];
let fokusIndex = 0;

function focusButton(i) {
    fokusIndex = (i + buttons.length) % buttons.length;

    buttons.forEach(btn => btn.classList.remove('tastatur-fokus'));

    const btn = buttons[fokusIndex];
    btn.focus();
    btn.classList.add('tastatur-fokus');
}

window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    if (key === 'enter' || key === 'e') {
        if (menue.classList.contains('hidden')) {
            menueAnzeigen();
            focusButton(0);
            return;
        }

        const active = document.activeElement;

        if (active === storyButton) {
            goToStory();
        } else if (active === buildButton) {
            goToBuild();
        } else if (active === einstellungButton) {
            einstellungOeffnen();
        } else if (active === zurueckButton) {
            menueVerstecken();
        }

        return;
    }


    if (key === 'escape' || key === 'a') {
        if (!settingsMenu.classList.contains('hidden')) {
            einstellungSchliessen();
        } else {
            menueVerstecken();
        }
        return;
    }

    if (menue.classList.contains('hidden')) return;

    if (key === 'w' || key === 'arrowup') {
        focusButton(fokusIndex - 1);
    }

    if (key === 's' || key === 'arrowdown') {
        focusButton(fokusIndex + 1);
    }
});