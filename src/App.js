import React, { useState } from 'react';
import './App.css';
import GoalList from './Components/GoalList/GoalList';
import NewGoal from './Components/NewGoal/NewGoal';

const App = () => {
  const[courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'}
  ])

  const addNewGoalHandler = newGoal => {
    setCourseGoals([...courseGoals, newGoal]);
    // setCourseGoals(courseGoals.concat(newGoal));
  };

  return <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList courseGoals={courseGoals}/>

  </div>;
};

export default App;
