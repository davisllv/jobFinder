const express = require("express");
const app = express();
const db = require("./database/connection");
const jobsRota = require("./routes/jobsRotas");
const bodyParser = require("body-parser");

app.listen(3333, () => {
  console.log("Servidor Iniciado");
});

// body parser

app.use(bodyParser.urlencoded({ extended: false }));

// db conection

async function connectIntoDataBase() {
  try {
    await db.authenticate();
    console.log("Connection has been stablished");
  } catch (err) {
    console.log("Unable to connect the database: ", err);
  }
}

connectIntoDataBase();

//routes
app.get("/", (request, response) => {
  return response.json({ message: "Servidor rodando man" });
});

app.use("/job", jobsRota);
