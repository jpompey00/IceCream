"use strict";

//textboxes
const numberOfScoopsTextbox = document.getElementById("numberOfScoopsTextbox");

//buttons
const submitOrderButton = document.getElementById("submitOrderButton");

//radio buttons
const icecreamContainerCone = document.getElementById("icecreamContainerCone");
const icecreamContainerCup = document.getElementById("icecreamContainerCup");

//checkboxes
const sprinklesCheckbox = document.getElementById("sprinklesCheckbox");
const whippedCreamCheckbox = document.getElementById("whippedCreamCheckbox");
const hotFudgeCheckbox = document.getElementById("hotFudgeCheckbox");
const cherryCheckbox = document.getElementById("cherryCheckbox");

//output
const outputTax = document.getElementById("outputTax");
const outputTotal = document.getElementById("outputTotal");
const outputBasePrice = document.getElementById("outputBasePrice");

//divs
const toppingsDiv = document.getElementById("toppingsDiv");



window.onload = function () {
    toppingsDiv.style.display="none";
    submitOrderButton.onclick = onSubmitOrderButtonClicked;
    icecreamContainerCone.onchange = onIcecreamContainerConeChange;
    icecreamContainerCup.onchange = onRadioButtonChange;

}


function onSubmitOrderButtonClicked() {
    //one scoop 2.25 
    //additional scoop 1.25

    const ONE_SCOOP_PRICE = 2.25;
    const ADDITIONAL_SCOOP_PRICE = 1.25;
    const TAX_RATE = .07;
    let numberOfScoops = numberOfScoopsTextbox.value;

    let toppingsPrice = 0;
    let scoopPrice = 0;
    let tax = 0;
    let totalPrice = 0;

    if (sprinklesCheckbox.checked) {
        toppingsPrice += .50;
    }
    if (whippedCreamCheckbox.checked) {
        toppingsPrice += .25;
    }
    if (hotFudgeCheckbox.checked) {
        toppingsPrice += 1.25;
    }
    if (cherryCheckbox.checked) {
        toppingsPrice += 0.25;
    }

    scoopPrice = (ONE_SCOOP_PRICE) + ((numberOfScoops - 1) * ADDITIONAL_SCOOP_PRICE);
    tax = (scoopPrice + toppingsPrice) * TAX_RATE;
    totalPrice = scoopPrice + toppingsPrice + tax;


    outputBasePrice.innerHTML = (scoopPrice + toppingsPrice).toFixed(2);
    outputTax.innerHTML = tax.toFixed(2);
    outputTotal.innerHTML = totalPrice.toFixed(2);
}

//can these go into one fucntion?
function onRadioButtonChange() {
    if (icecreamContainerCup) {
        toppingsDiv.style.display = "block";
    } 
}

function onIcecreamContainerConeChange(){
    if(icecreamContainerCone){
        toppingsDiv.style.display = "none";
    }
}