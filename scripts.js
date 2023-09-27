const taskNameInput = document.getElementById('taskName');
const taskCategorySelect = document.getElementById('taskCategory');
const taskDeadlineInput = document.getElementById('taskDeadline');
const taskPrioritySelect = document.getElementById('taskPriority');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskName = taskNameInput.value;
    const taskCategory = taskCategorySelect.value;
    const taskDeadline = taskDeadlineInput.value;
    const taskPriority = taskPrioritySelect.value;

    if (taskName) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <strong>${taskName}</strong>
            <br>
            Category: ${taskCategory}<br>
            Deadline: ${taskDeadline}<br>
            Priority: ${taskPriority}
        `;

        taskList.appendChild(taskItem);

        // Clear the input fields after adding a task
        taskNameInput.value = '';
        taskCategorySelect.value = 'To-Do';
        taskDeadlineInput.value = '';
        taskPrioritySelect.value = 'Low';
    }
}
