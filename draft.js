

// this removes the placeholder text when you click on it
$('#newTask').on('click', removePlaceholder);

// when you click the ADD button, the text will be added to the ul 
$('#add').on('click', addTask);



$('#tasks').on('click', '#delete', deleteTask);

$('#tasks').on('click', '#edit', editTask);

//confused about what to have here to clear the value
$('#tasks').on('click', '#edit', removeText);

//save item
$('#tasks').on('submit', '#editForm', saveItem);

//save item
$('#tasks').on('blur', '#editForm', saveItem);



function removePlaceholder () {
	event.preventDefault(); 
	$('#newTask').val("");
}

function removeText() {
	event.preventDefault(); 
	$('#editForm').val("");
}




function addTask () {
	event.preventDefault();
	// Create a new variable called newTask that stores the value from the input
	var newTask = $('#newTask').val(); 
	// Adds the newTask text along with a checkbox and the edit and remove option
	$('#tasks').append('<ul class = "item"> <input id ="checkbox" type = "checkbox">' + '<span id = "firstTask" class ="task">' + newTask + '</span> <a id ="edit"> edit</a> <a id="delete"> delete </a> </ul>');
}

//added set span 

function deleteTask () {
	event.preventDefault(); 

	$(this).parent().remove();
}

function editTask () {
	event.preventDefault();

	//get the current item text 
	var currentText = $(this).siblings('#firstTask').html();


	//replace the current task text with a form 
	$('#firstTask').replaceWith('<form id ="editForm"> <input value = "'+ currentText + ' "  </form>');



function saveItem(event){
	event.preventDefault(); 

	//get the new text from the editor
	var itemText = $(this).children('input').val();

	//get the parent <li> 
	var listItem = $(this).parent();

	//replace the parent <li> contents with the updated item and controls
	listItem.append('<ul class ="item"> <input id = "checkbox" type = "checkbox">' + '<span class = "task">' + itemText + '</span> <a id ="edit"> edit</a> <a id="delete"> delete </a> </ul>');

}	
	
// function save () {
// 	event.preventDefault();

// 	//this kets the input that was just added
// 	var taskText = $(this).children('input').val();

// 	var listItem = $(this).parent(); 

// 	listItem.html('<ul class = "item"> <input id ="checkbox" type = "checkbox">' + '<span id = "firstTask" class ="task">' + taskText + '</span> <a id ="edit"> edit</a> <a id="delete"> delete </a> </ul>');

// }

}