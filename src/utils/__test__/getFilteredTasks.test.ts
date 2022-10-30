import {TasksType} from "../../app/App";
import {getFilteredTasks} from "../getFilteredTasks";

let initialState: TasksType[]
beforeEach(() => {
  initialState = [
    { id: '1', title: 'React', isDone: false },
    { id: '2', title: 'Redux', isDone: true },
    { id: '22', title: 'Redux-toolkit', isDone: false },
    { id: '222', title: 'Node JS', isDone: false },
  ]
})

test('filter by completed', () => {
  const newState = getFilteredTasks(initialState, 'completed')
  expect(newState.length).toBe(1)
})
test('filter by active', () => {
  const newState = getFilteredTasks(initialState, 'active')
  expect(newState.length).toBe(3)
})
test('filter by all', () => {
  const newState = getFilteredTasks(initialState, 'all')
  expect(newState.length).toBe(4)
})