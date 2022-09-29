const ratingCard = document.querySelector(".ratingCard");
const thankYouCard = document.querySelector(".thankYouCard");
const submitBtn = document.querySelector(".submitBtn");
const ratingBtns = document.querySelectorAll(".radio-btn");
const ratingSpan = document.querySelector(".selectedRating");

// change page on submit click
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
});


// dynamically update selected rating
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingSpan.innerHTML = btn.innerHTML;
  });
});
