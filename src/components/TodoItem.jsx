import {
  useContext,
  useState,
} from 'react';
import {TodoContext} from '../App';
import {
  deleteTodo,
  doneTodo,
  updateTodo
} from '../api/todo';
import styles from '../Todo.css'
import {FormOutlined} from '@ant-design/icons';
import {Modal} from 'antd';
import todo from './Todo';

const TodoItem = (props) => {
  const {todoItem} = props
  const {dispatch} = useContext(TodoContext);
  const [text, setText] = useState(props.todoItem.text)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    updateTodo(todoItem.id, {
      ...todoItem,
      text: text
    }).then((todo) => {
      dispatch({
        type: 'UPDATE',
        payload: todo
      })
    })
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handleDone () {
    doneTodo(todoItem.id, {
      ...todoItem,
      done: true
    }).then((todo) => {
      dispatch({
        type: 'DONE',
        payload: todo.id
      })
    })
  }

  function handleDelete () {
    deleteTodo(todoItem.id).then((todo) => {
      dispatch({
        type: 'DELETE',
        payload: todo.id
      })
    })
  }

  function editText (event) {
    setText(event.target.value);
  }

  return (
    <div>
      <div className={'todo-item'}>
        <span className={todoItem.done ? 'done' : ''} onClick={handleDone}>{todoItem.text}</span>
        <FormOutlined type='primary' onClick={showModal}/>
      </div>
      <button onClick={handleDelete}>X</button>
      <Modal title='Edit Text' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <input type='text' value={typeof text === 'string' ? text : ''} onChange={editText}/>
      </Modal>
    </div>
  )
}

export default TodoItem