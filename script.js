const userInput = document.getElementById("userInput");
const addButton = document.getElementById("addBtn");
const list = document.getElementById("list");


getItems();

addButton.addEventListener("click", function addNewTask(){
    postItem({"description": userInput.value, "done": false});
    // userInput.value = "";
    location.reload(true);
});

let renderItems = (items)=>{
    for (const q of items){
        const div = document.createElement("div");
        const newTask = document.createElement("input");
        const icon = document.createElement("i");
        const newTaskName = document.createElement("label");
        const deleteBtn = document.createElement("button");
        newTask.type = "checkbox";
        newTask.id = "task";
        newTaskName.for = "task";
        newTaskName.innerHTML = q.description;
        deleteBtn.classList.add("delete-btn");
        icon.classList.add("fa", "fa-trash-o")
        list.appendChild(div);
        div.append(newTask, newTaskName, deleteBtn);
        deleteBtn.appendChild(icon);
        icon.classList.add("delete-Btn");

        if(q.done === true){
            newTaskName.classList.add("completed");
            newTask.checked = "true";
        };


        deleteBtn.addEventListener("click", function deleteTask(){
            deleteItem(q._id);
            div.remove();
            });

        newTask.addEventListener("click", function completed(){
            
            if (newTask.checked === true){
                changeItem(q._id, {
                    "done": true
                });
                newTaskName.classList.add("completed");
                
                //location.reload(true);
                
            } else {
                changeItem(q._id, {
                    "done": false
                });
                newTaskName.classList.remove("completed");
                
                
            }

           
        });
        newTaskName.addEventListener("click", function editable(){ 
            newTaskName.contentEditable = true;
            newTaskName.addEventListener("keydown", function(e){
               if (e.keyCode === 13){
                e.preventDefault();
                changeItem(q._id, {
                    "description": newTaskName.innerHTML
                })
                newTaskName.contentEditable = false;
               };
            });
        });
    
    }   
};  




