function createListItems(tasks){
    let ul = document.getElementById("taskList");
    let li;
    tasks.map(task => (li = `<li id=${task.id}>${task.taskName}</li>`, ul.innerHTML += li)); 
}
