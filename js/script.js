const accordions = document.querySelectorAll(".accordion");
const contents = document.querySelectorAll(".content");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const contents = accordion.nextElementSibling;
    contents.style.maxHeight = contents.style.maxHeight
      ? null
      : contents.scrollHeight + "px";
  });
});
a = condition ? 1 : 0;

condition ? (a = 1) : (a = 0);
