//const todos = require("../models/to-dos");

const {
  viewToDosApi,
  createToDoApi,
  viewToDoApi,
  updateToDoApi,
  deleteToDoApi,
} = require("../api/to-dos");

// CRUD Operations
exports.viewToDos = async (req, res, next) => {
  try {
    const todos = await viewToDosApi();
    res.render("AllTodos", { todos: todos.data });
  } catch (error) {
    console.log(error);
  }
};

exports.viewToDo = async (req, res, next) => {
  try {
    const todo = await viewToDoApi(req.params.id);
    if (!todo) return res.render("SingleTodos", { message: "Todo not found" });
    res.render("SingleTodos", { todo: todo.data });
  } catch (error) {
    console.log(error);
  }
};

exports.createToDo = async (req, res, next) => {
  try {
    const { title, description, completed } = req.body;
    const result = await createToDoApi({ title, description, completed });
    if (!result)
      return res.render("SingleTodos", { message: "Todo not found" });
    res.status(302).redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.editToDo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description, completed } = req.body;
    const result = await updateToDoApi(id, { title, description, completed });
    if (!result) return res.send("Todo not found");
    res.status(302).redirect("/");
  } catch (error) {
    console.log(error);
  }
};
exports.renderEdit = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await viewToDoApi(id);
    // res.render("EditToDos");
    res.render("EditToDos", { todo: todo.data });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteToDo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await deleteToDoApi(id);
    if (!result) return res.render("AllTodos", { message: "Todo not found" });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
exports.RenderTodo = (req, res) => {
  res.render("AddTodos");
};
