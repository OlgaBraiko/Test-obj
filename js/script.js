const accordions = document.querySelectorAll(".accordion");
const contents = document.querySelectorAll(".content");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const contents = accordion.nextElementSibling;

    contents.style.maxHeight
      ? (contents.style.maxHeight = null)
      : (contents.style.maxHeight = contents.scrollHeight + "px");
  });
});
