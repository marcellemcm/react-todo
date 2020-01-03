import React from 'react';
// import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Container, ContainerTask, Button } from './styles';

export default function TaskItem({ task, onDelete, done }) {
  return (
    <>
      <Container>
        <ContainerTask>
          <input
            type="checkbox"
            name={task.title}
            value={task.title}
            onChange={done}
            checked={task.done ? 'checked' : undefined }

          />
          <label>
            <p className={task.done && 'doneTask'}>{task.title}</p>
          </label>
        </ContainerTask>
        <Button type="button" onClick={onDelete}>
          <FaRegTrashAlt color="gray" size={14} />
        </Button>
      </Container>
    </>
  );
}

// // TaskItem.defaultProps = {
// //   task: 'Oculto',
// // };

// // TaskItem.propTypes = {
// //   task: PropTypes.string,
// //   onDelete: PropTypes.func.isRequired,
// // };
