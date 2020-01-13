import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import classes from './App.module.scss'

const Home = lazy(() => import('./home/Home'))

function App() {
  return (
    <div className={ classes.app }>
      <h1 className= {classes.heading }>Spider Solitaire Game</h1>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App
