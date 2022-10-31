"use strict";

// Get values and save in varables
const btnSubmit = document.getElementById("btnSubmit");

const valueOfMass = document.getElementById("mass");
const valueOfHeight = document.getElementById("height");

const output = document.getElementById("output");

btnSubmit.addEventListener("click", function () {
  let mass = valueOfMass.value;
  let height = valueOfHeight.value;

  if (mass === "" && height === "") {
    output.textContent = "Please put values";
  } else {
    let calculateBMI = mass / (height * height);

    output.textContent = "Your BMI is " + calculateBMI;
  }
});
