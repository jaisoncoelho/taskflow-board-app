import React from 'react';

interface TaskProps {
  name: string;
  index: number;
  moveLeft?: () => void;
  moveRight?: () => void;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <div className='task'>
      <button onClick={props.moveLeft}>&lt;</button>
      <span>{props.name}</span>
      <button onClick={props.moveRight}>&gt;</button>
    </div>
  )
}

export default Task;