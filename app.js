const express = require("express");

const app = express();

app.listen(3333, () => {
  console.log("Servidor Iniciado");
});

app.get("/", (request, response) => {
  return response.json({ message: "Servidor rodando man" });
});
