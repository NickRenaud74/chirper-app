import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom'

function Nav({loggedIn}) {
    const [tab, setTab] = useState(0)
    const dispatch = useDispatch()
    const history = useHistory()

    function handleChange(e, newValue) {
        setTab(newValue)
    }

    function handleClick() {
        if (loggedIn) {
            dispatch(setAuthedUser(null))
            history.push('/login')
        }
    }

    return (
        <AppBar color='primary' position='static'>
            <Tabs
                variant='fullWidth'
                value={tab}
                onChange={handleChange}
            >
                <Tab label='Home' component={Link} to='/' />
                <Tab label='New Question' component={Link} to='/add' />
                <Tab label='Leaderboard' component={Link} to='/leaderboard' />
                <Tab label={loggedIn ? 'Logout': 'Login'} onClick={handleClick} />
            </Tabs>
        </AppBar>
    )
}

export default Nav