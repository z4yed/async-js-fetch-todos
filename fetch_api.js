async function fetchAndPopulateTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        // fetch() returns a promise & await resolves it & reuturns response

        const allTodos = await response.json(); // .json() returns a promise & await resolves it
        let html = ``;

        allTodos.map((todo) => {
            html += `
            
            <div class="col-12 col-md-3 border border border-secondary p-2 my-1">
                <ul>
                    <li class="">Todo ID: ${todo.id}</li>
                    <li>User ID: ${todo.userId}</li>
                    <li>Title: ${todo.title}</li>
                    <li>Completed: ${todo.completed}</li>
                </ul>
            </div> 

            `
        })

        document.getElementById('total-todos').innerText = allTodos.length;
        document.getElementById('todo-container').innerHTML = html;

    }
    catch (error) {
        console.log(error.message)
    }

}

fetchAndPopulateTodos()


async function todoDetail(todoId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

        let html = ``;

        if (isNaN(todoId)) {
            html = ` <h5 class="text-danger"> Input must be a number between 1 - 200 </h5> `
        }
        else if (response.status == 404) {
            html = ` <h5 class="text-danger"> Todo id : ${todoId} doesn't exists. </h5>`
        } 
        else {

            const todo = await response.json(); // resolve promise
            html = `
                <ul class="text-dark">
                    <li>Todo ID: ${todo.id}</li>
                    <li>User ID: ${todo.userId}</li>
                    <li>Title: ${todo.title}</li>
                    <li>Completed: ${todo.completed}</li>
                </ul>
            `
        }

        document.getElementById('specifc-todo-container').innerHTML = html;

    }
    catch (error) {
        console.log("Not Found. ")
        console.log(error.message);
    }
}

document.getElementById('search-button').addEventListener('click', () => {
    let todoId = document.getElementById('todo-input').value || 1;
    todoDetail(todoId)
})