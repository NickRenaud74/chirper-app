import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom'

function Nav() {
    const [tab, setTab] = useState(0)
    const authedUser = useSelector(state => state.authedUser)

    const loggedIn = authedUser !== null

    function handleChange(e, newValue) {
        setTab(newValue)
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
                <Tab label={loggedIn ? 'Logout': 'Login'} component={Link} to='/Login' />
            </Tabs>
        </AppBar>
    )
}

export default Nav