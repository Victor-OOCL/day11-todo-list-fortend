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

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Link
} from 'react-router-dom';
import NotFound from './components/NotFound';
import DoneList from './components/DoneList';
import Todo from './components/Todo';

export const TodoContext = createContext();

function App () {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='App'>
      <TodoContext.Provider value={{
        state,
        dispatch
      }}>
        <Router>
          <nav>
            <ul className={'navbar'}>
              <li className={'navItem'}>
                <Link to="/todo-list" className={'navLink'}>Todo List</Link>
              </li>
              <li className={'navItem'}>
                <Link to="/done-list" className={'navLink'}>Done List</Link>
              </li>
              <li className={'navItem'}>
                <Link to="/help" className={'navLink'}>Help</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path={"/todo-list"} element={<Todo/>}></Route>
            <Route path={"/done-list"} element={<DoneList/>}></Route>
            <Route path={"/"} element={<Navigate to={"/todo-list"}/>}></Route>
            <Route path={"*"} element={<NotFound/>}></Route>
          </Routes>
        </Router>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
