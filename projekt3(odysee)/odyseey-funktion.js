
const INTRO_DURATION = 2500;
const MIDDLE_STAGE1_DURATION = 2500;
const MIDDLE_STAGE2_DURATION = 2000;

let introElements = [];
let middleStage1 = [];
let middleStage2 = [];
let outroElements = [];

let lastMiddleKey = null;

let introTimer = null;
let middleStage1Timer = null;
let middleStage2Timer = null;

let isPlayingIntro = false;
let isPlayingMiddle1 = false;
let isPlayingMiddle2 = false;

window.addEventListener("load", function () {

    window.addEventListener("keydown", function (e) {
        if (document.querySelector(".demoIntro")) {
            document.querySelector(".demoIntro").style.display = "none";
        }

        if (e.key === "i") {
            startIntroSequence();
        } else if (e.key === "m") {
            startMiddleSequence();
        } else if (e.key === "o") {
            showOutroDirect();
        }
    });

    introElements = Array.prototype.slice.call(
    document.querySelectorAll("div[id^=intro]")
    );

    middleStage1 = Array.prototype.slice.call(
        document.querySelectorAll('div[id^=middle][data-stage="1"]')
    );

    middleStage2 = Array.prototype.slice.call(
        document.querySelectorAll('div[id^=middle][data-stage="2"]')
    );

    outroElements = Array.prototype.slice.call(
    document.querySelectorAll("div[id^=outro]")
    );

    init();
});

function init() {
    [...introElements, ...middleStage1, ...middleStage2, ...outroElements].forEach(el => {
        hideElement(el, true);
        el.style.transition = "1s all";
    });
}

function resetAll() {
    clearTimeout(introTimer);
    clearTimeout(middleStage1Timer);
    clearTimeout(middleStage2Timer);
    introTimer = middleStage1Timer = middleStage2Timer = null;

    isPlayingIntro = false;
    isPlayingMiddle1 = false;
    isPlayingMiddle2 = false;

    [...introElements, ...middleStage1, ...middleStage2, ...outroElements].forEach(el => {
        hideElement(el);
    });
}


function startIntroSequence() {
    resetAll();

    if (introElements.length === 0) return;
    isPlayingIntro = true;

    let index = 0;

    function showNextIntro() {
        if (!isPlayingIntro) return;

        if (index > 0) {
            hideElement(introElements[index - 1]);
        }

        if (index < introElements.length) {
            let el = introElements[index];
            showElement(el);
            index++;

            introTimer = setTimeout(showNextIntro, randomDuration(INTRO_DURATION));
        } else {
            isPlayingIntro = false;
            startMiddleSequence();
        }
    }

    showNextIntro();
}


function startMiddleSequence() {
    resetAll();

    if (middleStage1.length === 0) return;

    let shuffledStage1 = shuffleArray(middleStage1);

    isPlayingMiddle1 = true;
    let index = 0;

    function showNextMiddle1() {
        if (!isPlayingMiddle1) return;

        if (index > 0) {
            hideElement(shuffledStage1[index - 1]);
        }

        if (index < shuffledStage1.length) {
            let el = shuffledStage1[index];
            showElement(el);
            lastMiddleKey = el.getAttribute("data-key") || null;

            index++;

            middleStage1Timer = setTimeout(showNextMiddle1, randomDuration(MIDDLE_STAGE1_DURATION));
        } else {
            isPlayingMiddle1 = false;
            playSecondStageAndOutro();
        }
    }

    showNextMiddle1();
}


function showOutroDirect() {
    resetAll();

    if (outroElements.length === 0) return;
    let current = outroElements[0];
    showElement(current);
}


function playSecondStageAndOutro() {
    if (!lastMiddleKey) {
        showOutroSequence();
        return;
    }

    let secondStageElems = middleStage2.filter(elem => {
        return elem.getAttribute("data-for") === lastMiddleKey;
    });

    if (secondStageElems.length === 0) {
        showOutroSequence();
        return;
    }

    isPlayingMiddle2 = true;
    let index = 0;

    function showNextSecondStage() {
        if (!isPlayingMiddle2) return;

        if (index > 0) {
            hideElement(secondStageElems[index - 1]);
        }

        if (index < secondStageElems.length) {
            let el = secondStageElems[index];
            showElement(el);
            index++;

            middleStage2Timer = setTimeout(showNextSecondStage, randomDuration(MIDDLE_STAGE2_DURATION));
        } else {
            isPlayingMiddle2 = false;
            showOutroSequence();
        }
    }

    showNextSecondStage();
}

function showOutroSequence() {
    middleStage2.forEach(el => hideElement(el));

    if (outroElements.length === 0) return;
    let outro = outroElements[0];
    showElement(outro);
}


function randomDuration(maxBase) {
    const min = 1000;
    const max = maxBase;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showElement(element) {
    if (!element) return;
    element.style.opacity = 1;
}

function hideElement(element, skipMediaReset = false) {
    if (!element) return;

    if (!skipMediaReset) {
        let video = element.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }

    element.style.opacity = 0;
}

function shuffleArray(elements) {
    let array = Array.prototype.slice.call(elements);
    array.sort(() => Math.random() - 0.5);
    return array;
}

let handleTouch12Pause = false;
function handleTouch12() {
    if (!handleTouch12Pause) {
        handleTouch12Pause = true;
        startIntroSequence();
        setTimeout(() => handleTouch12Pause = false, 200);
    }
}

let handleTouch27Pause = false;
function handleTouch27() {
    if (!handleTouch27Pause) {
        handleTouch27Pause = true;
        startMiddleSequence();
        setTimeout(() => handleTouch27Pause = false, 200);
    }
}

let handleTouch33Pause = false;
function handleTouch33() {
    if (!handleTouch33Pause) {
        handleTouch33Pause = true;
        showOutroDirect();
        setTimeout(() => handleTouch33Pause = false, 200);
    }
}