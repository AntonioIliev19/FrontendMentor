const buttons = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("submitBtn");
const feedbackText = document.getElementById("ratingSet");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.classList.remove("clicked");
        });
        button.classList.add("clicked");
    });
});

submitBtn.addEventListener("click", () => {
    const activeButton = document.querySelector(".rating.clicked");
    if (activeButton) {
        const ratingValue = activeButton.getAttribute("data-value");
        ratingSet.textContent = `${ratingValue}`;
    }
});