//var clicks = 0;

//function counter() {
//  clicks += 1;
//  document.getElementById("clicks").innerHTML = clicks;
//};

document.querySelector("button").addEventListener("click", bClicked);
let counter = 0;

function bClicked(){ 
    counter = counter += 1;
    console.log("Button wurde " + counter + "x geklicket!");

}