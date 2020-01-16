import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import classes from './Home.module.scss'
import userActions from '../-common-/store/actions/user/actions'

import Btn from '../-common-/components/Button'

function Home(props) {
  const [ errorMsg, setErrorMsg ] = useState('')
  const history = useHistory()

  const playGame = () => {
    console.log('playGame')
  }

  const goToHighScores = () => {
    history.push('/high-scores')
  }

  const errorToDisplay = () => errorMsg && <p className={classes.home__error}>{ errorMsg }</p>

  return (
    <div className={ classes.home }>
      <div className={ classes.home__input }>
        <p>Enter your name before you start the game:</p>
        <input
          type="text"
          placeholder="Type your name here..."
          value={ props.userName }
          onChange={ props.saveUser } />
      </div>
      <div className={ classes.home__buttons }>
        <Btn click={ playGame }>Play a game</Btn>
        <Btn click={ goToHighScores }>View high scores</Btn>
      </div>
      { errorToDisplay() }
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
    saveUser: event => userActions.setUser(dispatch, event.target.value)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
