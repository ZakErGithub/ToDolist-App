const express = require("express");

const {
  viewToDos,
  viewToDo,
  createToDo,
  editToDo,
  deleteToDo,
  renderEdit,
  RenderTodo,
} = require("../controllers/to-dos");
const router = express.Router();
const { check } = require("../middlewares/authenticator");

const { Sanitaze } = require("../middlewares/Validation");
const { Validate } = require("../middlewares/Sanitize");

router.get("/", viewToDos); //render all todos
router.get("/delete/:id", deleteToDo); //delete todo
router.post("/", Sanitaze, Validate, createToDo); // create todo
router.post("/update/:id", Sanitaze, Validate, editToDo); // update todo
router.get("/update/:id", renderEdit); // update todo
router.get("/view/:id", viewToDo); // get todo
router.get("/add", RenderTodo); // add todo
router.post("/add", Sanitaze, Validate, createToDo); // add todo

module.exports = router;
