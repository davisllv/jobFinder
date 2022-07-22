const express = require("express");
const Router = express.Router();
const JobModel = require("../models/JobModel");

Router.get("/", (req, res) => {
  return res.json({ message: "Hi" });
});

Router.post("/add", async (request, response) => {
  const { title, description, salary, company, email, newJob } = request.body;
  console.log(title);
  //   const job = await JobModel.create({
  //     ...req.body,
  //   });
  console.log(request.body);
  response.json({ message: title });
});

module.exports = Router;
