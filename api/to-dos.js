const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:5000/todos",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});

exports.viewToDosApi = () => {
  return instance.get("/");
};

exports.viewToDoApi = (id) => {
  return instance.get(`/${id}`);
};

exports.createToDoApi = (body) => {
  return instance.post(`/`, body);
};

exports.updateToDoApi = (id, body) => {
  return instance.put(`/${id}`, body);
};

exports.deleteToDoApi = (id) => {
  return instance.delete(`/${id}`, id);
};
