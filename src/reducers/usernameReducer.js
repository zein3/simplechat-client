const reducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_USERNAME':
      return action.data.newUsername;
    default:
      return state;
  }
}

export const setUsername = (newUsername) => {
  return {
    type: 'SET_USERNAME',
    data: {
      newUsername: newUsername
    }
  }
}

export default reducer
