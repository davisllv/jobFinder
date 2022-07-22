const express = require("express");
const app = express();
const db = require("./database/connection");
const jobsRota = require("./routes/jobsRotas");
const bodyParser = require("body-parser");

app.listen(3333);

// body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use("/jobs", jobsRota);
