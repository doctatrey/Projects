const inputVal = document.getElementById('input');
const addTask = document.getElementById('add');
const taskList = document.getElementById('list');
const clearList = document.getElementById('clear');

function updateList() {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    taskList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        taskList.appendChild(li);
    });
}

addTask.addEventListener('click', () => {
    if (inputVal.value != '') {
        let localItems = JSON.parse(localStorage.getItem('items')) || [];
        localItems.push(inputVal.value);
        localStorage.setItem('items', JSON.stringify(localItems));
        inputVal.value = '';
        updateList();
    }
})

clearList.addEventListener('click', () => {
    localStorage.removeItem('items');
    updateList();
})

updateList();
