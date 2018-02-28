import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const receiveData = (name, category, description, id) => ({
  type: types.RECEIVE_DATA,
  name,
  category,
  description,
  id
})

export const requestData = () => ({
  type: types.REQUEST_DATA
});

export function fetchExercises(input) {
  return function (dispatch) {
    dispatch(requestData())
    return fetch('https://wger.de/api/v2/exerciseinfo/?language=2&status=2&limit=200').then(
      response => response.json(),
      err => console.log('error', err)
    ).then(function(json) {
      if(json.results.length > 0) {
        json.results.map((result) => {
          if (result.category.name === input) {
            let id = v4();
            const name = result.name;
            const category = result.category.name;
            const description = result.description.replace(/<[^>]*>/g, '');
            dispatch(receiveData(name, category, description, id));
          }
        })
      } else {
        console.log('Error')
      }
    })
  }
}
