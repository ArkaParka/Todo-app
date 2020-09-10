const input = document.getElementById('input');
const btnSelectAll = document.getElementById('btnSelectAll');
const doneBtn = document.getElementById('doneBtn');
const edit_panel__buttons_restore = document.getElementsByClassName('edit_panel__buttons_restore');
const edit_panel__buttons_remove = document.getElementsByClassName('edit_panel__buttons_remove');
const ul = document.getElementsByClassName('todo-list')[0];

let inputs = [];

function updateList() {
    ul.innerHTML = '';

    for(let i = 0; i < inputs.length; i++) {
        let todoItem = inputs[i]; 

        let li = document.createElement('li');
        let label = document.createElement('label');

        let todo_input = document.createElement('input');
            todo_input.className = "checkbox";
            todo_input.type = 'checkbox';
            todo_input.value = "false";
            todo_input.addEventListener('click', () => {
                if (todo_input.checked) { todo_input.value = "true"}
                else todo_input.value = "false";
            });
            

        li.append(label);
        label.append(todo_input);

        let span = document.createElement('span');
        span.innerText = todoItem + ' ';
        span.className = "item " + i;
        //label.append(inputs[i] + ` `);
        label.append(span);

        let todo_list__doneBtn = document.createElement('button');
            todo_list__doneBtn.innerHTML = 'Done';
            todo_list__doneBtn.className = 'todo-list__doneBtn btn ' + i;
            //todo_list__doneBtn.classList.add('btn');
            todo_list__doneBtn.addEventListener('click', () => {
                span.className = "done";
                // todo_list__doneBtn.hidden = true;
                // todo_list__removeBtn.visible = true;
            });
            // if (span.className = "done") {
            //     todo_list__doneBtn.hidden = true;
            //     todo_list__removeBtn.visible = true;
            // }

        let todo_list__removeBtn = document.createElement('button');
            todo_list__removeBtn.innerHTML = 'Remove';
            todo_list__removeBtn.classList.add('todo-list__removeBtn');
            todo_list__removeBtn.classList.add('btn');
            
            todo_list__removeBtn.addEventListener('click', () => {
                inputs.filter(item => {item !== todoItem;});
                
                //updateList();
            });

        label.append(todo_list__doneBtn);
        label.append(todo_list__removeBtn);
        ul.appendChild(li);
    }
    document.getElementById("text").style.display = "none";
}

input.addEventListener("keydown", event => {
    if ((event.key === 'Enter' || event.keyCode === 13) && input.value != '') {
        //inputs = [];
        inputs.push(input.value);
        input.value = '';
        updateList();
    }    
    
});

let even = 0;
btnSelectAll.addEventListener('click', () => {
    const checkboxes = document.getElementsByClassName('checkbox');
    even++;
    // checkboxes.map(item => {item.checked = true; item.value = "true";})
    Array.prototype.map.call(checkboxes, item => {
        if(even % 2) {item.checked = true; item.value = "true";}
        else {item.checked = false; item.value = "false";}});
});

doneBtn.addEventListener('click', () => {
    const todoItems = document.getElementsByClassName('item');
    const btn = document.getElementsByClassName('btn');
    for (let item = 0; item < todoItems.length; item++) {
        if (todoItems[item].checked = true) 
        todoItems[item].classList.add('done');// = "done";
        if (btn[item].className == item) console.log(btn[item]);//btn[item].hidden = true;
    }
    // Array.prototype.map.call(todoItems, item => {
    //     if (item.checked = true) 
    //     item.classList.add('done');// = "done";
    // });
});

/* <li>
    <label>
        <input type="checkbox" name="happy" value="yes">Happy <button class="todo-list__doneBtn btn">Done</button><button class="todo-list__removeBtn btn">Remove</button>
    </label>
</li> */
