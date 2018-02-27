import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExercises } from './../actions';

const ListExercises = ({dispatch, exercises}) => {
  console.log(exercises);
    return (
      <div>
        <button onClick={() => {
          dispatch(fetchExercises());
        }}>API CALL </button>
        {Object.keys(exercises).map((item) => {
          let exercise = exercises[item];
          console.log(exercises)
          return <ul key={item}>
          <li>{exercise.name}</li>
          <li>{exercise.category}</li>
          <li>{exercise.description.replace(/<[^>]*>/g, '')}</li>
          </ul>
        })}
      </div>
    );
}

ListExercises.propTypes = {
  dispatch: PropTypes.func,
  exercises: PropTypes.object
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  };
};

export default connect(mapStateToProps)(ListExercises);
