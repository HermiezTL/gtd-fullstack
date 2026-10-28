const todos = [{id : 1, title : "Run", done : false, delete : false, rating : 1}, {id : 2, title : "Jump", done : false, delete : false, rating : 2}]

import express from 'express';
const app = express();
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