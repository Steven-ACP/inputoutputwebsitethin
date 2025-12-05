/** @format */
//
//let urName = document.getElementById("nameInput");
//
//let urAge = document.getElementById("ageInput");
//
//let locationDrop = document.getElementById("locationInput");
//
let submitButton = document.getElementById("submitBtn");
//
//let raDio = document.querySelectorAll('[type="radio"]');
//
//let dreamPet = document.querySelectorAll('[type="checkbox"]');
//
submitButton.addEventListener("click", button);

function button() {
  let inputName = document.getElementById("nameInput");
  let inputAge = document.getElementById("ageInput");
  let inputLocation = document.getElementById("locationInput");
  let inputPet = document.getElementById("petInput");
  let inputJob = document.getElementById("jobInput");
  // let inputRadio = document.getElementById('[type="radio"]');
  // let inputPet = document.getElementById('type="checkbox"]');
  let value = inputName.value;
  let ageValue = inputAge.value;
  let locationValue = inputLocation.value;
  let petValue = inputPet.value;
  let jobValue = inputJob.value;

  // let radioValue = inputRadio.value;
  /// let petValue = inputPet.value;
  document.getElementById("outPut").textContent =
    "Name:" +
    value +
    "Age:" +
    ageValue +
    "Where you live:" +
    locationValue +
    "Your pet:" +
    petValue +
    "Your Job:" +
    jobValue;
  //  "Your Job(s)" +
  // radioValue +
  // "Your Pet" +
  // petValue;
}
