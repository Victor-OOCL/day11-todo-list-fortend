import {
  useContext,
  useState
} from 'react';
import {TodoContext} from '../App';
import {addTodo} from '../api/todo';

const Generator = () => {
  const {dispatch} = useContext(TodoContext);
  const [text, setText] = useState("")

  function handleAdd (){
    if (text.trim() !== '') {
      addTodo({text, done: false}).then((todo) => {
        dispatch({
          type: 'ADD',
          payload: todo
        })
      })
    }
  }

  function handleChange (event) {
    setText(event.target.value)
  }

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleAdd}>add</button>
    </div>
  )
}

export default Generator