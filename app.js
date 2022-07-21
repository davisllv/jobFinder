const express = require("express");
const app = express();

const db = require("./database/connection");

app.listen(3333, () => {
  console.log("Servidor Iniciado");
});

// db conection

db.authenticate()
  .then(() => {
    console.log("Conectou");
  })
  .catch((err) => console.log("Errors", err));

//routes
app.get("/", (request, response) => {
  return response.json({ message: "Servidor rodando man" });
});
