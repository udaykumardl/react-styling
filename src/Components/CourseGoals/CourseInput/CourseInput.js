import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    const enteredText = event.target.value;
    setEnteredValue(enteredText);

    // Check if input is empty
    if (enteredText.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goals</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" className={!isValid ? 'invalid' : ''}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
