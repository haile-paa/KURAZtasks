require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/task");

const app = express();
app.use(express.json());

// Routes
app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const { title } = req.body;
  const newTask = new Task({ title });
  await newTask.save();
  res.status(201).json(newTask);
});

app.put("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { completed: true },
    { new: true }
  );
  res.json(updatedTask);
});

app.delete("/api/tasks/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.status(204).send();
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
