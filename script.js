// get cards to hide and show on submit click
const ratingCard = document.querySelector(".ratingCard")
const thankYouCard = document.querySelector(".thankYouCard")
const submitBtn = document.querySelector(".submitBtn")


submitBtn.addEventListener('click', ()=>{
    ratingCard.classList.add('hidden')
    thankYouCard.classList.remove('hidden')
})