import React from 'react';
// import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Container } from './styles';

export default function TaskItem({ task, onDelete, done, index }) {
  return (
    <Container>
      <label>
        <input
          type="checkbox"
          name={task.tilte}
          value={task.title}
          onChange={done}
          checked={task.done ? 'checked' : ''}
        />
        <p className={task.done ? 'doneTask' : 'active'}>{task.title}</p>
      </label>
      <button type="button" onClick={onDelete}>
        <FaRegTrashAlt size={14} />
      </button>
    </Container>
  );
}

// TaskItem.defaultProps = {
//   task: 'Oculto',
// };

// TaskItem.propTypes = {
//   task: PropTypes.string,
//   onDelete: PropTypes.func.isRequired,
// };
