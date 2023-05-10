const openPopup = document.querySelector(".popup_open");
const closePopup = document.querySelector(".popup_close_btn");
const popup = document.querySelector(".popup");

openPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("pop_up_active");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("pop_up_active");
});

window.addEventListener("keydown", (e) => {
  if (e.target || keyCode.toLocaleLowerCase === "escape") {
    popup.classList.remove("pop_up_active");
  }
});
