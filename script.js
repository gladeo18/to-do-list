/*
------ FUNCTIONALITIES -------

CREATE: DONE
    Minette's idea - every task has a unique id, an index that will increment everytime a task was created  (or try an array!)
        a. THIS WILL ONLY WORK WITH JQUERY. Tried hiding Parent Element instead.
READ: DONE
    Show task to the <div> allocated
UPDATE:  (3/3)
    1. Create an icon beside the task - DONE
    2. A modal that will let you edit the text - DONE
    2. Double click text - DONE
DELETE: DONE
    1. Create an icon beside the task - DONE
    2. A modal that will show the: - 2/2
        a. Double-verification, to make sure that the user wants to delete the item - DONE
        b. Task was deleted - DONE
STRIKE: DONE
    A checkbox button that will strike the text once completed. When the button was clicked when the text was striked, unstrike the text

------------- END -------------
*/

`use strict`;

let task = document.getElementById("task");
let submitButton = document.getElementById("submitButton");
let taskArea = document.getElementById("taskArea");
let closeIcon = document.getElementsByClassName("close");
let checkboxIcon = document.getElementsByClassName("checkbox");
let editIcon = document.getElementsByClassName("edit");
let deleteModal = document.getElementById("deleteModal");
let editModal = document.getElementById("editModal");

task.addEventListener("keypress", (event) => {  // Add task when Enter key is pressed
    if(event.key === "Enter") { 
        task = document.getElementById("task").value;
        if(!task) { alert( "Please enter a task!"); }
        else if(task) { addTask(); }
    }
});

function addTask() {  // Add task when Submit is clicked
    task = document.getElementById("task").value;

    if(!task) { alert("Please enter a task!"); }
    else if(task) {
        const newTask = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        const closeButton = document.createElement("SPAN");
        closeButton.classList.add("close", "bi", "bi-trash3", "ms-3");
        const editButton = document.createElement("SPAN");
        editButton.classList.add("bi", "bi-pencil", "edit");
        const text = document.createTextNode(task);
    
        newTask.appendChild(checkbox);
        newTask.appendChild(text);
        newTask.appendChild(closeButton);
        newTask.appendChild(editButton);
        taskArea.appendChild(newTask);

        for (i = 0; i < closeIcon.length; i++) {  // Delete a task
            closeIcon[i].onclick = function() {
                console.log(this.parentElement.childNodes[i]);
                deleteModal.style.display = "block";
                let div = this.parentElement;
                modals(div);
            }

            checkboxIcon[i].onclick = function() {  // Strike or unstrike the task
                let div = this.parentElement;
                if(this.checked) { div.className = "strikeText"; }
                else { div.classList.remove("strikeText"); }
            }

            editIcon[i].onclick = function() {  // Edit task
                let inputTask = document.getElementById("inputTask");
                div = this.parentElement;
                textValue = div.childNodes[1].nodeValue;
                inputTask.value = textValue;
                editModal.style.display = "block";
                modals(div);

                document.getElementById("editTask").addEventListener("click", function(){
                    editModal.style.display = "none";
                    newInputTask = document.getElementById("inputTask").value;
                    div.childNodes[1].nodeValue = newInputTask;
                });
            }

            newTask.onclick = function() {  // Double Click text to edit
                console.log(this.childNodes[1].nodeValue);  // Stuck at edting the text when clicked  <--------------------
            }

        }

        document.getElementById("task").value = "";  

    }
}

function modals(param) {  // Hiding modals whilst performing actions

    document.getElementById("deleteTask").addEventListener("click", function(){
        deleteModal.style.display = "none";
        param.style.display = "none";  
    });

    document.getElementById("undoTask").addEventListener("click", function(){
        deleteModal.style.display = "none";
    });

    document.getElementById("sameTask").addEventListener("click", function(){
        editModal.style.display = "none";
    });
}