const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// 할일을 추가해보자!
addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";

        deleteButton.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = ""; // 입력창 비우기
    }
});
