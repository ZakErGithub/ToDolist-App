const { checktoDo } = require("../helpers/helper");

exports.check = async (req, res, next) => {
  const response = {};
  const id = req.params.id;
  const user = req.headers.userid;
  req.developer = "ZakErr";
  response.msg = "you are not autorized for this operation";
  response.status = 401;
  const settled = await checktoDo(id, user);
  return settled ? next() : res.status(401).json(response);
};
