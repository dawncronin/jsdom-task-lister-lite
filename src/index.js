
document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector('form');



  form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event.target)
    const inputField = document.querySelector('#new-task-description')
    const task = inputField.value
    const toDo = document.querySelector("#tasks")
    const newTask = document.createElement("Li")
    newTask.innerText = task
    toDo.appendChild(newTask)
    inputField.value = ""

    ;
  });


});


