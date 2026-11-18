window.onload = startup;

var demoItemTodoWhatever = {
    id : 1,
    title : "",
    done : false,
    rating : 0
}
var list = []

var todobox = document.querySelector("#todoList");
var errorbox = document.querySelector("#errorMsg");
var teller = document.querySelector("#teller");



function startup() {
    document.querySelector("#addButton").onclick = addButton;
    document.querySelector("#clearButton").onclick = clearButton;
    document.querySelector("#rating").value
    loadTodos()
    
}

function addButton() {
    var newtitle = document.querySelector("#input").value
    var newRating = document.querySelector("#rating").value
    errorbox.innerHTML = "";
    if (newtitle === ""){
        console.log("Du skrev ingen ting i feltet")
        errorbox.innerHTML = "Du skrev ingen ting i feltet";
    }
    else{
        addTodo(newtitle, newRating)
    }
    
}
        

async function addTodo(newtitle, newRating){
    try{
    const text = await fetch('/api/todos', {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: newtitle })});
    await loadTodos()
    }
    catch (error) {errorbox.innerHTML = "The server ran into problem. Try again later"}
}

function clearButton() {
    list = [];
    render()
}

async function toggleDone(itemid){
    var foundindex = list.findIndex(l => l.id == itemid)
    

    try{
        await fetch(`/api/todos/${itemid}`, {method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ done: !list[foundindex].done })})
        await loadTodos()
    }
    catch (error) {errorbox.innerHTML = "A server problem occurred. Try again later"}

}

async function removeTodo(itemid){
    try{
        await fetch(`/api/todos/${itemid}`, {method: 'DELETE'})
        await loadTodos()
    }
    catch (error) {errorbox.innerHTML = "A server problem occurred. Try again later"}

}

function makeListItem(text) {
    return `<li key="${text.id}"class="${text.done ? "done" : ""}"><input type="checkbox" ${text.done ? "checked" : ""} onchange="toggleDone('${text.id}')"/><input type="button" value="Remove" onclick="removeTodo('${text.id}')"/>${text.title}</li>`;
}

function render(){
    todobox.innerHTML = makeList();
    teller.innerHTML = "Du har " + list.length + " todos"
}


function makeList(){
    var listhtml = renderListContent()
    return `<ul>${listhtml}</ul>`
}

function renderListContent(){
    let htmlString = "";
        for (let item of list){
            htmlString += makeListItem(item)
        }
        return htmlString
}

async function loadTodos(){
    const text = await fetch('/api/todos');
    const todos = await text.json();
    list = todos
    errorbox.innerHTML = ""
    render()
}