import React, { useState } from 'react';
import Task from './Task';
import './App.css';

interface TasksState {
  [key: string]: string[];
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TasksState>({
    '1': [
      'Task 1',
      'Task 2'
    ],
    '2': [
      'Task 3',
      'Task 4'
    ]
  });

  const move = (task: string, index: number, current: number, direction: 'left' | 'right') => {
    const isInvalidMove = (current === 1 && direction === 'left') ||
                        (current === 2 && direction === 'right')
    if (isInvalidMove) return;

    const target = direction === 'left' ? current - 1 : current + 1;
    const previous = tasks[`${current}`].filter(t => t !== task);
    const next = [...tasks[`${target}`]];
    next.splice(index, 0, task);

    setTasks(prevTasks => ({
      ...prevTasks,
      [`${current}`]: previous,
      [`${target}`]: next
    }));
  }

  const add = (target: number) => {
    const task = window.prompt("Enter a name");
  }

  return (
    <div className='container'>
      { Object.entries(tasks).map(([listKey, listTasks]) => (
        <div className='list-group' >
          <div className='task-list' key={listKey}>
            { listTasks.map((task, index) => (
              <Task key={index} 
                    name={task} 
                    index={index}
                    moveLeft={() => move(task, index, parseInt(listKey), 'left')}
                    moveRight={() => move(task, index, parseInt(listKey), 'right')} 
              />
            ))}
          </div>
          <button onClick={() => add(parseInt(listKey))}>New Task</button>
        </div>  
      )) }
    </div>
  );
};

export default App;
