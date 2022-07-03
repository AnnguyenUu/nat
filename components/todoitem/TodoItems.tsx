import React from 'react';

interface TodoProps {
  key: number;
  done: boolean;
  title: string;
  notes: string[];
}
class TodoItems extends React.Component {
  constructor(props: TodoProps) {
    super(props);
  }
  

  render() {
    console.log('re renders');

    const { done, title, notes } = this.props as TodoProps;
    
    return (
      <div style={{ marginBottom: 12 }}>
        <div>
          {done ? '✓' : '▢'} {title}
        </div>
        <div>({notes.join(', ')})</div>
      </div>
    );
  }
}

export default TodoItems;
