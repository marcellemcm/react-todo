import React, { Component } from 'react';
import TaskItem from '../TaskItem/index';
import { Button, Container, InputAdd } from './styles';

export default class TaskList extends Component {
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

  handleInputChange = e => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { tasks, newTask } = this.state;
    this.setState({
      tasks: [...tasks, { title: newTask, done: false }],
      newTask: '',
    });
  };

  handleDelete = task => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(t => t !== task) });
  };

  handleDone = e => {
    const { tasks } = this.state;
    const { value } = e.target;
    let bananax;
    tasks.map((arr, idx) => {
      if (arr.title === value) {
        return (bananax = idx);
      }
    });
    tasks[bananax].done = !tasks[bananax].done;

    this.setState({ tasks });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  render() {
    const { newTask, tasks } = this.state;
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <InputAdd
            type="text"
            onChange={this.handleInputChange}
            value={newTask}
          />
          <Button type="submit">Adicionar</Button>
          <ul>
            {tasks.map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                index={index}
                done={e => this.handleDone(e)}
                onDelete={() => this.handleDelete(task)}
              />
            ))}
          </ul>
        </form>
      </Container>
    );
  }
}
