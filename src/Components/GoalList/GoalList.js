import React from 'react';

import './GoalList.css';

const GoalList = ({courseGoals}) => {
    return (
        <ul className="goal-list">
            {courseGoals.map(goal => {
                return <li key={goal.id}>{goal.text}</li>
            })}
        </ul>
    )
}

export default GoalList;
