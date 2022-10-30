import {FilterValuesType, TasksType} from "../app/App";

export const getFilteredTasks = (tasks: TasksType[], filter: FilterValuesType): TasksType[] => {
  if (filter === "active") {
    return tasks.filter(t => !t.isDone);
  }
  if (filter === "completed") {
    return tasks.filter(t => t.isDone);
  }
  return tasks
}