import {useContext} from 'react';
import {TodoContext} from '../App';
import TodoItem from './TodoItem';

const TodoGroup = () => {
  const {state: todoList} = useContext(TodoContext)

  return (
    <div>
      {todoList.map((item, index) => {
        return <TodoItem todoItem={item} index={index}/>
      })}
    </div>
  )
}

export default TodoGroup;