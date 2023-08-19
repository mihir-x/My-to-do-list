let count = 0;
function addTask(addBtn) {
    const inputValue = document.getElementById('input-field').value;
    const tableBody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${(count += 1)}</th>
    <td>${inputValue}</td>
    <td>
    <button onclick="doneBtn(this)" class="bg-sky-400 rounded-lg p-1">Done</button>
    <button onclick="deleteBtn(this)" class="bg-red-400 rounded-lg p-1">Delete</button>
    </td>`;
    tableBody.appendChild(tr);
    document.getElementById('input-field').value = '';
}
function doneBtn(db){
    db.parentElement.parentElement.style.textDecoration = 'line-through';
}
function deleteBtn(delb){
    delb.parentElement.parentElement.style.display = 'none';
}

function clearBtn(cb){
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
}