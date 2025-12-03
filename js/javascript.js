/** @format */
//
let urName = document.getElementById("nameInput");
//
let urAge = document.getElementById("ageInput");
//
let locationDrop = document.getElementById("locationInput");
//
let submitButton = document.getElementById("submitBtn");
//
let raDio = document.querySelectorAll("input[type='radio']");
//

submitButton.addEventListener("click", button);

function button() {
  let inputName = document.getElementById("nameInput");
  let inputAge = document.getElementById("ageInput");
  let inputLocation = document.getElementById("locationInput");
  let value = inputName.value;
  let ageValue = inputAge.value;
  let locationValue = inputLocation.value;
  document.getElementById("outPut").textContent =
    "Your Name:" +
    value +
    "Your Age:" +
    ageValue +
    "Where you live:" +
    locationValue;
}
//function button() {
//  let inputName = document.getElementById("nameInput");
//  let inputAge = document.getElementById("ageInput");
//  let inputlocation = document.getElementById("locationInput");
//  let inputRadio = document.getElementById("input[type='radio']");
/////////////////////////
//  let value = inputName.value;
// let ageValue = inputAge.value;
// let locationValue = inputlocation.value;
// let radioValue = inputRadio.value;
//document.getElementById("outPut").textContent =
// "Your Name: " +
// value +
// "      Your Age: " +
// ageValue +
// "         Favorite location: " +
// locationValue +
// "Your favorite animal" +
// radioValue;
//}

const names = ["Dog", "Cat", "Fish"];

for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}
