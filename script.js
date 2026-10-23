let button=document.getElementById("btn");
let todoList=document.getElementById("todoList");
let input=document.getElementById("con1");
let todos=[];
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos') )|| [];
    todos.forEach(todo=>arrtodo(todo));
};
button.addEventListener('click',()=>{
    todos.push(input.value);
    localStorage.setItem('todos',JSON.stringify(todos));
    arrtodo(input.value);
    input.value='';
});
function arrtodo(todo){
    let para=document.createElement('p');
    para.innerText=todo;
    todoList.appendChild(para);
    para.addEventListener('click',()=>{
        para.style.textDecoration="line-through";
        remove(todo);
        
    });
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para);
        remove(todo);
    });
    function remove(todo){
        let index=todos.indexOf(todo);
        if(index>-1){
            todos.splice(index,1)
        }
        localStorage.setItem('todos',JSON.stringify(todos));
    }
}