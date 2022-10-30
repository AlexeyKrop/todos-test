import {v1} from "uuid";
import {TasksType} from "../app/App";

export const getNewTask: (title: string) => TasksType = (title) => {
  return  {
    id: v1(),
    title,
    isDone: false,
  }
}