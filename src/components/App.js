import React, { useEffect } from 'react'
import { getData } from '../actions/shared'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { useStyles } from '../styles/styles'
import { Container } from '@material-ui/core'
import PrivateRoute from './PrivateRoute'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import CardTemplate from './CardTemplate'
import QuestionPoll from './Questions/QuestionPoll'
import QuestionResults from './Questions/QuestionResults'
import NewQuestion from './NewQuestion'
import Login from './Login/Login'
import PageNotFound from './PageNotFound'

function App() {
  const authedUser = useSelector(state => state.authedUser)
  const dispatch = useDispatch()
  const classes = useStyles()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className="App">
      <LoadingBar className={classes.loadingBar} />
      <Nav authedUser={authedUser} />
      <Container maxWidth='sm'>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <PrivateRoute exact path='/' authedUser={authedUser}>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path='/add' authedUser={authedUser}>
            <NewQuestion />
          </PrivateRoute>
          <PrivateRoute exact path='/leaderboard' authedUser={authedUser}>
            <Leaderboard />
          </PrivateRoute>
          <PrivateRoute exact path='/questions/:questionId' authedUser={authedUser}>
            <CardTemplate component={QuestionPoll} />
          </PrivateRoute>
          <PrivateRoute exact path='/questions/:questionId/results' authedUser={authedUser}>
            <CardTemplate component={QuestionResults} />
          </PrivateRoute>
          <PrivateRoute path='*' authedUser={authedUser}>
            <PageNotFound />
          </PrivateRoute>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
