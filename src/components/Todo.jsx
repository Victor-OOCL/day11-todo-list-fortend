import {
  useContext,
  useEffect,
  useState
} from 'react';
import {getAllTodos} from '../api/todo';
import {TodoContext} from '../App';
import TodoList from './TodoList';
import {Spin} from 'antd';

const Todo = () => {
  const [loading,setLoading] = useState(false);
  const {dispatch} = useContext(TodoContext);

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
  return(<div>
    {loading?<TodoList/>:<Spin/>}
  </div>)
}
export default Todo