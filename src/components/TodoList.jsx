import TodoGroup from './TodoGroup';
import {
  useContext,
  useEffect,
  useState
} from 'react';
import {TodoContext} from '../App';
import NoteItem from './NoteItem';
import Generator from './Generator';
import styles from '../Todo.css'
import {getAllTodos} from '../api/todo';
import { Spin } from 'antd';


const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext)
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    getAllTodos().then((todos) => {
        dispatch({
          type: 'INIT',
          payload: todos
        })
      }
    ).finally(()=>{
      setLoading(true);
    });
  },[]);

  return (
    <div>
      {loading ?'':<Spin/>}
      <div className='title'>Todo List</div>
      {state.length === 0 ? <NoteItem/> : <TodoGroup/>}
      <Generator/>
    </div>
  )
}

export default TodoList