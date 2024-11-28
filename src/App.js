import {
  createContext,
  useReducer
} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {
  initialState,
  todoReducer
} from "./context/todoReducer";
import Generator from './components/Generator';

export const TodoContext = createContext();

function App () {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='App'>
      <TodoContext.Provider value={{
        state,
        dispatch
      }}>
        <TodoList/>
        <Generator/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
