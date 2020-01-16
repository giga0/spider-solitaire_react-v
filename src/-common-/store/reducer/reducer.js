const initialState = {
  userName: '',
  scores: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        userName: action.payload.name
      }
    case 'GET_SCORES':
      return {
        ...state,
        scores: action.payload.scores
      }
    // case 'POST_SCORE':
    default: return state
  }
}

export default reducer
