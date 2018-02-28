import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const ListExercises = ({dispatch, exercises}) => {
    return (
      <div>
        {Object.keys(exercises).map((item) => {
          let exercise = exercises[item];
          return <ul key={item}>
          <li>{exercise.name}</li>
          <li>{exercise.category}</li>
          <li>{exercise.description}</li>
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
