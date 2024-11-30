import {
  useContext,
} from 'react';
import {TodoContext} from '../App';
import TodoItem from './TodoItem';

const TodoGroup = () => {
  const {
          state: todoList,
        } = useContext(TodoContext)

  return (
    <div>
      {todoList.map((item) => {
        return <TodoItem key={item.id} todoItem={item}/>
      })}
    </div>
  )
}

export default TodoGroup;