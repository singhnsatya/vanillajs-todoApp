/**
 * Below are callback for listeners
 */

function deleteEventCallback(e, todo) {
    e.preventDefault();
    deleteTodoController(todo.id);
    e.stopPropagation();
}

function checkEventCallback(e, todo) {
    e.preventDefault();
    completeTodoController(todo.id);
    e.stopPropagation();
}

/**
 * Below are all listeners
 */

function addClickEventListener(elem, func) {
    elem.addEventListener('click', func);
}