document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskAction);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const btnGroup = document.createElement('div');
        btnGroup.classList.add('btn-group');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        btnGroup.appendChild(completeBtn);
        btnGroup.appendChild(removeBtn);

        li.appendChild(btnGroup);
        li.style.animation = 'addTaskAnimation 0.5s ease-out';
        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskAction(e) {
        if (e.target.classList.contains('remove-btn')) {
            const li = e.target.closest('li');
            li.style.animation = 'removeTaskAnimation 0.5s ease-in';
            li.addEventListener('animationend', () => {
                taskList.removeChild(li);
            });
        } else if (e.target.classList.contains('complete-btn')) {
            const li = e.target.closest('li');
            li.classList.toggle('completed');
        }
    }
});
