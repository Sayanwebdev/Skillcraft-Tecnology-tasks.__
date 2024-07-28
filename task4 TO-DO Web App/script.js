document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    const task = taskInput.value;
    const date = dateInput.value;
    const time = timeInput.value;

    if (task && date && time) {
        const taskList = document.getElementById('taskList');

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${task} - ${date} ${time}</span>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(listItem);

        taskInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    }
});

document.getElementById('taskList').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});


