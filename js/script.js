const accordions = document.querySelectorAll(".accordion");
const contents = document.querySelectorAll(".content");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const contents = accordion.nextElementSibling;

    if (contents.style.maxHeight) {
      contents.style.maxHeight = null;
    } else {
      contents.style.maxHeight = contents.scrollHeight + "px";
    }
  });
});
