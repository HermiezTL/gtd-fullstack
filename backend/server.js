const todos = [ 
    
]
    

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { parse } from 'yaml';
import path from 'path';


const text = readFileSync('./openapi.yaml', 'utf8');
const openapiDoc = parse(text);


const app = express();
const frontendDir = path.join(import.meta.dirname, '..', 'frontend/');

app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDoc));
const port = 3000;

app.use(express.static(frontendDir))

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

app.delete("/api/todos/:id", (req, res) => {
    console.log(Number(req.params.id));
    var foundindex = todos.findIndex(l => l.id === Number(req.params.id))
    if (foundindex === -1) {
        console.log("unknown");
        res.status(404).json({ error: "todo not found"})
    } else {
        console.log("known");
        todos.splice(foundindex, 1)
        res.status(204).end()
    }
})

app.patch("/api/todos/:id", (req, res) => {
    console.log(Number(req.params.id));
    var foundindex = todos.findIndex(l => l.id === Number(req.params.id))
    if (foundindex === -1) {
        console.log("unknown");
        res.status(404).json({ error: "todo not found"})
    } else {
        console.log("known");
        todos[foundindex].done = req.body.done;
        res.status(204).end()
    }
})