var todos = [];

function todo(name) {
	this.name = name;
}

function addTodo(name) {
	var t = new todo(name);
	todos.push(t);
	saveTodo();
}

function removeTodo(name) {
	for (var i in todos) {
		if (todos[i].name === name) {
			todos.splice(i, 1);
		}
		// break;
	}
	
	saveTodo();
}

function getTodo(index) {
	return todos[index];
}

function clearTodo() {
	todos = [];
	saveTodo();
	listTodo();
}

function saveTodo() {
	var str = JSON.stringify(todos);
	localStorage.setItem("todo", str);
}

function retrieveTodo() {
	var str = localStorage.getItem("todo");
	todos = JSON.parse(str);

	if (todos === null) {
		todos = [];
	}
}

retrieveTodo();
listTodo();

function listTodo() {
	var html = "";
	for (var i in todos) {
		var todo = todos[i];
		var name = todo.name;
		html += "<li>" + name + "<button class='delete' data-name='"
                        +name+"'>X</button>" + "</li>";
	}
	$("#myUL").html(html);
}

$(".addBtn").click(function(event) {
	event.preventDefault();

	var name = $("#myInput").val();
	if (!(name === '')) {
		addTodo(name);
	}
	document.getElementById("myInput").value = "";
	listTodo();
});

$("#myUL").on("click", ".delete", function(event) {
	var name = $(this).attr("data-name");
	removeTodo(name);
	listTodo();
});