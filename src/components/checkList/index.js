import { h, Component } from 'preact';
import style from './style';

export default class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Buy water', done: false },
        { id: 2, text: 'Stock up on non-perishable food', done: false },
        { id: 3, text: 'Charge all electronic devices', done: false },
        { id: 4, text: 'Secure outdoor objects', done: false },
        { id: 5, text: 'Check batteries in flashlights and radios', done: false },
      ],
    };
  }

  onCheck = (id) => {
    this.setState((prevState) => {
      const tasks = prevState.tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }
        return task;
      });
      return { tasks };
    });
  };

  renderTask = (task) => {
    return (
      <div key={task.id} class={task.done ? style.taskDone : style.task}>
        <label>
          <input type="checkbox" checked={task.done} onChange={() => this.onCheck(task.id)} />
          {task.text}
        </label>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h2>Tasks you should do</h2>
        <div class={style.checklist}>{this.state.tasks.map(this.renderTask)}</div>
      </div>
    );
  }
}