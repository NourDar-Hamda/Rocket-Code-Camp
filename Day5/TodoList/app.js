document.addEventListener("DOMContentLoaded", (e) => {
  const taskInput = document.getElementById("new-task");
  const addButton = document.getElementById("add_button");

  // const handleCheckBox = (e) => {
  //   debugger;
  //   const checked = e.target.checked;
  //   const parent = e.target.parentElement;
  //   const labelValue = parent.querySelector("label").innerHTML;
  //   if (checked) {
  //     const listOfcompletedTasks = document.getElementById("completed-tasks");
  //     listOfcompletedTasks.innerHTML =
  //       `<li>
  //   <input type="checkbox" checked/><label>${labelValue}</label
  //   ><input type="text" /><button class="edit">Edit</button
  //   ><button class="delete">Delete</button>
  // </li>` + listOfcompletedTasks.innerHTML;
  //   }

  //   parent.remove();
  // };
 // Define the handleCheckBox function
const handleCheckBox = (e) => {
  const listItem = e.target.closest("li"); // Get the closest parent <li> element
  const labelValue = listItem.querySelector("label").textContent;

  console.log("Checkbox clicked:", labelValue);

  if (listItem.parentElement.id === "incomplete-tasks") {
 
    if (e.target.checked) {

      console.log("Moving task to completed tasks:", labelValue);
      const listOfCompletedTasks = document.getElementById("completed-tasks");
      const completedListItem = listItem.cloneNode(true);
      completedListItem.querySelector("input[type='checkbox']").checked = true;
      listOfCompletedTasks.prepend(completedListItem);
      listItem.remove(); 
    }
  } else if (listItem.parentElement.id === "completed-tasks") {
  
    if (!e.target.checked) {

      console.log("Moving task to incomplete tasks:", labelValue);
      const listOfIncompleteTasks = document.getElementById("incomplete-tasks");
      const incompleteListItem = listItem.cloneNode(true);
      incompleteListItem.querySelector("input[type='checkbox']").checked = false;
      listOfIncompleteTasks.prepend(incompleteListItem);
      listItem.remove();
    }
  }
};


const addTask = (e) => {
  const newTask = taskInput.value.trim();
  if (newTask !== "") {
    const listOfIncompleteTasks = document.getElementById("incomplete-tasks");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = newTask;
    const edit = document.createElement("button");
    edit.className = "edit";
    edit.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "Delete";

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(deleteButton);

    listOfIncompleteTasks.prepend(li);


    checkbox.addEventListener("change", handleCheckBox);

    taskInput.value = ""; 
  }
};


addButton.addEventListener("click", addTask);


document.querySelectorAll("#incomplete-tasks input[type='checkbox']").forEach((checkBox) => {
  checkBox.addEventListener("change", handleCheckBox);
});

document.querySelectorAll("#completed-tasks input[type='checkbox']").forEach((checkBox) => {
  checkBox.addEventListener("change", handleCheckBox);
});


document.addEventListener("change", (e) => {
  const target = e.target;
  if (target.type === "checkbox") {
    handleCheckBox(e); 
  }
});

  
   
  

  // const addTask = (e) => {
  //   const newTaks = taskInput.value;
  //   const listOfIncompleteTasks = document.getElementById("incomplete-tasks");
  //   const li = document.createElement("li");
  //   const checkbox = document.createElement("input");
  //   checkbox.type = "checkbox";
  //   const label = document.createElement("label");
  //   label.textContent = newTaks;
  //   const edit = document.createElement("button");
  //   edit.className = "edit";
  //   edit.textContent = "Edit";
  //   const deleteButton = document.createElement("button");
  //   deleteButton.className = "delete";
  //   deleteButton.textContent = "Delete";

  //   li.appendChild(checkbox);
  //   li.appendChild(label);
  //   li.appendChild(edit);
  //   li.appendChild(deleteButton);

  //   listOfIncompleteTasks.prepend(li);

  //   listOfIncompleteTasks
  //     .querySelectorAll("li input[type='checkbox']")[0]
  //     .addEventListener("change", handleCheckBox);

  //   taskInput.value = ""; // empty out the add input
  // };

  // addButton.addEventListener("click", addTask);

  // debugger;

  // document
  //   .querySelectorAll("#incomplete-tasks input[type='checkbox']")
  //   .forEach((checkBox) => {
  //     checkBox.addEventListener("change", handleCheckBox);
  //   });


  // Event listener for delete and edit buttons
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("delete")) {
      
      target.closest("li").remove();
    }else if (target.classList.contains("edit")) {
      const listItem = target.closest("li");
      const label = listItem.querySelector("label");
      const taskName = label.textContent;
    
   
      const existingInputField = listItem.querySelector(".edit-input");
      if (!existingInputField) {
   
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = taskName;
        inputField.classList.add("edit-input");
    
 
        label.insertAdjacentElement("afterend", inputField);
    

        label.style.display = "none";
        inputField.style.display = "inline-block";
    
   
        inputField.focus();
    
      
        inputField.addEventListener("keyup", (e) => {
          if (e.key === "Enter") {
            const editedTaskName = inputField.value;
            label.textContent = editedTaskName;
    
          
            label.style.display = "inline-block";
            inputField.style.display = "none";
    
          
            inputField.remove();
          }
        });
      }
    }
    
    
    
    
  });
  
  
  


});
