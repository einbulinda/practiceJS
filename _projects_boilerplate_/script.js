const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const previous = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

previous.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    previous.disabled = true;
  } else if (currentActive == circles.length) {
    next.disabled = true;
  } else {
    previous.disabled = false;
    next.disabled = false;
  }
}

// Exercise covers on interacting with DOM elements,Node list, styling with JS, if-else statements, forEach loop.
