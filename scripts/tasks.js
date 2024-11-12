// Initial sample data for tasks
let tasks = [
    { description: "Task 1", completed: false },
    { description: "Task 2", completed: false },
    { description: "Task 3", completed: false },
    { description: "Task 4", completed: true },
    { description: "Task 5", completed: false },
];

// Display tasks in the preview (top 3)
function displayTasksPreview() {
    const tasksContainer = document.querySelector('#tasks-data .tasks-list');
    tasksContainer.innerHTML = ''; // Clear existing tasks

    tasks.slice(0, 3).forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        const taskDescription = document.createElement('p');
        taskDescription.textContent = task.description;
        taskDescription.contentEditable = true; // Make description editable
        taskDescription.addEventListener('input', () => updateTaskDescription(index, taskDescription.textContent));

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener('change', () => toggleTaskStatus(index));

        taskItem.appendChild(taskDescription);
        taskItem.appendChild(taskCheckbox);

        tasksContainer.appendChild(taskItem);
    });
}

// Update task description
function updateTaskDescription(index, newDescription) {
    tasks[index].description = newDescription;
}

// Toggle task completion status
function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
}

// Initial load of tasks preview
displayTasksPreview();
