const form = document.querySelector('#todo');
const input = document.querySelector('#grocery');
const ul = document.querySelector('#list');

const completeList = [];
const getList = JSON.parse(localStorage.getItem('todoList'))
for(let i = 0; i < getList.length; i++){
    const li = document.createElement('li'); 
    const button = document.createElement('button');
    button.innerText = 'remove';
    li.innerText = getList[i];
    ul.appendChild(li);
    li.appendChild(button);
}

JSON.parse(localStorage.getItem('todoList'));

form.addEventListener('submit', function(e){
e.preventDefault();

const li = document.createElement('li');
const removeL = document.createElement('button');
li.innerText = input.value;
removeL.innerText = 'remove';
ul.appendChild(li);
li.appendChild(removeL);
completeList.push(input.value);
localStorage.setItem('todoList', JSON.stringify(completeList))
input.value = '';
});


ul.addEventListener('click', function(e){
 
if(e.target.tagName === 'BUTTON'){
    e.target.parentElement.remove();
}
else if(e.target.tagName === 'LI'){
    e.target.classList.toggle('crossOut');
}
});

