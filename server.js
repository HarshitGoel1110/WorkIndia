const express = require('express');
const bodyParser = require('body-parser');
var mydb_connection=require('./mydb_connection');
const tasks = require("./tasks")

const app = express();
global.con=mydb_connection;

const port = process.env.PORT || 5000;
app.use("/app/tasks",tasks)

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});