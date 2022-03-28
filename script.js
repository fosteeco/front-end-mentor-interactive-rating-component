console.log("test");
const ratings = document.querySelectorAll(".rating");
const finalScore = document.querySelector("#final-score");
const submitBtn = document.querySelector("#submit");
const thankYouCard = document.querySelector(".card.thank-you");
const mainCard = document.querySelector(".card");
const error = document.querySelector("#error-text");

let ratingNumber;

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const currentActive = document.querySelector(".rating.active");
    if (currentActive) {
      currentActive.classList.remove("active");
      rating.classList.add("active");
    } else {
      rating.classList.add("active");
    }
    ratingNumber = +e.target.innerHTML;
    console.log("ratingNumber :", ratingNumber);
  });
});

submitBtn.addEventListener("click", () => {
  if (ratingNumber) {
    finalScore.innerHTML = ratingNumber;
    mainCard.classList.add("hide");
    thankYouCard.classList.remove("hide");
  } else {
    error.innerHTML = `Please select a rating!`;
    error.classList.remove("hide");
    setTimeout(() => {
      error.classList.add("hide");
    }, 1000);
  }
});
