const circle = document.querySelector(".circle");
const taskForm = document.querySelector(".task-form");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("DOMContentLoaded", () => {
  formOpen();
  formClose();
});

function formOpen() {
  circle.addEventListener("click", () => {
    // console.log("create pop up");

    taskForm.classList.add("active");
  });
}

function formClose() {
  closeBtn.addEventListener("click", () => {
    taskForm.classList.remove("active");
  });
}
