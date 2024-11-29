import {
  useContext,
} from 'react';
import {TodoContext} from '../App';

const TodoItem = (props) => {
  const {
          todoItem
        } = props
  const {dispatch} = useContext(TodoContext);

  function handleDone () {
    dispatch({
      type: 'DONE',
      payload: todoItem.id
    })
  }

  function handleDelete () {
    dispatch({
      type: 'DELETE',
      payload: todoItem.id
    })
  }

  return (
    <div>
      <span className={todoItem.done? 'done':''} onClick={handleDone}>{todoItem.text}</span>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default TodoItem