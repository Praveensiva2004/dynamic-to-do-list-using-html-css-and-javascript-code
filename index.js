document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="completeBtn">✔</button>
        <button class="deleteBtn">❌</button>
    `;

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
});

document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.classList.contains('completeBtn')) {
        event.target.parentElement.classList.toggle('completed');
    }

    if (event.target.classList.contains('deleteBtn')) {
        event.target.parentElement.remove();
    }
});
