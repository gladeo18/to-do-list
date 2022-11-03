`use strict`;

let task = document.getElementById("task");
let submitButton = document.getElementById("submitButton");
let taskArea = document.getElementById("taskArea");
let closeIcon = document.getElementsByClassName("close");
let checkboxIcon = document.getElementsByClassName("checkbox");
let editIcon = document.getElementsByClassName("edit");
let deleteModal = document.getElementById("deleteModal");
let editModal = document.getElementById("editModal");

task.addEventListener("keypress", (event) => {  // Add task when Enter key was pressed
    if(event.key === "Enter") { 
        task = document.getElementById("task").value;
        if(!task) { alert( "Please enter a task!"); }
        else if(task) { addTask(); }
    }
});

function addTask() {  // Add task when Submit was clicked
    task = document.getElementById("task").value;

    if(!task) { alert("Please enter a task!"); }
    else if(task) {
        const newTask = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        const checkboxLabel = document.createElement("label");
        checkboxLabel.contentEditable = "true";
        const closeButton = document.createElement("SPAN");
        closeButton.classList.add("close", "bi", "bi-trash3", "ms-3");
        const editButton = document.createElement("SPAN");
        editButton.classList.add("bi", "bi-pencil", "edit");
        const text = document.createTextNode(task);
    
        newTask.appendChild(checkbox);
        checkboxLabel.appendChild(text);
        newTask.appendChild(checkboxLabel);
        newTask.appendChild(closeButton);
        newTask.appendChild(editButton);
        taskArea.appendChild(newTask);

        for (i = 0; i < closeIcon.length; i++) {  // Delete a task
            closeIcon[i].onclick = function() {
                console.log(this.parentElement.childNodes[i]);
                deleteModal.style.display = "block";
                let div = this.parentElement;
                modals();

                document.getElementById("deleteTask").addEventListener("click", function(){
                    deleteModal.style.display = "none";
                    div.style.display = "none";  
                });
            }

            checkboxIcon[i].onclick = function() {  // Strike or unstrike the task
                let div = this.parentElement;
                if(this.checked) { 
                    div.childNodes[1].className = "strikeText"; 
                    div.style.opacity = 0.5;
                }
                else { 
                    div.childNodes[1].classList.remove("strikeText");
                    div.style.opacity = 1;
                }
            }

            editIcon[i].onclick = function() {  // Edit task
                let inputTask = document.getElementById("inputTask");
                div = this.parentElement;
                textValue = div.childNodes[1].nodeValue;
                inputTask.value = textValue;
                editModal.style.display = "block";
                modals();

                document.getElementById("editTask").addEventListener("click", function() {
                    editModal.style.display = "none";
                    newInputTask = document.getElementById("inputTask").value;
                    div.childNodes[1].textContent = newInputTask;
                });
            }

            checkboxLabel.addEventListener(("keypress"), (event) => {  // Unfocus text
                if(event.key === "Enter") {
                    document.activeElement.blur();
                }
            });

        }

        document.getElementById("task").value = "";  

    }
}

function modals() {  // Hiding modals when button was clicked

    document.getElementById("undoTask").addEventListener("click", function(){
        deleteModal.style.display = "none";
    });

    document.getElementById("sameTask").addEventListener("click", function(){
        editModal.style.display = "none";
    });
}
