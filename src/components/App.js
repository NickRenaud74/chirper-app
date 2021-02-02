import React, { useEffect } from 'react'
import { getData } from '../actions/shared'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { useStyles } from '../styles/cardStyles'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import CardTemplate from './CardTemplate'
import { Container } from '@material-ui/core'
import QuestionPoll from './QuestionPoll'
import QuestionResults from './QuestionResults'
import NewQuestion from './NewQuestion'
import Login from './Login'

function App() {
  const authedUser = useSelector(state => state.authedUser)
  const loading = useSelector(state => state.loadingBar.default)
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()

  const loggedIn = authedUser !== null

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  if (!loggedIn) {
   history.push('/login')
  }

  return (
    <div className="App">
      <LoadingBar className={classes.loadingBar} />
      <Nav />
      {loading !== 0 ? null :
        <Container maxWidth='sm'>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/add'>
              <NewQuestion />
            </Route>
            <Route path='/leaderboard'>
              <Leaderboard />
            </Route>
            <Route exact path='/questions/:questionId'>
              <CardTemplate component={QuestionPoll} />
            </Route>
            <Route path='/questions/:questionId/results'>
              <CardTemplate component={QuestionResults} />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </Container>
      }
    </div>
  );
}

export default App;
