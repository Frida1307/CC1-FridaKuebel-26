let displayTimeout;

function showSoundName(name) {
  const display = document.getElementById("display");
  if (!display) return;

  display.textContent = name;
  display.style.opacity = "1";

  clearTimeout(displayTimeout);

  displayTimeout = setTimeout(() => {
    display.style.opacity = "0";
  }, 400);
}

function meineFunktion1() {
  console.log("Taste 1 wurde gedrückt!");
  new Audio('Samples/ah.mp3').play();
  showSoundName("AH");
}

function meineFunktion2() {
  console.log("Taste 2 wurde gedrückt!");
  new Audio('Samples/blop.mp3').play();
  showSoundName("BLOP");
}

function meineFunktion3() {
  console.log("Taste 3 wurde gedrückt!");
  new Audio('Samples/boh.mp3').play();
  showSoundName("BOH");
}

function meineFunktion4() {
  console.log("Taste 4 wurde gedrückt!");
  new Audio('Samples/boom-ba.mp3').play();
  showSoundName("BOOM-BA");
}

function meineFunktion5() {
  console.log("Taste 5 wurde gedrückt!");
  new Audio('Samples/brr.mp3').play();
  showSoundName("BRR");
}

function meineFunktion6() {
  console.log("Taste 6 wurde gedrückt!");
  new Audio('Samples/bump.mp3').play();
  showSoundName("BUMP");
}

function meineFunktion7() {
  console.log("Taste 7 wurde gedrückt!");
  new Audio('Samples/driller.mp3').play();
  showSoundName("DRILLER");
}

function meineFunktion8() {
  console.log("Taste 8 wurde gedrückt!");
  new Audio('Samples/glockenspiel.mp3').play();
  showSoundName("GLOCKENSPIEL");
}

function meineFunktion9() {
  console.log("Taste 9 wurde gedrückt!");
  new Audio('Samples/klapp.mp3').play();
  showSoundName("KLAPP");
}

function meineFunktionW() {
  console.log("Taste W wurde gedrückt!");
  new Audio('Samples/swag.mp3').play();
  showSoundName("SWAG");
}

function meineFunktionA() {
  console.log("Taste A wurde gedrückt!");
  new Audio('Samples/ukulele.mp3').play();
  showSoundName("UKULELE");
}

function meineFunktionS() {
  console.log("Taste S wurde gedrückt!");
  new Audio('Samples/upsi.mp3').play();
  showSoundName("UPSI");
}

function meineFunktionD() {
  console.log("Taste D wurde gedrückt!");
  new Audio('Samples/yeah.mp3').play();
  showSoundName("YEAH");
}

document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();

  if (key === "1") meineFunktion1();
  else if (key === "2") meineFunktion2();
  else if (key === "3") meineFunktion3();
  else if (key === "4") meineFunktion4();
  else if (key === "5") meineFunktion5();
  else if (key === "6") meineFunktion6();
  else if (key === "7") meineFunktion7();
  else if (key === "8") meineFunktion8();
  else if (key === "9") meineFunktion9();
  else if (key === "w") meineFunktionW();
  else if (key === "a") meineFunktionA();
  else if (key === "s") meineFunktionS();
  else if (key === "d") meineFunktionD();
});