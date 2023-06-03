const myArray = [];
renderTodoList();
function renderTodoList(){

    let todoListHTML ='';
        for(let i =0;i<myArray.length;i++){
            const todoObject = myArray[i];
            const {name,dueDate} = todoObject;
            const html = `
            
            <div class="T"><button   onclick="
            tick(); "class="I C"><img class="I" src="images/unchecked.png" alt=""></button></div>
            <div class="D">${name}</div> 
            <div class="D">${dueDate}</div>
            <div class="K">  <button 
                class='del'
                onclick='myArray.splice(${i}, 1);
                renderTodoList();
                '>Delete</button></div>`;
            todoListHTML += html;

}
document.querySelector('.todolist').innerHTML = todoListHTML;
document.querySelector('.del').innerHTML = S;


}

function addTodo(){
    const htmltodo1 = document.querySelector('.js-todo');
    const name = htmltodo1.value;

    const dateInputElement = document.querySelector('.tododate');
    const dueDate = dateInputElement.value;
    if(name === ''){
        alert("Enter something")
    }else{
        myArray.push({
            name:name,
            dueDate:dueDate
        });
        console.log(myArray);
    
        htmltodo1.value = '';
    
        renderTodoList();
    }

    
}

function tick(){
    const buttonElement = document.querySelector('.C');
    const textElement = document.querySelector('.D');

if(buttonElement.innerHTML === '<img class="I" src="images/unchecked.png" alt="">'){
    buttonElement.innerHTML = '<img class="I" src="images/checked.png" alt="">'
    textElement.classList.add('is-checked');
}else{
    buttonElement.innerHTML = '<img class="I" src="images/unchecked.png" alt="">'
    textElement.classList.remove('is-checked');
}
}