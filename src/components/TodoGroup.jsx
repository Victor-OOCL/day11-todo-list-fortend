import {
  useContext,
  useState,
} from 'react';
import {TodoContext} from '../App';
import TodoItem from './TodoItem';
import {Pagination} from 'antd';

const TodoGroup = () => {
  const {
          state: todoList,
        } = useContext(TodoContext);
  const showTotal = (total) => `Total ${todoList.length} todo Items`;
  const [current, setCurrent] = useState(1);  // 当前页
  const total = todoList.length;
  const [pageSize, setPageSize] = useState(5);
  const currentData = todoList.slice((current - 1) * pageSize, current * pageSize);
  const onPageChange = (page) => {
    setCurrent(page);
  };

  const onPageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrent(1);
  };

  return (
    <div>
      {currentData.map((item) => {
        return <TodoItem key={item.id} todoItem={item}/>
      })}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
      }}>
        <Pagination
          size='small'
          total={total}
          showTotal={showTotal}
          pageSize={pageSize}
          onChange={onPageChange}
          onShowSizeChange={onPageSizeChange}
          pageSizeOptions={[
            '5',
            '10',
            '15',
            '20'
          ]}
          showSizeChanger
          showQuickJumper
        />
      </div>
    </div>
  )
}

export default TodoGroup;