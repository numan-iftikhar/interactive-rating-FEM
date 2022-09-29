// get cards to hide and show on submit click
const ratingCard = document.querySelector(".ratingCard");
const thankYouCard = document.querySelector(".thankYouCard");
const submitBtn = document.querySelector(".submitBtn");
const inputs = document.getElementsByTagName("input");
const ratingSpan = document.querySelector(".selectedRating");

submitBtn.addEventListener("click", () => {
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.checked) ratingSpan.innerHTML = element.value;
  }
  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
});