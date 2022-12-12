import { React, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './TodoItem.module.css';

function TodoItem(props) {
  const {
    todo, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;

  const { completed, id, title } = todo;

  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing({ editing: false });
    }
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

TodoItem.defaultProps = {
  id: null,
  handleChangeProps: null,
  todo: null,
  deleteTodoProps: null,
  title: null,
  completed: null,
  setUpdate: null,
};

TodoItem.propTypes = {
  id: PropTypes.number,
  handleChangeProps: PropTypes.func,
  todo: PropTypes.string,
  title: PropTypes.string,
  deleteTodoProps: PropTypes.func,
  completed: PropTypes.bool,
  setUpdate: PropTypes.func,
};

export default TodoItem;
