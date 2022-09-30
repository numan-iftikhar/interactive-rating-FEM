const ratingCard = document.querySelector(".ratingCard");
const thankYouCard = document.querySelector(".thankYouCard");
const submitBtn = document.querySelector(".submitBtn");
const ratingBtns = document.querySelectorAll(".radio-btn");
const ratingSpan = document.querySelector(".selectedRating");

// dynamically update selected rating
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingSpan.innerHTML = btn.innerHTML;
  });
});

// change page on submit click
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //validating rating selection
  if (ratingSpan.innerHTML > 0) {
    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
  } else {
    alert("Please! select some rating.");
  }
});
