import React, { useState } from 'react'
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom'

function Nav() {
    const [tab, setTab] = useState(0)

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
                <Tab label='New Question' component={Link} to='/new-question' />
                <Tab label='Leaderboard' component={Link} to='/leaderboard' />
                <Tab label='Logout' component={Link} to='/' />
            </Tabs>
        </AppBar>
    )
}

export default Nav