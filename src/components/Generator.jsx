import {
  useContext,
  useState
} from 'react';
import {TodoContext} from '../App';

const Generator = () => {
  const {dispatch} = useContext(TodoContext);
  const [text, setText] = useState("")

  function handleAdd () {
    if (text.trim() !== '') {
      dispatch({
        type: "ADD",
        payload: text
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