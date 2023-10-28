const body = document.querySelector("body");

for (let i = 0; i < 16; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  document.body.insertAdjacentElement("afterbegin", box);
}

const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggerPoint = window.innerHeight - 100;

  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;

    if (top < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

checkBoxes();
window.addEventListener("scroll", checkBoxes);
