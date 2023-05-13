const tabs = document.querySelectorAll(".tabs__item");
const contents = document.querySelectorAll(".tabs__block");

const showTabContent = (i = 0) => {
  contents.forEach((content) => {
    content[i].classList.add("tabs__active");
  });
};

const hideTadContent = () => {
  contents.forEach((content) => {
    content.classList.remove("tabs__active");
  });
};
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showTabContent();
    hideTadContent();
  });
});
