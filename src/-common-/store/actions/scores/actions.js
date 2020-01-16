import ScoresResource from '../../resources/ScoresResource'

const scoresResource = new ScoresResource()

const actions = {
  getScores: (dispatch) => {
    scoresResource.get()
      .then(scores => {
        dispatch({ type: 'GET_SCORES', payload: { scores } })
      })
  }
}

export default actions
