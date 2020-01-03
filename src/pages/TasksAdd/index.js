import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';
import TaskItem from '../../components/TaskItem/index';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import { Container, ContainerMain, Form, ContainerList } from '../../styles/tasks';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default class TasksAdd extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
      tasks: [],
    };
  }

  componentDidMount() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.setState({ tasks: JSON.parse(tasks) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { tasks } = this.state;
    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const tasks = reorder(
      this.state.tasks,
      result.source.index,
      result.destination.index
    );
    this.setState({
      tasks,
    });
  };

  handleInputChange = e => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { tasks, newTask } = this.state;
    if (newTask === '' || newTask === ' ') {
      toast.error('Digite uma tarefa válida');
    } else {
      this.setState({
        tasks: [...tasks, { title: newTask, done: false }],
        newTask: '',
      });
      toast.success('Tarefa adicionada com sucesso');
    }
  };

  handleDelete = task => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(t => t !== task) });
  };

  handleDone = e => {
    const { tasks } = this.state;
    const { value } = e.target;
    let taskId;
    tasks.map((arr, idx) => {
      if (arr.title === value) {
        taskId = idx;
      }
    });
    tasks[taskId].done = !tasks[taskId].done;
    this.setState({ tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <>
        <Container>
          <ContainerMain>
            <Form onSubmit={this.handleSubmit}>
              <Input
                type="text"
                onChange={this.handleInputChange}
                value={newTask}
                placeholder="Adicione uma tarefa"
              />
              <Button type="submit" label=<FaPlus size={16} /> />
            </Form>

            <ContainerList>
              <h2>Tarefas pendentes</h2>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {droppableProvided => (
                    <div ref={droppableProvided.innerRef}>
                      {tasks.length < 1 ? (
                        <h3>Ainda não há tarefas</h3>
                      ) : (
                        tasks.map((task, index) => (
                          <Draggable
                            key={task.title}
                            draggableId={task.title}
                            index={index}
                          >
                            {draggableProvided => (
                              <div
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.draggableProps}
                                {...draggableProvided.dragHandleProps}
                              >
                                {!task.done && (
                                  <TaskItem
                                    task={task}
                                    index={index}
                                    done={e => this.handleDone(e)}
                                    onDelete={() => this.handleDelete(task)}
                                  />
                                )}
                              </div>
                            )}
                          </Draggable>
                        ))
                      )}

                      {droppableProvided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </ContainerList>
          </ContainerMain>
        </Container>
      </>
    );
  }
}
