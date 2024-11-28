import TodoGroup from './TodoGroup';
import {useContext} from 'react';
import {TodoContext} from '../App';
import NoteItem from './NoteItem';

const TodoList = () => {
  const {state} = useContext(TodoContext)
  return (
    <div>
      {state.length === 0 ? <NoteItem/> : <TodoGroup/>}
    </div>
  )
}

export default TodoList