const openPopup = document.querySelector(".open_pop");
const closePopup = document.querySelector(".popup_close");
const popup = document.querySelector(".popup");

openPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("pop_up_active");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("pop_up_active");
});
