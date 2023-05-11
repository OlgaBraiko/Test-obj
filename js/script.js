const openPopup = document.querySelector(".popup__open");
const closePopup = document.querySelector(".popup__close_btn");
const popup = document.querySelector(".popup");
const popupSubstrate = document.querySelector("[data-substrate]");

openPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("pop__up_active");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("pop__up_active");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.classList.remove("pop__up_active");
  } else {
    console.log("error");
  }
});
