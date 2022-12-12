import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, id, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

TodosList.defaultProps = {
  todos: null,
  id: null,
  handleChangeProps: null,
  deleteTodoProps: null,
  setUpdate: null,
};
TodosList.propTypes = {
  todos: PropTypes.string,
  id: PropTypes.string,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
