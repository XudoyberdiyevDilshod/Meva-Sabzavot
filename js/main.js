let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elMeva1 = document.querySelector(".meva1");
let elMeva2 = document.querySelector(".meva2");
let elMeva3 = document.querySelector(".meva3");
let elSabzavot1 = document.querySelector(".sabzavot1");
let elSabzavot2 = document.querySelector(".sabzavot2");
let elSabzavot3 = document.querySelector(".sabzavot3");
let elBtn = document.querySelector(".js-button");
let elFormBtn = document.querySelector(".btn");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let elInputVal = elInput.value;

  if (elInputVal.toLowerCase() === "olma") {
    elMeva1.textContent = elInputVal;
  } else if (elInputVal.toLowerCase() === "anor") {
    elMeva2.textContent = elInputVal;
  } else if (elInputVal.toLowerCase() === "gilos") {
    elMeva3.textContent = elInputVal;
  } else if (elInputVal.toLowerCase() === "kartoshka") {
    elSabzavot1.textContent = elInputVal;
  } else if (elInputVal.toLowerCase() === "piyoz") {
    elSabzavot2.textContent = elInputVal;
  } else if (elInputVal.toLowerCase() === "sabzi") {
    elSabzavot3.textContent = elInputVal;
  }

  elInput.value = "";
});

elBtn.addEventListener("click", function () {
  elForm.classList.toggle("overlay-show");
});

elFormBtn.addEventListener("click", function () {
   elForm.classList.remove("overlay-show");
 });