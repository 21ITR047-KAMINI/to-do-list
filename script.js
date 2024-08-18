document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            deleteTask(event.target);
        } else if (event.target.tagName === 'LI') {
            toggleComplete(event.target);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    function deleteTask(button) {
        const li = button.parentElement;
        taskList.removeChild(li);
    }

    function toggleComplete(task) {
        task.classList.toggle('completed');
    }
});
