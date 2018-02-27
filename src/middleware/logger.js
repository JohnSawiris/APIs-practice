const logger = store => next => action => {
  console.log('Original state:', store.getState());
  console.log('current action', action);
  next(action);
  console.log('New updated state', store.getState());
}

export default logger;
