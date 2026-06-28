import express from "express";
import TodoModel from "../models/Todo.Model.js";

const router = express.Router();

// GET/api/todos
// Fetch all todos from DB
router.get("/", async (req, res) => {
  try {
    const todos = await TodoModel.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST/api/todos
// Create a new todo
// POST /api/todos
// Create a new todo
router.post("/", async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  try {
    const newTodo = await TodoModel.create({ title });
    
    // ✅ FIX: Send the newly created document back to the client with HTTP 201 (Created) status
    return res.status(201).json(newTodo);
    
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// PUT/api/todos/:id
// Update the entire todo
router.put("/:id", async (req, res) => {
  const { title, isCompleted } = req.body;
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      { title, isCompleted },
      { returnDocument: "after", runValidators: true },
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH/api/todos/:id
// Partialy update a single property
router.patch("/:id", async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.isCompleted = !todo.isCompleted;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE/api/todos/:id
// Delete a todo from database
router.delete("/:id", async (req, res) => {
  try {
    const todo = await TodoModel.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res
      .status(200)
      .json({ message: "Todo deleted successfully", id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;