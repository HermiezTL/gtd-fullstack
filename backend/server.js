const todos = [ 
    {id : 1, title : "Run", done : false, delete : false, rating : 1},
    {id : 2, title : "Jump", done : false, delete : false, rating : 2},
    {id : Date.now(), title : "Land", done : false, delete : false, rating : 3},
]
    



import express from 'express';
const app = express();
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
    res.json(todos);
});

app.get("/api/todos", (req, res) => {
    res.json(todos);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post("/api/todos", (req, res) => {
    const name = req.body.name;
    console.log(name);
    const todo = {id : Date.now(), title : name, done : false, rating : 4}

    todos.push(todo)
    res.status(201).json(todo)
});

