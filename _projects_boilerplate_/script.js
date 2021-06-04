const panels = document.querySelectorAll(".panel");

// ?Loop through the panels
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
