const todoBtn = document.querySelector("#todoBtn");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
let data = [];
todoBtn.addEventListener("click", function () {
  const value = todoInput.value;
  if (value == undefined || value == null || value == "") {
    return alert("Please,Do not enter an empty value!!");
  }
  todoInput.value = "";
  data.push(value);
  data.reverse();
  console.log(data);

  //? render items
  const newListcontent = data
    .map(function (item) {
      return `<li class="list-group-item">
      <input id="checkTodo" class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
      <label id="labelTodo" class="form-check-label" for="firstCheckbox">${item}</label>
    </li>`;
    })
    .join("");
  console.log(newListcontent);
  todoList.innerHTML = newListcontent;
  const checkTodo = document.querySelector("#checkTodo");
  checkTodo.addEventListener("click", function () {
    const labelTodo = document.querySelector("#labelTodo");
    labelTodo.classList.add("text");
  });
});
