import TodoGroup from './TodoGroup';
import {useContext} from 'react';
import {TodoContext} from '../App';
import NoteItem from './NoteItem';
import Generator from './Generator';

const TodoList = () => {
  const {state} = useContext(TodoContext)

  return (
    <div>
      <div className='title'>Todo List</div>
      <Generator/>
      {state.length === 0 ? <NoteItem/> : <TodoGroup/>}
    </div>
  )
}

export default TodoList