import TodoGroup from './TodoGroup';
import {useContext} from 'react';
import {TodoContext} from '../App';
import NoteItem from './NoteItem';
import Generator from './Generator';

const TodoList = () => {
  const {state} = useContext(TodoContext)
  return (
    <div>
      <span className='title'>Todo List</span>
      {state.length === 0 ? <NoteItem/> : <TodoGroup/>}
      <Generator/>
    </div>
  )
}

export default TodoList