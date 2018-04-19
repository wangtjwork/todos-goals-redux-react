import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

const addGoal = (goal) => {
  return {
    type: ADD_GOAL,
    goal
  }
}

const removeGoal = (id) => {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export const handleAddGoal = (name, initInput) => {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal));

        initInput();
      })
      .catch(() => {
        alert('An error occured');
      });
  }
}

export const handleDeleteGoal = (goal) => {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));

    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoal(goal));
        alert('An error occured');
      })
  }
}
