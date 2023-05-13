/**
 * Below are all ui elements
 */

function createCheckBoxElem() {
	const checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	return checkBox;
}

function createDeleteButtonElem() {
	const deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "X";
	return deleteBtn;
}

function createTodoItemElem(todo) {
	const listItem = document.createElement("li");

	listItem.classList.add("todo-list-item");
	listItem.setAttribute("id", todo.id);

	const deleteBtn = createDeleteButtonElem();
	const checkBox = createCheckBoxElem();

	if (todo.completed) checkBox.checked = true;

	addClickEventListener(deleteBtn, (e) => deleteEventCallback(e, todo));
	addClickEventListener(checkBox, (e) => checkEventCallback(e, todo));

	listItem.appendChild(checkBox);
	listItem.appendChild(document.createTextNode(todo.value));
	listItem.appendChild(deleteBtn);

	if (todo.completed) listItem.style.textDecoration = "line-through";
	else listItem.style.textDecoration = "none";

	return listItem;
}
