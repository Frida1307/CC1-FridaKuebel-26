let lichtAn = false;
let aktuelleSzeneIndex = 0;
let brightnessFactor = 1.0;
let densityTimer = null;
let title = document.querySelector("h1");
let statusDisplay = document.getElementById("statusDisplay");

const szenen = [
    {
        name: "Normalmodus",
        hue: 50,
        sat: 100,
        light: 70
    },
    {
        name: "Lesemodus",
        hue: 35,
        sat: 90,
        light: 65
    },
    {
        name: "Yogamodus",
        hue: 280,
        sat: 40,
        light: 60
    },
    {
        name: "Partymodus",
        hue: 110,
        sat: 80,
        light: 55
    }
];


function helligkeitsText() {
	if (brightnessFactor < 0.7) return "dunkel";
	if (brightnessFactor < 1.2) return "mittel";
	return "hell";
}

function updateAnzeige() {
	if (!lichtAn) {
		document.body.style.background = "radial-gradient(circle at top, #2b2f77, #050816)";
		statusDisplay.textContent = "Licht aus";
		title.style.color = "#f5f5f5";
		statusDisplay.style.color = "#a5f3fc";
		return;
	}

	const aktuelleSzene = szenen[aktuelleSzeneIndex];
	let lightness = aktuelleSzene.light * brightnessFactor;

	if (lightness < 5) lightness = 5;
	if (lightness > 95) lightness = 95;

	const cssFarbe = `hsl(${aktuelleSzene.hue} ${aktuelleSzene.sat}% ${lightness}%)`;
	document.body.style.background = cssFarbe;

	if (lightness > 65) {
		title.style.color = "#111827";
		statusDisplay.style.color = "#1f2937";
	} else {
		title.style.color = "#f5f5f5";
		statusDisplay.style.color = "#e0f2fe";
	}

	statusDisplay.textContent = `${aktuelleSzene.name} – ${helligkeitsText()}`;
}


function lichtFunktion() {
	if (!lichtAn) {
		lichtAn = true;
		aktuelleSzeneIndex = 0;
		brightnessFactor = 1.0;
	} else {
		lichtAn = false;
	}
	updateAnzeige();
}

function modusFunktion() {
	if (!lichtAn) return;

	aktuelleSzeneIndex++;
	if (aktuelleSzeneIndex >= szenen.length) {
		aktuelleSzeneIndex = 0;
	}

	brightnessFactor = 1.0;
	updateAnzeige();
}

function adjustBrightnessStep(direction) {
	brightnessFactor += direction * 0.05;

	if (brightnessFactor < 0.3) brightnessFactor = 0.3;
	if (brightnessFactor > 1.8) brightnessFactor = 1.8;

	updateAnzeige();
}

function densityFunktion(event) {
	if (!lichtAn) return;

	let direction = 1;
	if (event.button === 2) {
		direction = -1;
	}

	adjustBrightnessStep(direction);
	if (densityTimer !== null) {
		clearInterval(densityTimer);
		densityTimer = null;
	}

	densityTimer = setInterval(function () {
		adjustBrightnessStep(direction);
	}, 80);
}

function stopDensity() {
	if (densityTimer !== null) {
		clearInterval(densityTimer);
		densityTimer = null;
	}
}

updateAnzeige();