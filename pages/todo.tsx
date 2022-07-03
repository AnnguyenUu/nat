import { Card } from 'antd';
import React, { Component } from 'react';
import TodoItems from '../components/todoitem/TodoItems';

interface TodoProp {
  list: {
    title: string;
    done: boolean;
    notes: string[];
  }[];
  count: number;
}
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { title: 'take out the trash', done: false, notes: ['boring'] },
        { title: 'walk dog', done: true, notes: ['exercise'] },
        { title: 'read about React', done: false, notes: ['fun!'] },
      ],
      count: 1,
    };
  }
  render() {
    const { list, count } = this.state as TodoProp;
    return (
      <Card>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() =>
              this.setState({
                count: count + 1,
              })
            }
          >
            Click me
          </button>
          <div>{count}</div>
        </div>

        {list.map((todo, i) => {
          return (
            <TodoItems
              key={i}
              // @ts-ignore
              title={todo.title}
              done={todo.done}
              notes={todo.notes}
            />
          );
        })}
      </Card>
    );
  }
}

export default Todo;
