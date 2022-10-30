import React from 'react';
import Checkbox from "antd/lib/checkbox/Checkbox";
import s from './Task.module.css'

export type TaskType = {
  taskId: string
  title: string
  changeTaskStatus: (taskId: string, isDone: boolean) => void
  isDone: boolean
}
export const Task: React.FC<TaskType> = ({title, taskId, isDone,changeTaskStatus}) => {

  const onChange: () => void = () => {
    changeTaskStatus(taskId, !isDone)
  }

  return (
    <div className={s.wrapper}>
      <Checkbox checked={isDone} onChange={onChange} className={s.checkbox}/>
      <span className={isDone ? `${s.isDone}` : `${s.title}`}>{title}</span>
    </div>
  );
};
