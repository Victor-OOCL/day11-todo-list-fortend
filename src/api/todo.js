import instance from './interceptor';

export const getAllTodos = () => {
  return instance.get("").then((response) => {
    return response.data
  })
}

export const addTodo = (todo) => {
  return instance.post("", todo).then((response) => {
    return response.data
  })
}

export const deleteTodo = async (id) => {
  const response = await instance.delete("/" + id);
  return response.data
}

export const updateTodo = async (id, todo) => {
  const response = await instance.put("/" + id, todo);
  return response.data
}

