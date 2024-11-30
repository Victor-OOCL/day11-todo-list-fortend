import {
  useContext,
} from 'react';
import {TodoContext} from '../App';
import {
  deleteTodo,
  doneTodo
} from '../api/todo';
import styles from '../Todo.css'

const TodoItem = (props) => {
  const {
          todoItem
        } = props
  const {dispatch} = useContext(TodoContext);

  function handleDone () {
    doneTodo(todoItem.id).then((todo)=> {
      dispatch({
        type: 'DONE',
        payload: todo.id
      })
    })
  }

  function handleDelete () {
    deleteTodo(todoItem.id).then((todo) => {
      dispatch({
        type: 'DELETE',
        payload: todo.id
      })
    })
  }

  return (
    <div>
      <div className={'todo-item'}><span className={todoItem.done ? 'done' : ''} onClick={handleDone}>{todoItem.text}</span></div>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default TodoItem