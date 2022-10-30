import React, {useEffect, useState} from 'react';
import {restoreState, saveState} from "../utils/localStorage";
import s from './App.module.css'
import {getNewTask} from "../utils/getNewTask";
import {getFilteredTasks} from "../utils/getFilteredTasks";
import {Task} from "../components/Task/Task";
import {AddItemForm} from "../components/AddItemForm/AddItemForm";
import {FilterButton} from "../components/FilterButton/FilterButton";

export type FilterValuesType = 'all' | 'active' | 'completed' | 'clear completed'
export type TasksType = {
  id: string,
  title: string,
  isDone: boolean,
}

export const App = () => {
  const [tasks, setTask] = useState<TasksType[]>(restoreState('tasks'))
  const [filter, setFilter] = useState<FilterValuesType>("all")

  const itemsLength = tasks.filter(task => !task.isDone).length

  useEffect(() => {
    saveState('tasks', tasks)
  }, [tasks])

  const addTask: (title: string) => void = (title) => {
    const newTask = getNewTask(title)
    setTask([newTask, ...tasks])
  }

  const changeFilter: (filter: FilterValuesType) => void = (filter) => {
    setFilter(filter)
  }

  const changeTaskStatus: (taskId: string, isDone: boolean) => void = (taskId, isDone) => {
    setTask(tasks.map((task) => task.id === taskId ? {...task, isDone} : task))
  }

  const filteredTasks = getFilteredTasks(tasks, filter)

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>todos</h1>
      <div className={s.tasks}>
        <AddItemForm addItem={addTask}/>
        {filteredTasks.map(({id, title, isDone}) => <div key={id}><Task taskId={id}
                                                                        title={title}
                                                                        changeTaskStatus={changeTaskStatus}
                                                                        isDone={isDone}/>
        </div>)}
        <div className={s.bottomGroup}>
          <span className={s.item}>{itemsLength} items left</span>
          <FilterButton changeFilter={changeFilter}/>
        </div>
      </div>
    </div>
  );
}

