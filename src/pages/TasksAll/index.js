import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaSearch } from 'react-icons/fa';
import TaskItem from '../../components/TaskItem/index';
import Input from '../../components/Input/index';

import { Container, ContainerMain, ContainerList, Form } from '../../styles/tasks';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default class TasksAll extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      search: '',
      tasksResults: [],
      page: 1,
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
      this.setState({ tasksResults: [...tasks] });
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

  handleInputChange = e => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    const { search, tasksResults, tasks } = this.state;
    const filterResults = tasksResults.filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <>
        <Container>
          <ContainerMain>
            <Form>
              <i>
                <FaSearch size={20} color="#5fdacf" />
              </i>
              <Input
                type="search"
                onChange={e => this.handleInputChange(e)}
                value={search}
                placeholder="Digite para buscar uma tarefa"
              />
            </Form>

            <ContainerList>
              <h2>Todas as Tarefas</h2>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {droppableProvided => (
                    <div ref={droppableProvided.innerRef}>
                    {tasks.length < 1 ? (
                        <h3>Ainda não há tarefas</h3>
                      ) : (
                        filterResults.map((task, index) => (
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
                                <TaskItem
                                  task={task}
                                  index={index}
                                  done={e => this.handleDone(e)}
                                  onDelete={() => this.handleDelete(task)}
                                />
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
