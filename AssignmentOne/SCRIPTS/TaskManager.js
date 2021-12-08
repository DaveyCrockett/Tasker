function saveTask(task){
  let data = readTasks();
  data.push(task);
  let val = JSON.stringify(data);
  localStorage.setItem("tasks", val);
}

function readTasks(){
  let data = localStorage.getItem("tasks");
  if(!data){ //Not data?
    return []; // create an array the first registration
  }else{
      let list = JSON.parse(data);//parse string back into object
      return list;//return array of objects
  }
}

function deleteTask(taskId) {
  
  for(let i=0; i<data.length; i++){
      if(data[i].id === taskId){
          data.splice(i, 1);
      }
  }
  let val = JSON.stringify(data);
  localStorage.setItem("users", val);
  location.reload();
  return false;
}

// Please create a Todo project created during class 1.

// Functionality expected:

// - Calling function
// - Declaring variables
// - Passing parameters
// - Using arrays
// - Traveling arrays using for loops