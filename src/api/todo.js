import axios from 'axios';

const request = axios.create({
  baseURL: "https://67495c7e868020296630aad3.mockapi.io/todo",
});

export const getAllTodos = () => {
  return request.get("/todoItem").then((response) => {
    return response.data
  })
}

export const addTodo = (todo) => {
  return request.post("/todoItem", todo).then((response) => {
    return response.data
  })
}

export const deleteTodo = async (id) => {
  const response = await request.delete("/todoItem/" + id);
  return response.data
}

export const doneTodo = async (id, todo) => {
  const response = await request.put("/todoItem/" + id, todo);
  return response.data
}

export const updateTodo = async (id, todo) => {
  const response = await request.put("/todoItem/" + id, todo);
  return response.data
}

