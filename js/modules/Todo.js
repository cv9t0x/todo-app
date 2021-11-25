class Todo {
	constructor(title, priority) {
		this.title = title;
		this.priority = priority;
		this.todo = `
			<div class="todo">
								<div class="box">
									<input class="chx todo__chx todo__chx--done box__item" type="checkbox" />
									<img
										class="todo__priority box__item"
										src="./assets/icons/priority-icon.png"
									/>
									<span class="todo__title box__item"></span>
								</div>
								<div class="box">
									<button class="btn todo__btn todo__btn--edit box__item">
										<img src="./assets/icons/edit-icon.png" />
									</button>
									<button class="btn todo__btn todo__btn--delete box__item">
										<img src="./assets/icons/delete-icon.png" />
									</button>
								</div>
							</div>
		`;
		this.todoElem = null;
		this.todoElemTitle = null;
		this.todoElemPriority = null;
	}

	create(container) {
		this.todoElem = document.createElement("li");
		this.todoElem.classList.add("list__item");
		this.todoElem.innerHTML = this.todo;

		this.todoElemTitle = this.todoElem.querySelector(".todo__title");
		this.todoElemTitle.innerHTML = this.title;

		if (this.priority) {
			this.todoElemPriority = this.todoElem.querySelector(".todo__priority");
			this.todoElemPriority.classList.add("display");
		}

		const deleteBtn = this.todoElem.querySelector(".todo__btn--delete");
		deleteBtn.addEventListener("click", () => {
			this.delete();
		});

		const editBtn = this.todoElem.querySelector(".todo__btn--edit");
		editBtn.addEventListener("click", () => {
			this.edit();
		});

		const doneChx = this.todoElem.querySelector(".todo__chx--done");
		doneChx.addEventListener("change", () => {
			this.setIsDone(doneChx.checked);
		});

		container.prepend(this.todoElem);
	}

	setIsDone(isDone) {
		isDone
			? this.todoElem.querySelector(".todo").classList.add("done")
			: this.todoElem.querySelector(".todo").classList.remove("done");
	}

	edit(newTitle, newPriority) {}

	//edit() {
	//	const todoForm = document.querySelector(".todo-form");
	//	const saveBtn = document.querySelector(".todo-form__btn--save");
	//	const input = todoForm.querySelector(".todo-form__input");
	//	const chx = todoForm.querySelector(".todo-form__chx--priority");

	//	input.value = this.title;
	//	chx.checked = this.priority;

	//	saveBtn.addEventListener("click", () => {
	//		this.todoElemTitle = input.value;
	//		this.todoElemPriority = chx.checked;
	//	});

	//	todoForm.classList.add("visible");
	//}

	delete() {
		if (this.todoElem) this.todoElem.remove();
	}
}

export default Todo;
