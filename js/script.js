const accordions = document.querySelectorAll(".accordion");
const contents = document.querySelectorAll(".content");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const contents = accordion.nextElementSibling;
    if (contents.style.maxHeight) {
      document
        .querySelectorAll(".content")
        .forEach((content) => (content.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".content")
        .forEach((content) => (content.style.maxHeight = null));
      contents.style.maxHeight = contents.scrollHeight + "px";
    }
  });
});
