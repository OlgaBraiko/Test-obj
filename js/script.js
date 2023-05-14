const tabs = document.querySelectorAll(".tabs__item");
const contents = document.querySelectorAll(".tabs__block");

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
const handleClick = (index) => {
  hideTabContent();
  showTabContent(index);
};

tabs.forEach((tab, index) => (tab.onclick = () => handleClick(index)));

const open = (target) => {
  tabs.forEach((tab, i) => {
    if (target == tab || target.parentNode == tab) {
      hideTabContent();
      showTabContent(i);
    }
  });
};

document.addEventListener("keypress", (e) => {
  const target = e.target;
  if (e.key === "Enter") {
    open(target);
  }
});
