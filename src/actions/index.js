import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const receiveData = (name, category, description, id) => ({
  type: types.RECEIVE_DATA,
  name,
  category,
  description,
  id
})

export const requestData = (id) => ({
  type: types.REQUEST_DATA,
  id
})

export function fetchExercises() {
  return function (dispatch) {
    return fetch('https://wger.de/api/v2/exerciseinfo/?language=2&status=2').then(
      response => response.json(),
      err => console.log('error', err)
    ).then(function(json) {

      if(json.results.length > 0) {
        json.results.map((result) => {
          let id = v4();
          const name = result.name;
          const category = result.category.name;
          const description = result.description;
          // console.log(name, category, description, id)
          dispatch(receiveData(name, category, description, id));
        })
      } else {
        console.log('Error')
      }
    })
  }
}
