
    

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { parse } from 'yaml';
import path from 'path';
import pool from './db.js';

const todos = [ 
    
]

pool.query('SELECT now()')
    .then(res => {
        console.log('Database connected! Time from DB:', res.rows[0].now);
    })
    .catch(err => {
        console.error('Error while connecting to the DB:', err);
    });

const text = readFileSync('./openapi.yaml', 'utf8');
const openapiDoc = parse(text);


const app = express();
const frontendDir = path.join(import.meta.dirname, '..', 'frontend/');

app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDoc));
const port = 3000;

app.use(express.static(frontendDir))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
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



app.get("/api/todos", async (req, res) => {
   const result = await pool.query('SELECT * FROM todos ORDER BY id')
   res.json(result.rows);
});


app.post("/api/todos", async (req, res) => {
    const name = req.body.name;
    const result = await pool.query(
        'INSERT INTO todos (name) VALUES ($1) RETURNING *',
        [name]
    );
    res.status(201).json(result.rows[0]);
});