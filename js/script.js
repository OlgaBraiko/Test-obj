const openPopup = document.querySelector(".open_pop_up");
const closePopup = document.querySelector(".pop_up_close");
const popup = document.querySelector(".pop_up");

openPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("pop_up_active");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("pop_up_active");
});
