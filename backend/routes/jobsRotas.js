const express = require("express");
const Router = express.Router();
const JobModel = require("../models/JobModel");

Router.get("/", (req, res) => {
  return res.json({ message: "Hi" });
});

Router.post("/add", async (request, response) => {
  const { title, description, salary, company, email, newJob } = request.body;
  const job = await JobModel.create({
    title,
    description,
    salary,
    company,
    email,
    newJob,
  });
  console.log(request.body);
  response.json({ message: `${job} has been created` });
});

module.exports = Router;
