/*
------ FUNCTIONALITIES -------

CREATE: DONE
    Minette's idea - every task has a unique id, an index that will increment everytime a task was created  (or try an array!)
        a. THIS WILL ONLY WORK WITH JQUERY. Tried hiding Parent Element instead.
READ: DONE
    Show task to the <div> allocated
UPDATE:  
    1. Create an icon beside the task - DONE
    2. Double click text
DELETE:
    1. Create an icon beside the task - DONE
    2. A modal that will show the: - 1/2
        a. Double-verification, to make sure that the user wants to delete the item - DONE
        b. Task was deleted
STRIKE:
    A checkbox button that will strike the text once completed. When the button was clicked when the text was striked, unstrike the text

------------- END -------------
*/

`use strict`;

let task = document.getElementById("task");
let submitButton = document.getElementById("submitButton");
let taskArea = document.getElementById("taskArea");
let closeIcon = document.getElementsByClassName("close");
let editIcon = document.getElementsByClassName("edit");
//let modal = document.getElementById("deleteModal");

task.addEventListener("keypress", (event) => {  // Add task when Enter key is pressed
    if(event.key === "Enter") { 
        addTask();  // Add condition here
    }
});

function addTask() {  // Add task when Submit is clicked
    task = document.getElementById("task").value;

    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const closeButton = document.createElement("SPAN");
    closeButton.classList.add("close", "bi", "bi-trash3", "ms-3");
    const editButton = document.createElement("SPAN");
    editButton.classList.add("bi", "bi-pencil", "edit");
    const text = document.createTextNode(task);

    let editIcon = document.getElementsByClassName("edit");

    newTask.appendChild(checkbox);
    newTask.appendChild(text);
    newTask.appendChild(closeButton);
    newTask.appendChild(editButton);
    taskArea.appendChild(newTask);

    for (i = 0; i < closeIcon.length; i++) {  // Do not use Arrow Function
        closeIcon[i].onclick = function() {
            //modal.style.display = "block";
            //let div = this.parentElement;
            //div.style.display = "none";
        }

        /*editIcon[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }*/

    }
    
    document.getElementById("task").value = "";  

}