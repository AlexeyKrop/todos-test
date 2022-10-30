import {getNewTask} from "../getNewTask";

test('add new task', () => {
  const newState = getNewTask('MongoDB')
  expect(newState.title).toBe('MongoDB')
})