import React, { useState } from 'react'
import classes from './Home.module.scss'

import Btn from '../-common-/components/Button'

function Home() {
  const [ userName, setUserName ] = useState('')
  const [ errorMsg, setErrorMsg ] = useState('')

  const saveUser = event => {
    // this.$store.commit('user/setUser', e.target.value)
    setUserName(event.target.value)
  }

  const playGame = () => {
    console.log('playGame')
  }

  const goToHighScores = () => {
    console.log('goToHighScores')
  }

  const errorToDisplay = () => errorMsg && <p className={classes.home__error}>{ errorMsg }</p>

  return (
    <div className={ classes.home }>
      <div className={ classes.home__input }>
        <p>Enter your name before you start the game:</p>
        <input
          type="text"
          placeholder="Type your name here..."
          value={ userName }
          onChange={ saveUser } />
      </div>
      <div className={ classes.home__buttons }>
        <Btn click={ playGame }>Play a game</Btn>
        <Btn click={ goToHighScores }>View high scores</Btn>
      </div>
      { errorToDisplay() }
    </div>
  )
}

export default Home
