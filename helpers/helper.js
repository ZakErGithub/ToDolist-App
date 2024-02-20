const { viewToDoApi } = require("../api/to-dos");
exports.checktoDo = async (toDoId, userId) => {
  const item = await viewToDoApi(toDoId);
  return item.data.user_id == userId;
};
