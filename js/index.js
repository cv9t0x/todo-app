import TodoStore from "./modules/TodoStore.js";

const todoListElem = document.querySelector(".todoList");
const todoListContainer = document.createElement("ul");
todoListContainer.classList.add("list");
todoListElem.append(todoListContainer);

const todoStore = new TodoStore(todoListContainer);
const todoForm = document.querySelector(".todo-form");
const saveBtn = document.querySelector(".todo-form__btn--save");
const cancelBtn = document.querySelector(".todo-form__btn--cancel");
const addBtn = document.querySelector(".todoList__btn--add");

addBtn.addEventListener("click", () => {
	todoForm.classList.add("visible");
});

saveBtn.addEventListener("click", () => {
	const input = document.querySelector(".todo-form__input");

	const inputValue = input.value;

	if (inputValue === "") {
		alert("Введите описание задачи");
		return;
	}

	const chx = document.querySelector(".todo-form__chx--priority");
	const priority = chx.checked;

	todoStore.addTodo(inputValue, priority);
	input.value = "";
	todoForm.classList.remove("visible");
});

cancelBtn.addEventListener("click", () => {
	const input = document.querySelector(".todo-form__input");
	const chx = document.querySelector(".todo-form__chx--priority");

	todoForm.classList.remove("visible");
	chx.checked = false;
	input.value = "";
});
