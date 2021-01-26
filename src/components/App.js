import React, { useEffect } from 'react'
import { getData } from '../actions/shared'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import CardTemplate from './CardTemplate'
import { Container } from '@material-ui/core'
import QuestionPoll from './QuestionPoll'

function App() {
  const authedUser = useSelector(state => state.authedUser)
  const dispatch = useDispatch()

  const loading = authedUser === null

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className="App">
      <LoadingBar />
      <Nav />
      {loading ? null :       
        <Container maxWidth='sm'>          
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/leaderboard'>
              <Leaderboard />
            </Route>
            <Route path='/questions/:questionId'>
              <CardTemplate component={QuestionPoll}/>
            </Route>
          </Switch>
        </Container>
      }
    </div>
  );
}

export default App;
