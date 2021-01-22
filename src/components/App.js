import React, { useEffect } from 'react';
import { getData } from '../actions/shared'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import '../styles/App.css';

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
      <h1>WOULD YOU RATHER</h1>
      {loading ? null :
        <div>
          {authedUser}
        </div>
      }
    </div>
  );
}

export default App;
