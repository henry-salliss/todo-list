// Selecting the elements
const inputField = document.querySelector(".input");
const list = document.querySelector(".list");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const xBtn = document.getElementById("xBtn");
const doneBtn = document.getElementById("doneBtn");
const listItem = document.querySelector(".list-item");

// Submit button
const submit = function () {
  if (inputField.value != "") {
    // Make new HTML
    const html = `<li class='list-item'>
  ${inputField.value}
  <button class="btn delete" id="xBtn">X</button>
  <button class="btn done" id="doneBtn">Done</button>
  </li>`;
    list.insertAdjacentHTML("beforeend", html);

    inputField.value = "";
    inputField.focus();
  } else {
    alert("Please enter a task");
  }
};

submitBtn.addEventListener("click", submit);

// Enter key
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") submit();
});

// Clear list button
clearBtn.addEventListener("click", function () {
  $(list).empty();
  inputField.focus();
});

// X button

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
});

// Done button

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("done")) {
    e.target.parentElement.classList.add("complete");
  }
});
