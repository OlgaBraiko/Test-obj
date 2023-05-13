const tabs = document.querySelectorAll(".tabs__item");
const contents = document.querySelectorAll(".tabs__block");

//tabs.forEach((tab) => {
//tab.addEventListener("click", () => {
//tab.classList.remove("tabs__active");
//contents.classList.remove("tabs__active");
//});
//});

const hideTabContent = () => {
  contents.forEach((content) => {
    content.style.display = "none";
  });
  tabs.forEach((tab) => {
    tab.classList.remove("tabs__active");
  });
};

const showTabContent = (i = 0) => {
  contents[i].style.display = "block";
  tabs[i].classList.add("tabs__active");
};
hideTabContent();
showTabContent();
