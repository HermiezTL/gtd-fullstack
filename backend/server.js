import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Hallo det er herman som skriver. Herman er god på gitar.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});