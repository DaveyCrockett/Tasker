// set x to 0 for id incrementation
let x = 0;
// create constructor
class Task {
    constructor(taskName){
        this.taskName = taskName;
        this.id = x++;
    }
}

function addTask() {
    let taskName = $("#taskInput").val();
    console.log(taskName);
    let task = new Task(taskName);
    if(task.taskName != ""){
        saveTask(task);
        location.reload();
    }
    
}

function newElement() {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

function init(){

    console.log("Task Item")
    $(".addBtn").click(addTask);
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    createListItems(tasks);
    // Create a "close" button and append it to each list item
    let myNodelist = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    let close = document.getElementsByClassName("close");
    let data = JSON.parse(localStorage.getItem("tasks"));
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            data.splice(i, 1);
            let val = JSON.stringify(data);
            localStorage.setItem("users", val);
        }
    }
    
    // Add a "checked" symbol when clicking on a list item
    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

window.onload=init;