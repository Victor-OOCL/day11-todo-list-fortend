import {
  useContext,
  useState
} from 'react';
import {TodoContext} from '../App';

const TodoItem = (props) => {
  const {
          todoItem,
          index
        } = props
  const {dispatch} = useContext(TodoContext);

  function handleDone () {
    dispatch({
      type: 'DONE',
      payload: props.index
    })
  }

  return (
    <div>
      <span style={{textDecoration: todoItem.done ? 'line-through' : 'none'}}>{todoItem.text}</span>
      <button onClick={handleDone}>X</button>
    </div>
  )
}

export default TodoItem