export const saveState: <T>(key: string, state: T) => void = (key, state) => {
  const stateAsString = JSON.stringify(state)
  localStorage.setItem(key, stateAsString)
}

export const restoreState: <T>(key: string) => T = (key) => {
  const saved = localStorage.getItem(key);
  const initialValue = JSON.parse(saved as string);
  return initialValue || [];
}
