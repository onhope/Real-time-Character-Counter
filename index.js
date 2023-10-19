const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const renamingCounterEl = document.getElementById("renaming-counter");

textAreaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterEl.innerText = textAreaEl.value.length;
  renamingCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}
