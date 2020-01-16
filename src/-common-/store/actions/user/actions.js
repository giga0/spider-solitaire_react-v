const actions = {
  setUser: (dispatch, userName) => dispatch({ type: 'SET_USER', payload: { name: userName } })
}

export default actions
