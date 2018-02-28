import constants from './../constants';
const { types } = constants;

const addExerciseReducer = (state = {}, action) => {
  let newExerciseEntry;
  let newState;
  switch (action.type) {
    case types.REQUEST_DATA:
      newExerciseEntry = {
        isFetching: true
      };
      newState = Object.assign({}, state, {
        [action.id]: newExerciseEntry
      });
      return newState;
    case types.RECEIVE_DATA:
      newExerciseEntry = {
        isFetching: false,
        name: action.name,
        category: action.category,
        description: action.description,
        id: action.id
      };
      newState = Object.assign({}, state, {
        [action.id]: newExerciseEntry
      });
      return newState;
    case types.RECALL_DATA:
      newState = {};
      return newState;
    default:
      return state;
  }
}

export default addExerciseReducer;
