document.getElementById('TaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        const taskList = document.getElementById('tasks');
        const taskItem = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = taskValue;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        taskInput.value = ''; 
    } else {
        alert("Digite uma task.");
    }
});
