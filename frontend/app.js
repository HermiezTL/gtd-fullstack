window.onload = startup;

var demoItemTodoWhatever = {
    id : 1,
    title : "",
    done : false,
    delete : false,
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
    var newObject = {id : todoId, title : newtitle, done : false, delete : false, rating : newRating}
    list.push(newObject);
    list = list.sort((a, b) => a - b)
    todoId ++
    console.log(list)
    todobox.innerHTML = makeList();
}
function clearButton() {
    list = todobox.innerHTML = [];
}

function handletoggle(itemid){

    var foundindex = list.findIndex(l => l.id == itemid)
    list[foundindex].done = !list[foundindex].done
    console.log(list[foundindex])
    todobox.innerHTML = makeList();
}

function deleteItem(itemid){

    var foundindex = list.findIndex(l => l.id == itemid)
    list[foundindex].delete = !list[foundindex].delete
    console.log(list[foundindex])
    todobox.innerHTML = makeList();

}

function makeListItem(text) {
    return `<li key="${text.id}"style="display: ${text.delete ? 'none' : 'block'}; color: ${text.done ? 'red' : 'black'};"><input type="checkbox" ${text.done ? "checked" : ""} onchange="handletoggle('${text.id}')"/><input type="button" value="Delete" onclick="deleteItem('${text.id}')"/>${text.title}</li>`;
    
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

