let form;
let taskListContainer;
let taskList;
let editableTask = null;

document.addEventListener("DOMContentLoaded", () => {
	form = document.forms.todoForm;
	taskListContainer = document.querySelector(".todo-list");
	taskList = taskListContainer.querySelector(".task-list");

	template = taskList.firstElementChild.cloneNode(true);
	taskList.firstElementChild.remove();
});

const getTodoDone = (chx) => {
	const todo = chx.closest(".task");
	const editBtn = todo.querySelector(".task__btn--edit");

	editBtn.setAttribute("disabled", "true");
	todo.classList.toggle("done");
};

const deleteTodo = (btn) => {
	const todo = btn.closest(".task");

	todo.remove();
};

const editTodo = (btn) => {
	const todo = btn.closest(".task");

	form.classList.add("visible");
	form.elements.todoTitle.value = todo.querySelector(".task__title").innerText;
	form.elements.highPriority.checked = todo
		.querySelector(".task__high-priority")
		.classList.contains("display");

	editableTask = todo;
};

const openForm = (btn) => {
	form.classList.add("visible");
};

const applySave = (btn) => {
	if (form.elements.todoTitle.value === "") {
		alert("Введите описание для задания");
		return;
	}

	const currentElem = editableTask ? editableTask : template.cloneNode(true);

	currentElem.querySelector(".task__title").innerText =
		form.elements.todoTitle.value;

	if (form.elements.highPriority.checked) {
		currentElem.querySelector(".task__high-priority").classList.add("display");
	} else {
		currentElem
			.querySelector(".task__high-priority")
			.classList.remove("display");
	}

	if (!editableTask) taskList.append(currentElem);

	cleanForm();
};

const cancelSave = (btn) => {
	cleanForm();
};

const cleanForm = () => {
	form.elements.todoTitle.value = "";
	form.elements.highPriority.checked = false;
	form.classList.remove("visible");
	editableTask = null;
};
