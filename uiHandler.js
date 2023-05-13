/**
 * Below are all render ui methods
 */

function clearListHandler(list) {
	while (list.firstChild) {
		list.firstChild.remove();
	}
}

function renderUIHandler() {
	const todoListElem = document.querySelector(".todo-list");
	clearListHandler(todoListElem);
	for (let todo of todoItems) {
		const listItem = createTodoItemElem(todo);
		todoListElem.appendChild(listItem);
	}
	renderCountsHandler();
}

function renderCountsHandler() {
	const completedElem = document.querySelector(".completed-count");
	const totalElem = document.querySelector(".total-count");
	const count = { completed: 0, total: 0 };
	for (let todo of todoItems) {
		count.total++;
		if (todo.completed) count.completed++;
	}
	completedElem.innerHTML = "Completed: " + count.completed;
	totalElem.innerHTML = "Total: " + count.total;
}
