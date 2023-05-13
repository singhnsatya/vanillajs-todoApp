let todoItems = [{ id: 123, value: "Mango", completed: false }];

function addTodoController() {
	const textInput = document.querySelector(".item-input");
	const text = textInput.value;
	let newTodoId = Math.floor(100000 + Math.random() * 900000);
	let newTodo = { value: text, id: newTodoId, completed: false };
	if (text !== "" && text !== null && text !== undefined)
		todoItems.push(newTodo);
	textInput.value = "";
	renderUIHandler();
}

function deleteTodoController(id, e) {
	todoItems = todoItems.filter((i) => i.id !== id);
	renderUIHandler();
}

function completeTodoController(id) {
	todoItems.forEach((i) => {
		if (i.id === id) {
			i.completed = !i.completed;
		}
	});
	renderUIHandler();
}
