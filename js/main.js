let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let emtyTask = document.getElementById("emtyTask");
let allTasks = document.getElementById("allTasks");
let span = document.querySelector("span");
let deleteAll = document.querySelector("#deleteAll");
let layout = document.querySelector(".layout");
let showModelBtn = document.querySelector("#showModelBtn");
let closeModelBtn = document.querySelectorAll('#closeModelBtn');


let showModel = () => {
    layout.classList.toggle("none");
}

showModelBtn.addEventListener("click", showModel);
for (let i = 0; i < closeModelBtn.length; i++) {
    closeModelBtn[i].addEventListener("click", showModel);
}

let checkEmptyTasks = () => {
    if (allTasks.children.length == 0) {
        emtyTask.classList.remove("none");
        deleteAll.classList.add("none");
    } else {
        emtyTask.classList.add("none");
        deleteAll.classList.remove("none");
    }
}


let addTask = (event) => {
    let taskValue = taskInput.value;
    if (taskValue.trim() == "") {
        span.classList.remove("none");
        taskInput.classList.add("invalid");
    } else {
        span.classList.add("none");
        taskInput.classList.remove("invalid");

        emtyTask.classList.add("none");
        deleteAll.classList.remove("none");
        allTasks.innerHTML += `
    <div class='task borderR alert alert-success'>
    ${taskValue}  <i class='delete text-danger float-end fa-solid fa-trash-can'>
    </i> </div>`;
        taskInput.value = "";
        // Glen = allTasks.children.length;
        showModel();
    }
}
addTaskBtn.addEventListener("click", addTask);


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
        checkEmptyTasks();
    }
});

let deleteAllfun = () => {

    allTasks.innerHTML = "";
    checkEmptyTasks();

}
deleteAll.addEventListener("click", deleteAllfun)

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('task')) {
        event.target.classList.toggle("checked");

    }
});






/**
 * Counter For pending tasks and copleted Tasks By class Checked
 * نفس التيسكت ميتكررش معاك ف التاسك
 * counter for tasks > 1,2,3,4,5
 * minLen > 3 , max len < 20 with VAlidation message 
 * Confirm message before deleted All
 * Dark , light Mode with user inputs 
 *  all Tasks Background rendom 
 * 
 */