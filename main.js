

// this removes the placeholder text when you click on it
$('#newTask').on('click', removePlaceholder);

// when you click the ADD button, the text will be added to the ul 
$('#add').on('click', addTask);

//when you click on delete, the task will be removed
$('#tasks').on('click', '#delete', deleteTask);



//this function removes the placeholder text on click
function removePlaceholder () {
	event.preventDefault(); 
	$('#newTask').val("");
}


//this function adds a task to the html li with the id "#tasks"
function addTask () {
	event.preventDefault();
	// create a new variable called newTask that stores the value from the input
	var newTask = $('#newTask').val(); 
	// add the newTask text along with a checkbox and the edit and remove options
	$('#tasks').append('<ul class = "item"> <input id ="checkbox" type = "checkbox">' + '<span id = "firstTask" class ="task">' + newTask + '</span> <a id = "edit"> edit </a> <a id="delete"> delete </a> </ul>');
}


//this function deletes the whole appended ul
function deleteTask () {
	event.preventDefault(); 
	$(this).parent().remove();
}



	



