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
    2. A modal that will show the:
        a. Double-verification, to make sure that the user wants to delete the item
        b. Task was deleted
STRIKE:
    A checkbox button that will strike the text once completed. When the button was clicked when the text was striked, unstrike the text

------------- END -------------
*/

`use strict`;

let task = document.getElementById("task");
let submitButton = document.getElementById("submitButton");
let taskArea = document.getElementById("taskArea");
let index = 0;
//let close = document.getElementsByClassName("close");

task.addEventListener("keypress", (event) => {  // Add task when Enter key is pressed
    if(event.key === "Enter") { 
        addTask();
    }
});

function addTask() {  // Add task when Submit is clicked
    task = document.getElementById("task").value;

    const newTask = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const closeButton = document.createElement("SPAN");
    closeButton.classList.add("bi", "bi-trash3", "ms-3", "close");
    const editButton = document.createElement("SPAN");
    editButton.classList.add("bi", "bi-pencil", "edit");
    const text = document.createTextNode(task);

    newTask.appendChild(checkbox);
    newTask.appendChild(text);
    newTask.appendChild(closeButton);
    newTask.appendChild(editButton);
    taskArea.appendChild(newTask);

    document.getElementById("task").value = "";
    //console.log(close.length);
    index += 1;
    printIndex();
}

function printIndex() {
    console.log(index);
    let i = 0;

    //const div = document.querySelector('span');
    //console.log(div.classList.contains('close'));

    console.log(close[0].value);
    /*while(i < index.length) {
        close[index].onclick = () => {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }*/

}

HOW TO GET VALUE OF APPENDED CLASS NAME 






/*
while(index < close.length) {
    close[index].onclick = () => {
        let div = this.parentElement;
        div.style.display = "none";
    }
    index+=1;
}*/

/*
const pseudoTaskList = document.getElementsByTagName("LI");
index = 0;

while(index < pseudoTaskList.length) {
    const closeButton = document.createElement("SPAN");
    const closes = document.createTextNode("\u00D7");
    closeButton.className = "close";
    closeButton.appendChild(closes);
    pseudoTaskList[index].appendChild(closeButton);
}*/




