window.onload = startup;

var demoItemTodoWhatever = {
    id : 1,
    title : "",
    done : false,
    rating : 0
}
var list = []
var todoId = 0

var todobox = document.querySelector("#todoList");


function startup() {
    document.querySelector("#addButton").onclick = addButton;
    document.querySelector("#clearButton").onclick = clearButton;
    document.querySelector("#rating").value
}

function addButton() {
    var newtitle = document.querySelector("#input").value
    var newRating = document.querySelector("#rating").value
    addTodo(newtitle, newRating)
}

function addTodo(newtitle, newRating){
var newObject = {id : todoId, title : newtitle, done : false, rating : newRating}
    list.push(newObject);
    list = list.sort(((a, b) => a - b))
    todoId ++
    console.log(list)
    render()
}

function clearButton() {
    list = [];
    render()
}

function handletoggle(itemid){

    var foundindex = list.findIndex(l => l.id == itemid)
    list[foundindex].done = !list[foundindex].done
    console.log(list[foundindex])
    render()
}

function removeTodo(itemid){
    list = list.filter(n => n.id !== Number(itemid))
    render()

}

function makeListItem(text) {
    return `<li key="${text.id}"style="color: ${text.done ? 'red' : 'black'};"><input type="checkbox" ${text.done ? "checked" : ""} onchange="handletoggle('${text.id}')"/><input type="button" value="Remove" onclick="removeTodo('${text.id}')"/>${text.title}</li>`;
    
}

function render(){
    todobox.innerHTML = makeList();
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

