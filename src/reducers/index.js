import { combineReducers } from 'redux';
import addExerciseReducer from './add-exercise-reducer';

const rootReducer = combineReducers({
  exercises: addExerciseReducer
});

export default rootReducer;
