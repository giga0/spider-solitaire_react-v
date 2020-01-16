import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import classes from './HighScores.module.scss'
import scoreActions from '../-common-/store/actions/scores/actions'

import Btn from '../-common-/components/Button'

function HighScores(props) {
  const history = useHistory()

  const goBack = () => {
    console.log('goBack')
  }

  return (
    <div className={ classes.scores }>
      <div className={ classes.scores__tables }>
        <div className={ `${classes.scores__table} user-scores` }>
          <h3>{ props.userName } Scores</h3>
        </div>
        <div className={ `${classes.scores__table} high-scores` }>
          <h3>High Scores</h3>
        </div>
      </div>
      <div className={ classes['go-back-btn'] }>
        <Btn click={ props.getScores }>Go back</Btn>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.userName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getScores: () => scoreActions.getScores(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScores);
