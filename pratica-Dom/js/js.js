const handleSubmit = function (e) {
  e.preventDefault();
  addTask();
  attachComplete();
  attachDelete();
};

const addTask = function () {
  let task = document.getElementById("task").value;
  let contenitore = document.getElementById("contenitore");
  let newP = document.createElement("p");
  let newDiv = document.createElement("div");
  newP.textContent = task;
  let cestino = document.createElement("button");
  cestino.innerText = "cancella";
  cestino.classList.add("cestino");
  newP.classList.add("newP");
  newDiv.classList.add("newDiv");
  contenitore.appendChild(newDiv);
  newDiv.appendChild(newP);
  newDiv.appendChild(cestino);
  newP.addEventListener("click", function (event) {
    event.currentTarget.classList.toggle("sbarrato");
  });
  cestino.addEventListener("click", function () {
    newDiv.remove();
  });
};

window.onload = function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
};
