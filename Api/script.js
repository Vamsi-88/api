async function fetchTodos(){
   
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if(!response.ok) throw new Error('Network response was not ok');
        const todos = await  response.json();
        displayTodos(todos);
    }catch(error){
        document.getElementById('todos-error').innerText = `Error: ${error.message}`
    }


}




function displayTodos(todos){
    const todosContainer = document.getElementById('todos');
    todosContainer.innerHTML = todos.map(todo => `
        <div class='todo'>
           <input type="checkbox" ${todo.completed ? 'checked': ''}>
           <label>${todo.title}</label>
        </div>


        `).join('');
}




fetchTodos();
