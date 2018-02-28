import React from 'react';
import { connect } from 'react-redux';
import { fetchExercises } from './../actions';

const Search = ({ dispatch }) => {
    return(
      <div>
      <select onChange={(e) => {
        let input = e.target.value;
        dispatch(fetchExercises(input))
      }}>
        <option value='select'>Select muscule group</option>
        <option value='Abs'>Abs</option>
        <option value='Legs'>Legs</option>
        <option value='Arms'>Arms</option>
        <option value='Chest'>Chest</option>
        <option value='Back'>Back</option>
        <option value='Shoulders'>Shoulders</option>
      </select>
      </div>
    );
}

export default connect()(Search);
