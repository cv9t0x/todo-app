import Todo from "./Todo.js";

class TodoStore {
	constructor(elem) {
		this.container = elem;
	}

	addTodo(title, priority) {
		const todo = new Todo(title, priority);
		todo.create(this.container);
	}
}

export default TodoStore;
