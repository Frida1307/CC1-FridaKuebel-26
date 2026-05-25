
for (let index=0; index <= 350; index++){

    let kasten = document.createElement("quadrat");
    kasten.setAttribute("class", "kasten");

    let randomColor = 10 + Math.random() * 40;
    kasten.style.borderColor = "hsl(" + randomColor + "deg 100% 60%)";

    let randomGroesse = 0.8 + Math.random() * 0.3;
    kasten.style.transform = "scale(" + randomGroesse + ")";

    document.body.appendChild(kasten);
}