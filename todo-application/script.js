const input = document.getElementById('input');
const ulElement = document.getElementById('list');

const actionPanel1 = document.getElementById('actionPanel1');
const actionPanel2 = document.getElementById('actionPanel2');


let todoList = [];
upgradeView();
actionPanel2.style.display = 'none';

input.addEventListener('keydown', event => {
    if ((event.key == "Enter" || event.keyCode == 13) && input.value) {
        todoList.unshift({
            content: input.value,
            done: false,
            selected: false,
        });
        upgradeView();
        input.value = '';
    }
});

function upgradeView() {
    ulElement.innerHTML = '';

    for (let index = 0; index < todoList.length; index++) {   
        const todoItem = todoList[index];
        
        const liElement = document.createElement('li');
            liElement.className = 'list-group-item';
            ulElement.append(liElement);

        const divElement = document.createElement('div');
            divElement.className = 'form-group form-check';
            liElement.append(divElement);

        const inputElement = document.createElement('input');
            inputElement.className = 'form-check-input';
            inputElement.id = 'todoItem' + index;
            inputElement.type = 'checkbox';
            inputElement.checked = todoItem.selected;
            divElement.append(inputElement);
        
        const labelElement = document.createElement('label');
            labelElement.className = 'form-check-label';
            labelElement.setAttribute('for', 'todoItem' + index);
            labelElement.innerText = todoItem.content;
            divElement.append(labelElement);
            if (todoItem.done) {
                labelElement.className += ' todoDone';
            }

        if (!todoItem.done) {
            const buttonDone = document.createElement('button');
            buttonDone.className = 'btn btn-outline-primary';
            buttonDone.innerText = 'Done';
            divElement.append(buttonDone);

            buttonDone.addEventListener('click', () => {
                todoItem.done = !todoItem.done;
                upgradeView();
            });
        }

        else {
            const buttonRemove = document.createElement('button');
            buttonRemove.className = 'btn btn-outline-danger';
            buttonRemove.innerText = 'Remove';
            divElement.append(buttonRemove);

            buttonRemove.addEventListener('click', () => {
                todoList = todoList.filter(item => item != todoItem);
                upgradeView();
            });
        }

        inputElement.addEventListener('change', () => {
            todoItem.selected = inputElement.checked;            
            upgradeView();
        });
    }

    const someSelected = todoList.some(todoItem => todoItem.selected);
    if (someSelected) {
        actionPanel1.style.display = 'none';
        actionPanel2.style.display = 'block';
    }
    else {
        actionPanel1.style.display = 'flex';
        actionPanel2.style.display = 'none';
    }
}

document.getElementById('doneAction').addEventListener('click', () => {
    for (const todoItem of todoList) {
        if (todoItem.selected) {
            todoItem.done = true;
            todoItem.selected = false;
        }
    }

    upgradeView();
})

document.getElementById('restoreAction').addEventListener('click', () => {
    for (const todoItem of todoList) {
        if (todoItem.selected) {
            todoItem.done = false;
            todoItem.selected = false;
        }
    }

    upgradeView();
})

document.getElementById('removeAction').addEventListener('click', () => {
    todoList = todoList.filter(todoItem => !todoItem.selected);

    upgradeView();
})

document.getElementById('selectAllButton').addEventListener('click', () => {
    for (const todoItem of todoList) {
        todoItem.selected = true;
    }
    upgradeView();
})



